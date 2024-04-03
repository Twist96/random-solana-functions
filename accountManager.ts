const bs58 = require('bs58');
import { Keypair } from '@solana/web3.js';

function isHexadecimal(input: string): boolean {
  const hexRegex = /^[0-9A-Fa-f]+$/;
  return hexRegex.test(input);
}

function generateAccount(secretKey: string) {
    const data = isHexadecimal(secretKey) ? Uint8Array.from(Buffer.from(secretKey, 'hex')) : bs58.decode(secretKey)
    return Keypair.fromSecretKey(data)
}

const secretKeyHexadecimal = "03618b50844b9e995c1ffacd53d0ba8f4cfd6156a01259e6971062f3ea704217eef04e473c5d06fae54d3ae64e92687ecf832339296feb617f0bfe6f4d812edb"
const secretKeyBase58 = "5MEw5ABHfz9zycbr14LCw1MhHzpaZ5nPWNkR9G8ChgdLrCbMbHp2ReVsGRjLx3MYu7RRwFsBRyi1zxDib1K6tfCJ"
const mySecretKey = "jA6wYiXwtfrTWFf6QSjnFBnPNqVfwjKsxdbUupiABCkYprLmycjvfjyVTzjP1J3mEvby8Ck46hNHtTpDx2hNGam"

// //check 1 should pass
// console.log({isHexadecimal_shouldPass: isHexadecimal("03618b50844b9e995c1ffacd53d0ba8f4cfd6156a01259e6971062f3ea704217eef04e473c5d06fae54d3ae64e92687ecf832339296feb617f0bfe6f4d812edb")})

// //check 2 should fail
// console.log({isHexadecimal_shouldFail: isHexadecimal("5MEw5ABHfz9zycbr14LCw1MhHzpaZ5nPWNkR9G8ChgdLrCbMbHp2ReVsGRjLx3MYu7RRwFsBRyi1zxDib1K6tfCJ")})

const accountHexadecimal = generateAccount(secretKeyHexadecimal)
const accountBase58 = generateAccount(secretKeyBase58)

console.log({accountHexadecimal: accountHexadecimal.publicKey})
console.log({accountBase58: accountBase58.publicKey})
console.log({myPublicKey: generateAccount(mySecretKey).publicKey})
