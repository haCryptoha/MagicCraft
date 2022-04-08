import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Row, Col, Container } from "react-bootstrap";
import { BigNumber } from "ethers";
import { useWeb3React } from "@web3-react/core";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Shared/Footer";

// styles
import "./index.scss";

//Images
import graph from "assets/Group2.png";
import withdrawClaim from "assets/Group3.png";
import clock from "assets/Clock.png";
import logo from "assets/favicon.ico";

// Hooks
import { useMCRT, usePointContract, useStakeContract } from "hooks/useContract";
import { useApprove } from "hooks/useApprove";

const timelocks = [
  3600,
  30 * 86400,
  90 * 86400,
  180 * 86400,
  365 * 86400,
  365 * 3 * 86400,
  365 * 5 * 86400,
];

const nftRewards = ["Land", null, null, "Item", "Character", "Land", "Land"];
const nftRewardsTexts = ["Item", "Character", "Land"];

const E18 = BigNumber.from(10).pow(18);
const E14 = BigNumber.from(10).pow(14);
const E9 = BigNumber.from(10).pow(9);
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

const VStaking = (props) => {
  const { account } = useWeb3React();

  const [rewardRate, setRewardRate] = useState(0);
  const [stakingNonce, setStakingNonce] = useState(0);
  const [bonusPercents, setBonusPercents] = useState([]);
  const [minStakeForTokens, setMinStakeForTokens] = useState([]);
  const [stakeInfo, setStakeInfo] = useState([]);
  const [rewards, setRewards] = useState([]);
  const [pointRewards, setPointRewards] = useState([]);
  const [totalEarned, setTotalEarned] = useState(0);
  const [totalStaked, setTotalStaked] = useState(0);
  const [totalTokensStaked, setTotalTokensStaked] = useState();
  const [rewardOption, setRewardOption] = useState(false);
  const [apy, setAPY] = useState(0);

  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [visibleOptionDropdown, setVisibleOptionDropdown] = useState(false);

  const [dropdownValue, setDropdownValue] = useState(0);
  const [dropdownOptionValue, setDropdownOptionValue] = useState(0);

  const [isStaking, setIsStaking] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [amount, setAmount] = useState(0);
  const [stakingTime, setStakingTime] = useState("");

  const stakeContract = useStakeContract();
  const pointContract = usePointContract();
  const mcrtTokenContract = useMCRT();
  const { onApprove } = useApprove(mcrtTokenContract);

  useEffect(async () => {
    let interval;

    if (account) {
      await getInitData();
      await updateRewards();

      interval = setInterval(async () => {
        await updateRewards();
      }, 30000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [account]);

  useEffect(() => {
    if (rewardOption && minStakeForTokens.length != 0) {
      setAmount(
        minStakeForTokens[
          timelocks.findIndex(
            (it) => it == dropdownList[dropdownValue].duration / 1000
          )
        ]
          .div(E18)
          .toNumber()
      );
    }

    const interval = setInterval(() => {
      let today = new Date(
        new Date().getTime() + dropdownList[dropdownValue].duration
      ).toISOString();
      today = today.split("T").join(" ").split(".")[0];
      setStakingTime(today);
    }, 1000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [dropdownValue, minStakeForTokens, timelocks, rewardOption]);

  useEffect(() => {
    if (rewardRate && totalTokensStaked) {
      if (BigNumber.from(totalStaked).toNumber() == 0) setAPY(10000);
      else
        setAPY(
          rewardRate
            .mul(3600 * 24 * 365)
            .div(totalTokensStaked)
            .mul(100)
            .toNumber()
        );
    }
  }, [rewardRate, totalTokensStaked]);

  useEffect(async () => {
    if (!stakeContract) return;

    let arr1 = [];
    let arr2 = [];
    let arr4 = [];

    for (let i = 0; i < timelocks.length; i++) {
      arr1.push(
        BigNumber.from(
          await stakeContract.methods
            .minStakeTokensForPoint(timelocks[i])
            .call()
        )
      );
      arr2.push(
        BigNumber.from(
          await stakeContract.methods.bonusTokenMultiplier(timelocks[i]).call()
        )
          .div(E9)
          .toNumber() - 100
      );
      arr4.push([
        await stakeContract.methods.pointRewards(timelocks[i], 0).call(),
        await stakeContract.methods.pointRewards(timelocks[i], 1).call(),
        await stakeContract.methods.pointRewards(timelocks[i], 2).call(),
      ]);
    }

    setMinStakeForTokens([...arr1]);
    setBonusPercents([...arr2]);
    setPointRewards([...arr4]);
    setRewardRate(
      BigNumber.from(await stakeContract.methods.rewardRate().call())
    );
    setTotalTokensStaked(
      BigNumber.from(await stakeContract.methods.totalTokensStaked().call())
    );
  }, [stakeContract]);

  const updateRewards = async () => {
    let arr = [];
    let sum = 0;

    const nonce = Number(
      await stakeContract.methods.stakingNonce(account).call()
    );

    for (let i = 0; i < nonce; i++) {
      const temp = BigNumber.from(
        await stakeContract.methods.earned(account, i).call()
      )
        .div(E14)
        .toNumber();

      arr.push(Number(temp / 10000.0));
      sum += temp;
    }
    setRewards([...arr]);
    setTotalEarned(sum);
  };

  const getInitData = async () => {
    // Get stakingNonce
    // Get staking information

    let arr1 = [];

    const tempNonce = Number(
      await stakeContract.methods.stakingNonce(account).call()
    );
    let sum = BigNumber.from(0);
    for (let i = 0; i < tempNonce; i++) {
      const temp = await stakeContract.methods
        .stakingInfoForAddress(account, i)
        .call();

      arr1.push({
        id: temp.id,
        option: temp.option,
        owner: temp.owner,
        stakingTime: temp.stakingTime,
        timeToUnlock: temp.timeToUnlock,
        tokensStaked: temp.tokensStaked,
        tokensStakedWithBonus: temp.tokensStakedWithBonus,
        withdrawnPoint: temp.withdrawnPoint,
      });
      sum = BigNumber.from(sum).add(BigNumber.from(temp.tokensStaked).div(E18));
    }
    setStakingNonce(tempNonce);
    setStakeInfo([...arr1]);
    setTotalStaked(sum.toNumber());
  };

  const increaseStaking = async () => {
    setIsStaking(true);

    const allowance = await mcrtTokenContract.methods
      .allowance(account, stakeContract.options.address)
      .call();
    const balance = await mcrtTokenContract.methods.balanceOf(account).call();

    if (amount == 0) {
      toast.error("Cannot stake zero amount");
      setIsStaking(false);
      return;
    }

    // Approve allowance
    if (BigNumber.from(amount).gt(BigNumber.from(allowance).div(E18))) {
      try {
        await onApprove(mcrtTokenContract);
        toast.success(
          "Approve is Success!, You can stake the token since now!"
        );
      } catch (err) {
        toast.error("Approve has been failed!");
      }
    }

    // Check wallet MCRT token balance
    if (BigNumber.from(amount).gt(BigNumber.from(balance).div(E18))) {
      toast.error("Enough MCRT token in your wallet!");
    }

    stakeContract.methods
      .stake(
        BigNumber.from(amount).mul(E18).toString(),
        dropdownList[dropdownValue].duration / 1000,
        rewardOption
      )
      .send({ from: account })
      .on("receipt", (tx) => {
        setIsStaking(false);
        getInitData();
        toast.success("Staking tokens has been succeed!");
      })
      .on("error", () => {
        setIsStaking(false);
        toast.error("Staking tokens has been failed!");
      });
  };

  const withdraw = async () => {
    let claimCount = 0;
    let rewardIds = [];
    let pRewardIds = [];
    const today = new Date().getTime();

    setIsClaiming(true);

    if (stakeInfo.length == 0) {
      setIsClaiming(false);
      return;
    }

    for (let i = 0; i < stakeInfo.length; i++) {
      if (
        today >= Number(stakeInfo[i].timeToUnlock) * 1000 &&
        stakeInfo[i].owner != ZERO_ADDRESS
      ) {
        rewardIds.push(i);
      } else if (
        stakeInfo[i].option &&
        !stakeInfo[i].withdrawnPoint &&
        stakeInfo[i].owner != ZERO_ADDRESS
      ) {
        pRewardIds.push(i);
      }
    }

    if (rewardIds.length == 0) claimCount++;

    if (pRewardIds.length == 0) claimCount++;

    if (claimCount == 2) {
      setIsClaiming(false);
      toast.error("No staking is available to get rewards!");
      return;
    }

    if (rewardIds.length != 0) {
      stakeContract.methods
        .batchUnstake(rewardIds)
        .send({ from: account })
        .on("receipt", (tx) => {
          claimCount++;

          if (claimCount == 2) {
            setIsClaiming(false);
            toast.success("UnStaking tokens has been succeed!");
          }

          getInitData();
        })
        .on("error", () => {
          claimCount++;
          if (claimCount == 2) setIsClaiming(false);
          toast.error("UnStaking tokens has been failed!");
        });
    }

    if (pRewardIds.length != 0) {
      stakeContract.methods
        .batchGetPointReward(pRewardIds)
        .send({ from: account })
        .on("receipt", (tx) => {
          claimCount++;

          if (claimCount == 2) {
            setIsClaiming(false);
            toast.success("You received NFT rewards successfully!");
          }

          getInitData();
        })
        .on("error", () => {
          claimCount++;
          if (claimCount == 2) setIsClaiming(false);
          toast.error("Getting NFT rewards has been failed!");
        });
    }
  };

  const renderStakeAmount = () => {
    return (
      <input
        disabled={rewardOption}
        type="number"
        className="vstaking__stake__action-input"
        value={amount}
        onInput={(e) => setAmount(e.target.value)}
        min={0}
      />
    );
  };

  const renderTokenRewardTable = () => {
    if (!account || stakeInfo.length == 0) {
      return (
        <table>
          <tr>
            <th>Duartion</th>
            <th>Bonus</th>
          </tr>
          {timelocks.map((tl, idx) => {
            return (
              <tr>
                {tl < 3600 * 24 ? (
                  <td>{tl / 3600} hours</td>
                ) : (
                  <td>
                    {tl / 3600 / 24 >= 365
                      ? `${tl / 3600 / 24 / 365} years`
                      : `${tl / 3600 / 24} days`}
                  </td>
                )}
                <td>
                  {bonusPercents[timelocks.findIndex((it) => it == tl)]} %
                </td>
              </tr>
            );
          })}
        </table>
      );
    }

    return (
      <table>
        <tr>
          <th>Duartion</th>
          <th>Bonus</th>
          <th>Staked</th>
          <th>MCRT Reward </th>
          <th>Staked Until</th>
        </tr>
        {new Array(stakingNonce).fill(0).map((_, idx) => {
          if (
            !stakeInfo[idx] ||
            stakeInfo[idx].option ||
            stakeInfo[idx].address == ZERO_ADDRESS ||
            rewards.length != stakeInfo.length
          )
            return;

          const duration =
            Number(stakeInfo[idx].timeToUnlock) -
            Number(stakeInfo[idx].stakingTime);

          const stakedUntil = new Date(
            Number(stakeInfo[idx].timeToUnlock) * 1000
          )
            .toISOString()
            .split("T")
            .join(" ")
            .split(".")[0]
            .split(":");
          return (
            <tr>
              {duration < 3600 * 24 ? (
                <td>{duration / 3600} hours</td>
              ) : (
                <td>
                  {duration / 3600 / 24 >= 365
                    ? `${duration / 3600 / 24 / 365} years`
                    : `${duration / 3600 / 24} days`}
                </td>
              )}
              <td>
                {bonusPercents[timelocks.findIndex((it) => it == duration)]} %
              </td>
              <td>
                {" "}
                {BigNumber.from(stakeInfo[idx].tokensStaked)
                  .div(E18)
                  .toNumber()
                  .toLocaleString()}
              </td>
              <td>{rewards[idx].toLocaleString()}</td>
              <td>{stakedUntil[0] + ":" + stakedUntil[1]}</td>
            </tr>
          );
        })}
      </table>
    );
  };

  const renderNFTRewardTable = () => {
    if (!account || stakeInfo.length == 0) {
      return (
        <table>
          <tr>
            <th>Duartion</th>
            <th>NFT</th>
            <th>MCRT Required</th>
          </tr>

          {timelocks.map((tl, idx) => {
            const tIndex = timelocks.findIndex((it) => it == tl);
            return (
              <tr>
                {tl < 3600 * 24 ? (
                  <td>{tl / 3600} hours</td>
                ) : (
                  <td>
                    {tl / 3600 / 24 >= 365
                      ? `${tl / 3600 / 24 / 365} years`
                      : `${tl / 3600 / 24} days`}
                  </td>
                )}
                <td>{nftRewards[tIndex] || "None"}</td>
                <td>{`${BigNumber.from(minStakeForTokens[tIndex]).div(
                  E18
                )}`}</td>
              </tr>
            );
          })}
        </table>
      );
    }

    return (
      <table>
        <tr>
          <th>Duartion</th>
          <th>NFT</th>
          <th>MCRT Required</th>
          <th>Earned NFT</th>
        </tr>

        {new Array(stakingNonce).fill(0).map((_, idx) => {
          if (
            !stakeInfo[idx] ||
            !stakeInfo[idx].option ||
            stakeInfo[idx].address == ZERO_ADDRESS
          )
            return;

          const duration =
            Number(stakeInfo[idx].timeToUnlock) -
            Number(stakeInfo[idx].stakingTime);
          const tIndex = timelocks.findIndex((it) => it == duration);
          const pRewards = stakeInfo[idx].withdrawnPoint
            ? 0
            : pointRewards[tIndex][
                nftRewardsTexts.findIndex((it) => it == nftRewards[tIndex])
              ];

          return (
            <tr>
              {duration < 3600 * 24 ? (
                <td>{duration / 3600} hours</td>
              ) : (
                <td>
                  {duration / 3600 / 24 >= 365
                    ? `${duration / 3600 / 24 / 365} years`
                    : `${duration / 3600 / 24} days`}
                </td>
              )}
              <td>{nftRewards[tIndex]}</td>
              <td>{`${BigNumber.from(minStakeForTokens[tIndex]).div(E18)}`}</td>
              <td>{pRewards}</td>
            </tr>
          );
        })}
      </table>
    );
  };

  const renderStake = () => {
    return (
      <button
        disabled={account ? false : true}
        className="vstaking__stake__action__button"
        onClick={() => increaseStaking()}
      >
        {isStaking ? (
          <div className="loading_btn_style">
            <span>
              <i className="fa fa-spinner fa-spin"></i> Confirming
            </span>
          </div>
        ) : (
          <div className="btn_style">
            <img src={graph} /> <span> Stake</span>
          </div>
        )}
      </button>
    );
  };

  const renderUnStake = () => {
    return (
      <button
        disabled={account ? false : true}
        className="vstaking__stake__action__button"
        onClick={() => withdraw()}
      >
        {isClaiming ? (
          <div className="loading_btn_style">
            <span>
              <i className="fa fa-spinner fa-spin"></i> Confirming
            </span>
          </div>
        ) : (
          <div className="btn_style">
            <img src={withdrawClaim} /> <span>Claim reward tokens</span>
          </div>
        )}
      </button>
    );
  };

  const dropdownList = [
    { text: "Stake (lock) for 1 hour", duration: 3600 * 1000 },
    { text: "Stake (lock) for 30 days", duration: 30 * 3600 * 24 * 1000 },
    { text: "Stake (lock) for 90 days", duration: 90 * 3600 * 24 * 1000 },
    { text: "Stake (lock) for 180 days", duration: 180 * 3600 * 24 * 1000 },
    { text: "Stake (lock) for 1 year", duration: 365 * 3600 * 24 * 1000 },
    { text: "Stake (lock) for 3 years", duration: 3 * 365 * 3600 * 24 * 1000 },
    { text: "Stake (lock) for 5 years", duration: 5 * 365 * 3600 * 24 * 1000 },
  ];

  return (
    <div>
      <div className="vstaking">
        <Container className="vstaking__stake">
          <Row>
            <Col sm={6}>
              <Row>
                <h1>MCRT Staking </h1>

                <h4>Choose Your Staking Rewards:</h4>

                <Col sm={6} className="vstaking__option">
                  <div className="vstaking__option-wrapper">
                    <button
                      className={`${rewardOption ? "" : "active"}`}
                      onClick={() => setRewardOption(false)}
                    >
                      MCRT Token
                    </button>
                  </div>
                </Col>

                <Col sm={6} className="vstaking__option">
                  <div className="vstaking__option-wrapper">
                    <button
                      className={`${rewardOption ? "active" : ""}`}
                      onClick={() => setRewardOption(true)}
                    >
                      NFT
                    </button>
                  </div>
                </Col>
              </Row>

              <h4 className="mt-4">Staked MCRT</h4>
              <div className="vstaking__stake__action-staked">
                <img src={logo} alt="" />
                <span>{totalStaked.toLocaleString()}</span>
              </div>

              <h4 className="mt-4">Token Amount</h4>
              <div className="border_gradiant">{renderStakeAmount()}</div>

              <h4 className="mt-4">Staking Period</h4>
              <div style={{ position: "relative" }} className="border_gradiant">
                <div
                  className={`vstaking__stake__action-select ${
                    visibleDropdown ? "active" : ""
                  }`}
                  onClick={() => setVisibleDropdown(!visibleDropdown)}
                >
                  <span>{dropdownList[dropdownValue].text}</span>
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                    className="css-8mmkcg"
                    fill="#fff"
                  >
                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                  </svg>
                </div>
                {visibleDropdown && (
                  <ul className="vstaking__stake__action-option">
                    {dropdownList.map((it, idx) => {
                      return (
                        <li
                          key={idx}
                          onClick={() => {
                            setDropdownValue(idx);
                            setVisibleDropdown(false);
                          }}
                        >
                          {it.text}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              <p className="vstaking__stake__action__hint-till">
                <strong>Stake until</strong>
                <img src={clock} alt="clock" />
                <strong>{stakingTime}</strong>
              </p>

              {renderStake()}
              {renderUnStake()}

              <Container className="vstaking__help">
                <span>
                  - Stake as many times as you like
                  <br />
                  - You can stake or withdraw staked tokens at the end of
                  staking
                  <br />
                  - You can claim the reward tokens at the end of the staking
                  <br />
                </span>
              </Container>
            </Col>

            <Col sm={6} className="vstaking__stake__info">
              <div className="vstaking__stake__info-back">
                <h1>{Number(apy).toLocaleString()}% APY</h1>
              </div>

              <h4 className="my-2">
                {rewardOption ? "NFT Reward" : "MCRT Reward"}
              </h4>

              <div>
                {rewardOption
                  ? renderNFTRewardTable()
                  : renderTokenRewardTable()}
              </div>

              <br />
            </Col>
          </Row>
        </Container>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default VStaking;
