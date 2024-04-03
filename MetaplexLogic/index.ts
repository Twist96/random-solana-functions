import * as fs from "fs"
import { payer } from "../vars";

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  Umi,
  createSignerFromKeypair,
  keypairIdentity,
} from "@metaplex-foundation/umi";
import { WalletAdapter } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { web3JsEddsa } from "@metaplex-foundation/umi-eddsa-web3js";
import { web3JsRpc } from "@metaplex-foundation/umi-rpc-web3js";
import { fetchHttp } from "@metaplex-foundation/umi-http-fetch";
import { bundlrUploader } from "@metaplex-foundation/umi-uploader-bundlr";
import { defaultProgramRepository } from "@metaplex-foundation/umi-program-repository"
import { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";

// const walletAdapter: WalletAdapter = {
//   publicKey: payer.publicKey, //I might need to fill
// };

const umi = createUmi("https://api.devnet.solana.com")
  .use(web3JsEddsa())
  .use(web3JsRpc("https://api.devnet.solana.com", {httpAgent: false}))
  .use(fetchHttp())
  .use(bundlrUploader())
  .use(mplCandyMachine()) // candyshop setup

const keypair = umi.eddsa.createKeypairFromSecretKey(payer.secretKey);
const myKeypairSigner = createSignerFromKeypair(umi, keypair);
umi.use(keypairIdentity(myKeypairSigner));

function loadKeypair() {
  const keypairArray = new Uint8Array(JSON.parse(fs.readFileSync("/Users/matthewchukwuemeka/.config/solana/id.json").toString()))
  const keypair = umi.eddsa.createKeypairFromSecretKey(keypairArray)
  return keypair
}

export { umi, loadKeypair };

console.log("UMI SETUP")