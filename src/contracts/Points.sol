// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Points is Ownable {
    uint256 public MAX_TOTAL_ITEM_POINT = 5000;
    uint256 public MAX_TOTAL_CHARACTER_POINT = 1000;
    uint256 public MAX_TOTAL_LAND_POINT = 100;

    uint256 public totalItemPoints = 0;
    uint256 public totalCharacterPoints = 0;
    uint256 public totalLandPoints = 0;
    mapping(address => uint256) public itemPoints;
    mapping(address => uint256) public characterPoints;
    mapping(address => uint256) public landPoints;
    mapping(address => mapping(address => uint256)) public itemAllowances;
    mapping(address => mapping(address => uint256)) public characterAllowances;
    mapping(address => mapping(address => uint256)) public landAllowances;

    /**
     * @dev Emitted when item points of `_itemPoints`, character points of
     * `_characterPoints` and land points of `_landPoints` are moved from
     * one account (`from`) to another (`to`).
     */
    event TransferPoints(
        address indexed from,
        address indexed to,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    );

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set
     * by a call to {approvePoints}. The item points of `_itemPoints`, character
     * points of `_characterPoints` and land points of `_landPoints` are the
     * new allowance.
     */
    event ApprovalPoints(
        address indexed owner,
        address indexed spender,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    );

    constructor() {}

    /**
     * @dev Return total points.
     */
    function totalPoints() public view returns (uint256[3] memory) {
        uint256[3] memory _totalPoints;
        _totalPoints = [totalItemPoints, totalCharacterPoints, totalLandPoints];
        return _totalPoints;
    }

    /**
     * @dev Return total points of account.
     */
    function pointsOf(address account) public view returns (uint256[3] memory) {
        uint256[3] memory _totalPointsOfAccount;
        _totalPointsOfAccount = [
            itemPoints[account],
            characterPoints[account],
            landPoints[account]
        ];
        return _totalPointsOfAccount;
    }

    /**
     * @dev Transfer item points of `_itemPoints`, character points of `_characterPoints`
     * and land points of `_landPoints` from one account (`owner`) to another account (`to`).
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have at least item points of `_itemPoints`, character points of
     *  `_characterPoints` and land points of `_landPoints`.
     */
    function transferPoints(
        address to,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    ) public returns (bool) {
        address owner = _msgSender();
        _transferPoints(owner, to, _itemPoints, _characterPoints, _landPoints);
        return true;
    }

    /**
     * @dev Returns the remaining number of item points, character points and land
     * points that `spender` will be allowed to spend on behalf of `owner` through
     * {transferFrom}. This is zero by default.
     *
     * This value changes when {approvePoints} or {transferFrom} are called.
     */
    function allowancePoints(address owner, address spender)
        public
        view
        returns (uint256[3] memory)
    {
        uint256[3] memory allowances;
        allowances = [
            itemAllowances[owner][spender],
            characterAllowances[owner][spender],
            landAllowances[owner][spender]
        ];
        return allowances;
    }

    /**
     * @dev Sets item points of `_itemPoints`, character points of `_characterPoints`
     * and land points of `_landPoints` as the allowance of `spender` over the caller's points.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits an {ApprovalPoints} event.
     */
    function approvePoints(
        address spender,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    ) public returns (bool) {
        address owner = _msgSender();
        _approvePoints(owner, spender, _itemPoints, _characterPoints, _landPoints);
        return true;
    }

    /**
     * @dev Moves `_itemPoints`, `_characterPoints` and `_landPoints` from `from` to `to`
     * using the allowance mechanism. `_itemPoints`, `_characterPoints` and `_landPoints`
     * is then deducted from the caller's allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {TransferPoints} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    ) public returns (bool) {
        address spender = _msgSender();
        _spendAllowancePoints(from, spender, _itemPoints, _characterPoints, _landPoints);
        _transferPoints(from, to, _itemPoints, _characterPoints, _landPoints);
        return true;
    }

    /**
     * @dev Moves `_itemPoints`, `_characterPoints` and `_landPoints` from `from` to `to`.
     *
     * Emits a {TransferPoints} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have item points of `_itemPoints`, character points of `_characterPoints`
     * and land points of `_landPoints` at least.
     */
    function _transferPoints(
        address from,
        address to,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    ) internal {
        require(from != address(0), "transfer from the zero address");
        require(to != address(0), "transfer to the zero address");

        uint256 fromItemPoints = itemPoints[from];
        uint256 fromCharacterPoints = characterPoints[from];
        uint256 fromLandPoints = landPoints[from];
        require(
            fromItemPoints >= _itemPoints,
            "transfer item points exceeds item points of account"
        );
        require(
            fromCharacterPoints >= _characterPoints,
            "transfer character points exceeds character points of account"
        );
        require(
            fromLandPoints >= _landPoints,
            "transfer land points exceeds land points of account"
        );

        itemPoints[from] = fromItemPoints - _itemPoints;
        itemPoints[to] += _itemPoints;
        characterPoints[from] = fromCharacterPoints - _characterPoints;
        characterPoints[to] += _characterPoints;
        landPoints[from] = fromLandPoints - _landPoints;
        landPoints[to] += _landPoints;

        emit TransferPoints(from, to, _itemPoints, _characterPoints, _landPoints);
    }

    /** @dev Creates `_itemPoints`, `_characterPoints` and `_landPoints`, and assigns
     * them to `account`, increasing the total points.
     *
     * Emits a {TransferPoints} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function mintPoints(
        address account,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    ) external onlyOwner {
        require(account != address(0), "mint to the zero address");

        require(totalItemPoints + _itemPoints <= MAX_TOTAL_ITEM_POINT, "Max item supply overflow");
        require(
            totalCharacterPoints + _characterPoints <= MAX_TOTAL_CHARACTER_POINT,
            "Max character supply overflow"
        );
        require(totalLandPoints + _landPoints <= MAX_TOTAL_LAND_POINT, "Max land supply overflow");

        totalItemPoints += _itemPoints;
        totalCharacterPoints += _characterPoints;
        totalLandPoints += _landPoints;
        itemPoints[account] += _itemPoints;
        characterPoints[account] += _characterPoints;
        landPoints[account] += _landPoints;

        emit TransferPoints(address(0), account, _itemPoints, _characterPoints, _landPoints);
    }

    /**
     * @dev Destroys `_itemPoints`, `_characterPoints` and `_landPoints` from `account`,
     * reducing the total points.
     *
     * Emits a {TransferPoints} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least item points of `_itemPoints`, character points
     * of `_characterPoints` and land points of `_landPoints`.
     */
    function burnPoints(
        address account,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    ) external onlyOwner {
        require(account != address(0), "burn from the zero address");

        uint256 itemPointsOfAccount = itemPoints[account];
        uint256 characterPointsOfAccount = characterPoints[account];
        uint256 landPointsOfAccount = landPoints[account];
        require(
            itemPointsOfAccount >= _itemPoints,
            "burn item points exceeds item points of account"
        );
        require(
            characterPointsOfAccount >= _characterPoints,
            "burn character points exceeds character points of account"
        );
        require(
            landPointsOfAccount >= _landPoints,
            "burn land points exceeds land points of account"
        );

        itemPoints[account] = itemPointsOfAccount - _itemPoints;
        characterPoints[account] = characterPointsOfAccount - _characterPoints;
        landPoints[account] = landPointsOfAccount - _landPoints;
        totalItemPoints -= _itemPoints;
        totalCharacterPoints -= _characterPoints;
        totalLandPoints -= _landPoints;

        emit TransferPoints(account, address(0), _itemPoints, _characterPoints, _landPoints);
    }

    /**
     * @dev Sets  `_itemPoints`, `_characterPoints` and `_landPoints` as the allowance
     * of `spender` over the `owner` s points.
     *
     * Emits an {ApprovalPoints} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approvePoints(
        address owner,
        address spender,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    ) internal {
        require(owner != address(0), "approve from the zero address");
        require(spender != address(0), "approve to the zero address");

        itemAllowances[owner][spender] = _itemPoints;
        characterAllowances[owner][spender] = _characterPoints;
        landAllowances[owner][spender] = _landPoints;

        emit ApprovalPoints(owner, spender, _itemPoints, _characterPoints, _landPoints);
    }

    /**
     * @dev Updates `owner` s allowance for `spender` based on spent `_itemPoints`,
     * `_characterPoints` and `_landPoints`.
     *
     * Might emit an {ApprovalPoints} event.
     */
    function _spendAllowancePoints(
        address owner,
        address spender,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    ) internal {
        _approvePoints(owner, spender, _itemPoints, _characterPoints, _landPoints);
        uint256[3] memory currentAllowance = allowancePoints(owner, spender);
        require(currentAllowance[0] >= _itemPoints, "insufficient item points allowance");
        require(currentAllowance[1] >= _characterPoints, "insufficient character points allowance");
        require(currentAllowance[2] >= _landPoints, "insufficient land points allowance");

        uint256 allowanceItemPoints = currentAllowance[0] - _itemPoints;
        uint256 allowanceCharacterPoints = currentAllowance[1] - _characterPoints;
        uint256 allowanceLandPoints = currentAllowance[2] - _landPoints;
        _approvePoints(
            owner,
            spender,
            allowanceItemPoints,
            allowanceCharacterPoints,
            allowanceLandPoints
        );
    }
}