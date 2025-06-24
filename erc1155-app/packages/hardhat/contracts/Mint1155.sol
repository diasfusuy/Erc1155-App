//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
contract Mint1155 is ERC1155, Ownable {

    uint256 public constant Sword = 0;
    uint256 public constant Shield = 1;
    uint256 public constant Potion = 2;
    uint256 public constant FlamingSword = 3;
    uint256 public constant EnchantedShield = 4;
    uint256 public constant BattleAxe = 5;
    uint256 public constant HerosArmor = 6;
    address public ForgeContract;
    constructor(string memory _uri) ERC1155(_uri) Ownable (msg.sender){
        // Constructor to set the URI for the token
    }

    event TokenTraded(address indexed user, uint256 fromId, uint256 toId);

    mapping (address => mapping(uint256 => uint256)) public lastMinted;

    function mint(address account, uint256 id, uint256 amount, bytes memory data) public{
        require(id >= 0 && id <=2, "Token ID must be between 0 and 2 are mintable");
         require(block.timestamp > lastMinted[account][id] + 60, "You can only mint once every 60 seconds");
        _mint(account, id, amount, data);
        lastMinted[account][id] = block.timestamp;
    }

    modifier onlyForge() {
        require(msg.sender == ForgeContract, "Only the Forge contract can call this function");
        _;
    }

    function setForgeContract(address _forge) public onlyOwner {
        ForgeContract = _forge;
    }

    function mintByForge(address to, uint256 id, uint256 amount, bytes memory data) external onlyForge {
        require(id >= 3 && id <= 6, "Forge can only mint IDs 3-6");
        _mint(to, id, amount, data);
    }

    function trade(uint256 fromId, uint256 toId) public {
        require (fromId >= 0 && fromId <= 2, "You can only trade items with IDs 0 to 2");
        require(toId >= 0 && toId <= 2, "You can only receive items with IDs 0 to 2");
        require (fromId != toId, "You cannot trade the same item");
        require (balanceOf(msg.sender, fromId) > 0, "You do not own this item");
       
        _burn(msg.sender, fromId, 1);
        _mint(msg.sender, toId, 1, "");

        
        emit TokenTraded(msg.sender, fromId, toId);
    }
}