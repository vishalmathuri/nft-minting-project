// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract MyNFT is ERC721, Ownable, ReentrancyGuard {

    uint256 public constant MAX_SUPPLY = 5;
    uint256 public mintPrice = 1 ether;
    uint256 public totalMinted;

    string private baseTokenURI;

    event Minted(address indexed user, uint256 tokenId);

    constructor(string memory baseURI_)
        ERC721("MyNFT", "MNFT")
        Ownable(msg.sender)
    {
        baseTokenURI = baseURI_;
    }

    function mint(address to) external payable nonReentrant {
        require(totalMinted < MAX_SUPPLY, "Max supply reached");
        require(msg.value == mintPrice, "Incorrect MATIC");

        totalMinted++;
        uint256 tokenId = totalMinted;

        _safeMint(to, tokenId);

        emit Minted(to, tokenId);
    }

    function setMintPrice(uint256 _price) external onlyOwner {
        mintPrice = _price;
    }

    function setBaseURI(string memory _uri) external onlyOwner {
        baseTokenURI = _uri;
    }

    function withdraw() external onlyOwner nonReentrant {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds");

        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Transfer failed");
    }

    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }
}