import { TokenStandard, mintV1 } from "@metaplex-foundation/mpl-token-metadata";
import { publicKey, createSignerFromKeypair } from "@metaplex-foundation/umi";
import { payer } from "../vars";
import { umi } from "../MetaplexLogic";

async function mint(mintAddress: string, receiver: string, amount: number) {
  const mint = publicKey(mintAddress);
  const tokenOwner = publicKey(receiver);
  const authority = createSignerFromKeypair(umi, {
    publicKey: publicKey(payer.publicKey),
    secretKey: payer.secretKey,
  });

  console.log("Start minting... 😁")

  await mintV1(umi, {
    mint,
    authority,
    amount,
    tokenOwner,
    tokenStandard: TokenStandard.FungibleAsset,
  }).sendAndConfirm(umi);

  console.log("Minit successfull... 🎉")
}

mint("FznkHFZVncLk79yKpdDdsR1ZWa1EZpuYrBGVRLeTrQRg", "DpmMV7knnwZcBeLXv9dX3fCHA8jCw7SA7Lzq4dvj1NR3", 50)