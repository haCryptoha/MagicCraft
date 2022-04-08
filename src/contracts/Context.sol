// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.4;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 */
contract Context {
    function _msgSender() internal view returns (address) {
        return msg.sender;
    }
}