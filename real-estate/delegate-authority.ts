import {
  TokenStandard,
  delegateAuthorityItemV1,
  delegateStakingV1,
  delegateStandardV1,
} from "@metaplex-foundation/mpl-token-metadata";
import { SECRET_KEY, createAccount, createSigner } from "../vars";
import { umi } from "../MetaplexLogic";
import { publicKey } from "@metaplex-foundation/umi";
import bs58 from "bs58";

async function delegate(mintAddress: string, secretKey: string, newAuthority) {
  console.log("Start delegation... 👮🏽‍♂️");
  const mint = publicKey(mintAddress);
  const authority = createSigner(secretKey, umi);
  const delegate = publicKey(newAuthority);

  //   const tx = await delegateAuthorityItemV1(umi, {
  //     mint,
  //     authority,
  //     delegate: delegate,
  //     tokenStandard: TokenStandard.FungibleAsset,
  //   }).sendAndConfirm(umi);
  const tx = await delegateStandardV1(umi, {
    mint,
    tokenOwner: authority.publicKey,
    authority,
    delegate,
    tokenStandard: TokenStandard.FungibleAsset,
    amount: 10000,
  }).sendAndConfirm(umi);

  const txSig = bs58.encode(tx.signature);
  console.log({ txSig });
  console.log("Delegation successful");
}

//delegate authority to admin
delegate(
  "FznkHFZVncLk79yKpdDdsR1ZWa1EZpuYrBGVRLeTrQRg",
  "5MEw5ABHfz9zycbr14LCw1MhHzpaZ5nPWNkR9G8ChgdLrCbMbHp2ReVsGRjLx3MYu7RRwFsBRyi1zxDib1K6tfCJ",
  //   SECRET_KEY,
  "DpmMV7knnwZcBeLXv9dX3fCHA8jCw7SA7Lzq4dvj1NR3"
);
