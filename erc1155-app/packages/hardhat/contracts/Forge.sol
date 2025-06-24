// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

interface IMint1155 {
    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes calldata data
    ) external;
    function mintByForge(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) external;
} 

contract Forge is Ownable {
    IMint1155 public mint1155;

    constructor(address _mint1155) Ownable(msg.sender) {
        mint1155 = IMint1155(_mint1155);
    }
    


    function forgeItem(uint256[] memory ids) public {
    uint256 forgedId;

    if (ids.length == 2) {
        uint256 id1 = ids[0];
        uint256 id2 = ids[1];
        if ((id1 == 0 && id2 == 1) || (id1 == 1 && id2 == 0)) {
            forgedId = 3; // FlamingSword
        } else if ((id1 == 1 && id2 == 2) || (id1 == 2 && id2 == 1)) {
            forgedId = 4; // EnchantedShield
        } else if ((id1 == 0 && id2 == 2) || (id1 == 2 && id2 == 0)) {
            forgedId = 5; // BattleAxe
        } else {
            revert("Invalid 2-item combo");
        }

        mint1155.safeTransferFrom(msg.sender, address(0), id1, 1, "");
        mint1155.safeTransferFrom(msg.sender, address(0), id2, 1, "");
    } else if (ids.length == 3) {
        uint256 id1 = ids[0];
        uint256 id2 = ids[1];
        uint256 id3 = ids[2];
        // Check all 6 permutations of 0,1,2
        if (
            (id1 == 0 && id2 == 1 && id3 == 2) ||
            (id1 == 0 && id2 == 2 && id3 == 1) ||
            (id1 == 1 && id2 == 0 && id3 == 2) ||
            (id1 == 1 && id2 == 2 && id3 == 0) ||
            (id1 == 2 && id2 == 0 && id3 == 1) ||
            (id1 == 2 && id2 == 1 && id3 == 0)
        ) {
            forgedId = 6; // Hero’s Armor
            mint1155.safeTransferFrom(msg.sender, address(0), id1, 1, "");
            mint1155.safeTransferFrom(msg.sender, address(0), id2, 1, "");
            mint1155.safeTransferFrom(msg.sender, address(0), id3, 1, "");
        } else {
            revert("Invalid 3-item combo");
        }
    } else {
        revert("Invalid number of items");
    }

    mint1155.mintByForge(msg.sender, forgedId, 1, "");
    }
}