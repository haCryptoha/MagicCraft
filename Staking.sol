//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

import "./IPoints.sol";

contract MCRTStaking is OwnableUpgradeable {
    using SafeERC20Upgradeable for IERC20Upgradeable;
    IERC20Upgradeable public stakingToken;

    event Stake(uint256 stakeId, address staker);
    event Unstake(uint256 stakeId, address unstaker);

    struct StakingInfo {
        uint256 id;
        address owner;
        uint256 timeToUnlock;
        uint256 stakingTime;
        uint256 tokensStaked;
        uint256 tokensStakedWithBonus;
        bool option; // false: Bonus, true: NFT Point
        bool withdrawnPoint;
    }
    mapping(address => uint256) public balances;
    mapping(address => uint256) public pBalances;
    mapping(address => uint256) public stakingNonce;

    mapping(address => uint256) public userRewardPerTokenPaid;
    mapping(address => mapping(uint256 => uint256)) public rewards;
    mapping(uint256 => uint256) public bonusTokenMultiplier;
    mapping(address => uint256) public tokensStakedByAddress;
    mapping(address => uint256) public tokensStakedWithBonusByAddress;
    mapping(address => mapping(uint256 => StakingInfo)) public stakingInfoForAddress;

    mapping(uint256 => uint256[3]) public pointRewards;
    mapping(uint256 => uint256) public minStakeTokensForPoint;

    bool public stakingEnabled;
    uint256 public rewardRate; // 1 tokens per sec = 86400 tokens per day
    uint256 private constant DIVISOR = 1e11;
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;
    uint256 public uniqueAddressesStaked;
    uint256 public totalTokensStaked;
    uint256 public pTotalTokensStaked;
    uint256 public totalTokensStakedWithBonusTokens;
    uint256 public totalRewardsLeft;

    address public pointAddress;

    uint256[50] private __gap;

    /** Initializes the staking contract
    @param tokenAddress_ the token address that will be staked
    @param pointAddress_ the point address for giving NFT point
    @param rewardRate_ reward rate per second
     */
    function initialize(
        address tokenAddress_,
        address pointAddress_,
        uint256 rewardRate_
    ) external initializer {
        __Ownable_init();

        stakingToken = IERC20Upgradeable(tokenAddress_);
        pointAddress = pointAddress_;
        stakingEnabled = true;
        rewardRate = rewardRate_;
    }

    /** Computes the reward per token
     */
    function rewardPerToken() public view returns (uint256) {
        if (totalTokensStakedWithBonusTokens == 0) {
            return 0;
        }
        return
            rewardPerTokenStored +
            (((block.timestamp - lastUpdateTime) * rewardRate * 1e18) /
                totalTokensStakedWithBonusTokens);
    }

    /** Computes the earned amount thus far by the address
    @param account_ account to get the earned ammount for
    @param stakeId_ stake id for account
     */
    function earned(address account_, uint256 stakeId_) public view returns (uint256) {
        return
            ((stakingInfoForAddress[account_][stakeId_].tokensStakedWithBonus *
                (rewardPerToken() - userRewardPerTokenPaid[account_])) / 1e18) +
            rewards[account_][stakeId_];
    }

    /** modifier that updates and computes the correct internal variables
    @param account_ the account called for
     */
    modifier updateReward(address account_) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = block.timestamp;

        for (uint256 i = 0; i < stakingNonce[account_]; i++) {
            if (stakingInfoForAddress[account_][i].tokensStakedWithBonus != 0)
                rewards[account_][i] = earned(account_, i);
        }
        userRewardPerTokenPaid[account_] = rewardPerTokenStored;

        _;
    }

    /** Staking function
    @param amount_ the amount to stake
    @param lockTime_ the lock time to lock the stake for
     */
    function stake(
        uint256 amount_,
        uint256 lockTime_,
        bool option_
    ) external updateReward(msg.sender) {
        require(stakingEnabled, "STAKING_DISABLED");
        require(amount_ != 0, "CANNOT_STAKE_0");
        require(bonusTokenMultiplier[lockTime_] != 0, "LOCK_TIME_ERROR");

        if (stakingNonce[msg.sender] == 0) {
            uniqueAddressesStaked++;
        }

        if (!option_) {
            uint256 tokensWithBonus = (amount_ * bonusTokenMultiplier[lockTime_]) / DIVISOR;

            totalTokensStaked += amount_;
            totalTokensStakedWithBonusTokens += tokensWithBonus;
            balances[msg.sender] += tokensWithBonus;
            tokensStakedByAddress[msg.sender] += amount_;
            tokensStakedWithBonusByAddress[msg.sender] += tokensWithBonus;

            StakingInfo storage data = stakingInfoForAddress[msg.sender][stakingNonce[msg.sender]];
            data.owner = msg.sender;
            data.stakingTime = block.timestamp;
            data.tokensStaked = amount_;
            data.timeToUnlock = block.timestamp + lockTime_;
            data.tokensStakedWithBonus = tokensWithBonus;
            data.id = stakingNonce[msg.sender];

            stakingNonce[msg.sender]++;
        } else {
            require(
                minStakeTokensForPoint[lockTime_] != 0 &&
                    amount_ >= minStakeTokensForPoint[lockTime_],
                "Not enough token to stake for Point"
            );
            pBalances[msg.sender] += amount_;
            pTotalTokensStaked += amount_;
            tokensStakedByAddress[msg.sender] += amount_;

            StakingInfo storage data = stakingInfoForAddress[msg.sender][stakingNonce[msg.sender]];
            data.owner = msg.sender;
            data.stakingTime = block.timestamp;
            data.tokensStaked = amount_;
            data.timeToUnlock = block.timestamp + lockTime_;
            data.tokensStakedWithBonus = 0;
            data.id = stakingNonce[msg.sender];
            data.option = true;

            stakingNonce[msg.sender]++;
        }

        stakingToken.safeTransferFrom(msg.sender, address(this), amount_);
        emit Stake(stakingNonce[msg.sender], msg.sender);
    }

    /** Unstake function
    @param stakeId_ the stake id to unstake
     */
    function unstake(uint256 stakeId_) external updateReward(msg.sender) {
        StakingInfo storage info = stakingInfoForAddress[msg.sender][stakeId_];
        require(info.timeToUnlock <= block.timestamp, "Not reached to timeToUnlock yet");

        if (!info.option) {
            getRewardInternal(stakeId_);

            totalTokensStaked -= info.tokensStaked;
            totalTokensStakedWithBonusTokens -= info.tokensStakedWithBonus;
            balances[msg.sender] -= info.tokensStakedWithBonus;
            tokensStakedByAddress[msg.sender] -= info.tokensStaked;
            tokensStakedWithBonusByAddress[msg.sender] -= info.tokensStakedWithBonus;
        } else {
            pTotalTokensStaked -= info.tokensStaked;
            pBalances[msg.sender] -= info.tokensStaked;
            tokensStakedByAddress[msg.sender] -= info.tokensStaked;

            if (!info.withdrawnPoint) getPointInternal(info.id);
        }

        uint256 tokensTotal = info.tokensStaked;

        delete stakingInfoForAddress[msg.sender][stakeId_];

        emit Unstake(stakeId_, msg.sender);

        stakingToken.safeTransfer(msg.sender, tokensTotal);
    }

    /** The function called to get the reward for user's stake
    @param stakeId_ the stake id to unstake
     */
    function getPointReward(uint256 stakeId_) external {
        StakingInfo memory info = stakingInfoForAddress[msg.sender][stakeId_];
        require(info.option, "Invalid staking option");
        require(!info.withdrawnPoint, "Already withdrawn");

        getPointInternal(stakeId_);
    }

    /** The function called to get the reward for user's stake
    @param stakeId_ the stake id to unstake
     */
    function getRewardInternal(uint256 stakeId_) internal {
        uint256 reward = rewards[msg.sender][stakeId_];
        require(reward <= totalRewardsLeft, "Not enough reward token remains");

        rewards[msg.sender][stakeId_] = 0;
        totalRewardsLeft -= reward;
        stakingToken.safeTransfer(msg.sender, reward);
    }

    /** The function called to get the point for user's stake
    @param stakeId_ the stake id to unstake
     */
    function getPointInternal(uint256 stakeId_) internal {
        StakingInfo storage info = stakingInfoForAddress[msg.sender][stakeId_];
        info.withdrawnPoint = true;

        uint256 timelock = info.timeToUnlock - info.stakingTime;

        IPoints(pointAddress).mintPoints(
            msg.sender,
            pointRewards[timelock][0],
            pointRewards[timelock][1],
            pointRewards[timelock][2]
        );
    }

    /** 
    @dev Sets the bonus multipliers and the allowed locking durations
    @param durations_ an array of the allowed staking durations
    @param mutiplier_ the multiplier dor all staking durations
     */
    function setBonusMultiplier(uint256[] calldata durations_, uint256[] calldata mutiplier_)
        external
        onlyOwner
    {
        for (uint256 i = 0; i < durations_.length; i++) {
            require(mutiplier_[i] >= DIVISOR, "Invalid multiplier");
            bonusTokenMultiplier[durations_[i]] = mutiplier_[i];
        }
    }

    /** 
    @dev Sets the point rewards and the allowed locking durations
    @param durations_ an array of the allowed staking durations
    @param rewardsPoints_ the multiplier dor all staking durations
     */
    function setPointReward(uint256 durations_, uint256[3] calldata rewardsPoints_)
        external
        onlyOwner
    {
        pointRewards[durations_] = [rewardsPoints_[0], rewardsPoints_[1], rewardsPoints_[2]];
    }

    /** 
    @dev Sets the min stake token for point and the allowed locking durations
    @param durations_ an array of the allowed staking durations
    @param amounts_ the multiplier dor all staking durations
     */
    function setMinStakeTokensForPoint(uint256[] calldata durations_, uint256[] calldata amounts_)
        external
        onlyOwner
    {
        for (uint256 i = 0; i < durations_.length; i++) {
            minStakeTokensForPoint[durations_[i]] = amounts_[i];
        }
    }

    /** 
    @dev Sets the staking enabled flag
    @param stakingEnabled_ weather or not staking should be enabled
    */
    function setStakingEnabled(bool stakingEnabled_) external onlyOwner {
        stakingEnabled = stakingEnabled_;
    }

    /** 
    @dev Sets the new reward rate
    @param rewardRate_ the reward rate to set up
    */
    function setRewardRate(uint256 rewardRate_) external onlyOwner {
        require(rewardRate_ != 0, "Cannot have reward Rate 0");
        rewardRate = rewardRate_;
    }

    /** 
    @dev Transfer Point contract ownership
    @param newOwner_ new owner address
    */
    function transferPointOwnership(address newOwner_) external onlyOwner {
        require(newOwner_ != address(0), "Cannot be address(0)");
        IPoints(pointAddress).transferOwnership(newOwner_);
    }

    /** 
    @dev Add token rewards to contract
    @param amount_ the token amount for reward
    */
    function addTokenRewards(uint256 amount_) external {
        stakingToken.safeTransferFrom(msg.sender, address(this), amount_);
        totalRewardsLeft += amount_;
    }

    /**
    @dev Returns all the user stakes
    @param userAddress_ returns all the user stakes
     */
    function getAllAddressStakes(address userAddress_) public view returns (StakingInfo[] memory) {
        StakingInfo[] memory stakings = new StakingInfo[](stakingNonce[userAddress_]);
        for (uint256 i = 0; i < stakingNonce[userAddress_]; i++) {
            StakingInfo memory staking = stakingInfoForAddress[userAddress_][i];
            if (staking.tokensStaked != 0) {
                stakings[i] = staking;
            }
        }
        return stakings;
    }
}
