# Erc1155-App

# 🧪 Erc1155-App: Forgeable Token Collection on Polygon

A decentralized application (dApp) built using [Scaffold-ETH 2](https://github.com/scaffold-eth/scaffold-eth-2) that implements a forgeable ERC1155 token collection on the Polygon network. The app features minting, forging (burn & mint logic), wallet integration, and dynamic network handling with a clean frontend UI.

---

## 🔥 Features

- ✅ Mint any of the **first 3 tokens (IDs 0–2)** for free (with a 1-minute cooldown)
- 🔄 **Forge tokens** (IDs 3–6) by burning combinations of existing tokens:
  - `token 3` ← burn `token 0 + token 1`
  - `token 4` ← burn `token 1 + token 2`
  - `token 5` ← burn `token 0 + token 2`
  - `token 6` ← burn `token 0 + token 1 + token 2`
- 🔥 **Burn tokens [3–6]** — no return
- 🔁 **Trade any token for token 0–2**
- 🌐 **Network-aware** — prompts user to switch to Polygon if not already
- 💸 Shows wallet's **MATIC balance** and **token holdings**
- 🧠 Clean architecture: **separate ERC1155 and forging contracts**
- 🎨 Styled with Tailwind CSS for a modern user experience
- 🔗 Direct link to token collection on [OpenSea](https://opensea.io/)

---

## 💻 Tech Stack

- [Scaffold-ETH 2](https://github.com/scaffold-eth/scaffold-eth-2)
- Hardhat
- Solidity
- TypeScript & React
- Tailwind CSS
- Ethers.js
- Polygon (Amoy testnet)
- MetaMask Integration

---

## 📁 Contracts

- `Mint1155.sol` – ERC1155 token contract
- `Forge.sol` – Forging contract that requires minting permissions on `Mint1155`

The `Forge` contract allows controlled minting based on token burn combinations and enforces forging rules.

---

## 🖼 Token Rules

| Token ID | Mintable | Cost | Forged From        | Tradeable | Burnable |
|----------|----------|------|--------------------|-----------|----------|
| 0        | ✅        | Free | —                  | ✅         | ✅        |
| 1        | ✅        | Free | —                  | ✅         | ✅        |
| 2        | ✅        | Free | —                  | ✅         | ✅        |
| 3        | ❌        | —    | 0 + 1              | ❌         | ✅        |
| 4        | ❌        | —    | 1 + 2              | ❌         | ✅        |
| 5        | ❌        | —    | 0 + 2              | ❌         | ✅        |
| 6        | ❌        | —    | 0 + 1 + 2          | ❌         | ✅        |

---

## 🧪 Local Setup

```bash
# clone the repo
git clone https://github.com/diasfusuy/Erc1155-App.git
cd Erc1155-App

# install dependencies
yarn install

# start local blockchain
yarn chain

# deploy contracts
yarn deploy

# run the frontend
yarn dev
