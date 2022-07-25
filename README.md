# Geohash

Geohash is a virtual land project made by Wakanda Labs.

At the beginning, the total supply was only 32 NFTs, and their geohash were single 32 characters in the geohash algorithm (0-9, and 22 letters except 'a', 'i', 'l', 'o'). Each NFT can continue to be divided into 32 sub-NFTs and their URI will be parent's URI concat new alphabet, reciprocating continuously.

We aim to give everyone in the world an opportunity to become a member.

## tokenURI and tokenId 

| Index | tokenURI | tokenId        |
|-------|----------|----------------|
| 0     | 0        | keccak256(0)   |
| 1     | 1        | keccak256(1)   | 
| ...   | ...      | keccak256(...) |
| 31    | z        | keccak256(z)   |
| 32    | 00       | keccak256(00)  |
| 33    | 01       | keccak256(01)  |
| ...   | ...      | keccak256(...) |
| 1023  | zz       | keccak256(zz)  |
| 1024  | 000      | keccak256(000) |
| 1025  | 001      | keccak256(001) |
| ...   | ...      | keccak256(...) |
| 32767 | zzz      | keccak256(zzz) |
| ...   | ...      | keccak256(...) |

## deployment

| network | contract | contract address                           |
|---------|----------|--------------------------------------------|
| goerli  | Geohash  | 0x9eff416DA89df623e66e4D59f09f6dcdd44ac2c4 |
| polygon | Geohash  | 0x9eff416DA89df623e66e4D59f09f6dcdd44ac2c4 |

## development path

- [x] geohash core contract
- [ ] geohash web interface
- [ ] access map
- [ ] provide media embedding services, which can be used as advertising window for owners
- [ ] seamless access to audio and video

## discord

Wakanda+: https://discord.gg/hddy3D2ufY
