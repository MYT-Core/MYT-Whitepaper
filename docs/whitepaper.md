# MYT Whitepaper — v1.4 (summary)

Canonical PDF: [MYT_Whitepaper_v1.4.pdf](./MYT_Whitepaper_v1.4.pdf) ·
editable source: [source/whitepaper-v1.4.html](./source/whitepaper-v1.4.html)

This Markdown file is a short summary of the canonical PDF. If the two differ, the PDF wins.

## Abstract

MYT is a Proof-of-Work blockchain built as a privacy-preserving settlement layer for autonomous
systems, individual users and enterprises. It combines CryptoNote-derived privacy, RandomX mining
and a Bitcoin-style fixed supply. The off-chain MYT Machine toolkit adds machine payments,
invoices, identities, address bindings, local reputation and selective disclosure without changing
consensus.

## Protocol parameters

| Parameter | Value |
| --- | --- |
| Consensus | Proof-of-Work; CryptoNight from launch, RandomX from HF12 (block 28,895) |
| Block target | 60 seconds |
| Maximum supply | 21,000,000 MYT (consensus rule since HF17, block 162,084) |
| Initial block reward | 5 MYT, halving every 2,102,400 blocks (≈4 years), no tail emission |
| Coinbase unlock | 60 blocks |
| Ring size | 16 (enforced since HF16) |
| Mainnet ports | 39080 P2P · 39081 RPC · 39082 ZMQ |
| Testnet ports | 38080 P2P · 38081 RPC · 38082 ZMQ |
| Mainnet address prefixes | 55 standard · 56 integrated · 57 subaddress |

## Privacy

Ring signatures (CLSAG, ring size 16), one-time stealth addresses and confidential amounts
(Pedersen commitments with Bulletproofs+) are enforced by consensus. Practical anonymity grows
with the size of the decoy pool.

## Machine settlement layer (MYT Machine)

| Phase | Capability | Status |
| --- | --- | --- |
| 4A | Payments, payment status, native payment proofs, wallet signatures | Released (v0.1.0) |
| 4B | Offline Ed25519 machine identities | Released (v0.2.0) |
| 4C | Identity ↔ settlement address binding | Released (v0.3.0) |
| 4D | Payment requests, invoices, API billing | Released (v0.4.0) |
| 4E | Signed opinions, revocations, local reputation policy | Released (v0.5.0 / v0.5.1) |
| 4F | BBS selective disclosure of reputation claims | Release candidate; external review pending |

## Selective disclosure

Live in the wallet: transaction proofs, spend proofs and reserve proofs. Released in MYT Machine:
invoice-bound payment evidence. In release-candidate review: threshold claims such as “at least 25
verified settlements”. Planned: zero-knowledge balance-range audits and counterparty-blind proofs.

## Changelog

- v1.0: Initial release
- v1.1: Updated hardfork table and schedule documentation
- v1.2: PDF revision
- v1.3: PDF revision
- v1.4: Corrected version labels and section references; consistent ring sizes; MYT Machine
  phases 4A–4F and their status; live wallet proofs; testnet/stagenet ports; remote-wallet guidance;
  build reproducibility stated as in progress; editable HTML source and PDF build script added
