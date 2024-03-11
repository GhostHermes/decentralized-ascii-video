# Project Structure Overview

Our decentralized ASCII video dApp will be built with a focus on transparency, decentralization, and long-term preservation of content. This file outlines our initial structural plan, which is likely to adapt as the project evolves.

## 1. contracts/

* **The heart of our decentralized application.** Here, Solidity smart contracts define the vital logic governing our platform.
* **nft_contract.sol:** This core contract will handle:
    * **NFT Minting:** The process of creating unique tokens representing each ASCII video.
    * **Ownership Tracking:** Ensuring clear records of who owns each video NFT.
    * **ASCII Storage:**  Storing the ASCII representation of smaller videos directly on-chain for ultimate persistence. For larger videos, references to IPFS storage will be included.
    * **Metadata:**  Essential information about each video (title, creator, etc.) linked to the NFT.
* **governance_contract.sol:** (If Implemented) This contract will enable decentralized decision-making, allowing the community to vote on proposals for platform upgrades and changes.

## 2. frontend/

* **The User-Facing Experience.** This directory contains everything needed to power our  dApp's web interface.
* **src/**
    * **index.html:**  The foundational structure of our dApp's web page.
    * **app.js:**  The core JavaScript file handling:
        * **User interactions:** Upload, wallet connection, video playback, etc.
        * **Blockchain communication:** Interacting with our smart contracts via web3.js.
        * **ASCII Conversion:**  Implementing the chosen library to convert uploaded videos into ASCII art.
    * **styles.css:**  Styling to create a clean, functional, and visually appropriate interface.
* **lib/**
    * **web3.js:**  Our library for interacting with the blockchain (user wallets, contract calls).
    * **ascii_conversion_library.js:** (Once selected) The library responsible for video-to-ASCII conversion. 

## 3. test/

* **Ensuring quality and reliability.** Robust testing is essential for a decentralized application.
* **nft_contract_test.js:** Hardhat tests meticulously verifying all functions of our NFT contract.
* **governance_contract_test.js** (If Implemented) Dedicated tests for our governance mechanisms.
* **frontend_tests/** (Potential folder) As our UI complexity grows, we'll implement tests to ensure a smooth user experience.

## 4. Other Top-Level Files

* **package.json:**  Records the necessary software dependencies for our project.
* **hardhat.config.js:** Configuration for Hardhat, our powerful Ethereum development environment, used for contract compilation and testing.

## Let's build a truly decentralized and sustainable platform together! 
