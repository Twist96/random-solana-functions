import {
  TokenStandard,
  transferV1,
} from "@metaplex-foundation/mpl-token-metadata";
import { publicKey } from "@metaplex-foundation/umi";
import { umi } from "../MetaplexLogic";
import bs58 from "bs58";
import { SECRET_KEY, createSigner, payer } from "../vars";

async function transfer(
  mintAddress: string,
  destination: string,
  authorityPKey: string,
  tokenOwnerPubKey: string
) {
  console.log("start transfering asset");
  const mint = publicKey(mintAddress);
  const destinationOwner = publicKey(destination);
  const authority = createSigner(authorityPKey, umi);
  const tokenOwner = publicKey(tokenOwnerPubKey)
  const tx = await transferV1(umi, {
    mint,
    authority,
    tokenOwner,
    destinationOwner,
    tokenStandard: TokenStandard.FungibleAsset,
    amount: 9,
  }).sendAndConfirm(umi);
  const txSig = bs58.encode(tx.signature);
  console.log({ txSig });
  console.log("transfer successful");
}

//transfer from admin to FUjP...
// transfer(
//   "FznkHFZVncLk79yKpdDdsR1ZWa1EZpuYrBGVRLeTrQRg",
//   "FUjPhgXDtngshdybmU92QZphvXLiALiWy7FJ5qRrNaGE",
//   SECRET_KEY,
//   payer.publicKey.toBase58()
// );

//admin transfer another persons token back //should fail
transfer(
  "FznkHFZVncLk79yKpdDdsR1ZWa1EZpuYrBGVRLeTrQRg",
  "DpmMV7knnwZcBeLXv9dX3fCHA8jCw7SA7Lzq4dvj1NR3",
  SECRET_KEY,
  "FUjPhgXDtngshdybmU92QZphvXLiALiWy7FJ5qRrNaGE"
);
