// SPDX-License-Identifier: MIT

pragma solidity 0.8.4;

import "./IYieldSource.sol";

/// @title The interface used for all Yield Sources for the PoolTogether protocol
/// @dev There are two privileged roles: the owner and the asset manager.  The owner can configure the asset managers.
interface IProtocolYieldSource is IYieldSource {

  /// @notice Allows someone to deposit into the yield source without receiving any shares.  The deposited token will be the same as token()
  /// This allows anyone to distribute tokens among the share holders.
  function sponsor(uint256 amount) external;

  /// @notice Allows the owner to transfer ERC20 tokens held by this contract to the target address.
  /// @dev This function is callable by the owner or asset manager.
  /// This function should not be able to transfer any tokens that represent user deposits.
  /// @param token The ERC20 token to transfer
  /// @param to The recipient of the tokens
  /// @param amount The amount of tokens to transfer
  function transferERC20(address token, address to, uint256 amount) external;

}