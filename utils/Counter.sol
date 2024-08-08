// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint public count;

    function increment(uint256 amount) public {
        count += amount;
    }
}
