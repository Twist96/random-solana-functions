import { payer } from "../vars";
import { umi } from "../MetaplexLogic";
import { publicKey, } from "@metaplex-foundation/umi"
import {
  createFungibleAsset,
  createNft,
} from "@metaplex-foundation/mpl-token-metadata";
import { generateSigner, percentAmount } from "@metaplex-foundation/umi";

const assetURI = "https://lavender-following-rabbit-173.mypinata.cloud/ipfs/QmSrSw8H3DUTVWzcAyZY1pQzcQFh9zxCVsHwn3aWU9exLr"

async function createAsset() {
  console.log("Start miniting... 🤞🏾");

  const mint = generateSigner(umi);
  await createFungibleAsset(umi, {
    mint,
    name: "Lotus ex suite",
    symbol: "LEX",
    uri: assetURI,
    isMutable: true,
    sellerFeeBasisPoints: percentAmount(1.2),
  }).sendAndConfirm(umi);

  console.log("Mint successful 👍🏽");
  console.log({ mintAddress: mint.publicKey.toString() });
}

createAsset()