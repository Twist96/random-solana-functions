import { Umi, publicKey, createSignerFromKeypair } from "@metaplex-foundation/umi";
import {
    Metadata,
  fetchMetadataFromSeeds,
  updateV1,
  Creator
} from "@metaplex-foundation/mpl-token-metadata";
import { umi } from "../MetaplexLogic";
import { payer } from "../vars";
import { getCreators } from "../help";
import bs58 from "bs58"

async function update(mintAddress: string) {
  console.log("Start updating.... 𝌗")
  const authority = createSignerFromKeypair(umi, {
    publicKey: publicKey(payer.publicKey),
    secretKey: payer.secretKey,
  });

  const mint = publicKey(mintAddress);
  const initalMetaData: Metadata = await fetchMetadataFromSeeds(umi, { mint });
  var creators = getCreators(initalMetaData.creators)
  creators.push({address: publicKey("FznkHFZVncLk79yKpdDdsR1ZWa1EZpuYrBGVRLeTrQRg"), verified: false, share: 0})

  const tx = await updateV1(umi, {
    mint,
    authority,
    data: {...initalMetaData, name: "Chatam House 2", creators},
  }).sendAndConfirm(umi);
  console.log({txSig: bs58.encode(tx.signature)})
  console.log("done... 💯")
}

// update("FznkHFZVncLk79yKpdDdsR1ZWa1EZpuYrBGVRLeTrQRg")

async function verifyCreators(mintAddress: string, creatorAddress: string) {
  console.log("Start verifying asset... 🗒️")
  const authority = createSignerFromKeypair(umi, {
    publicKey: publicKey(payer.publicKey),
    secretKey: payer.secretKey,
  });
  const mint = publicKey(mintAddress);
  const creator = publicKey(creatorAddress);
  const initalMetaData: Metadata = await fetchMetadataFromSeeds(umi, { mint });

  var creators = getCreators(initalMetaData.creators) 
  const creatorIndex = creators.findIndex(val => val.address === creator)

  if(creatorIndex === -1) {
    //throw
  }
  creators[creatorIndex].verified = true
  const tx= await updateV1(umi, {
    mint,
    authority,
    data: { ...initalMetaData, creators: [creators[0]]}
  }).sendAndConfirm(umi)

  console.log({txSig: bs58.encode(tx.signature)})
  console.log("done... 💯")
}

verifyCreators("FznkHFZVncLk79yKpdDdsR1ZWa1EZpuYrBGVRLeTrQRg", "FznkHFZVncLk79yKpdDdsR1ZWa1EZpuYrBGVRLeTrQRg")