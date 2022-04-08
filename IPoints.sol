// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IPoints {
    function totalPoints() external view returns (uint256[3] memory);

    function pointsOf(address account) external view returns (uint256[3] memory);

    function transferPoints(
        address to,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    ) external returns (bool);

    function allowancePoints(address owner, address spender)
        external
        view
        returns (uint256[3] memory);

    function approvePoints(
        address spender,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    ) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    ) external returns (bool);

    function mintPoints(
        address account,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    ) external;

    function burnPoints(
        address account,
        uint256 _itemPoints,
        uint256 _characterPoints,
        uint256 _landPoints
    ) external;

    function transferOwnership(address newOwner) external;
}
