import {
  fetchAllDigitalAssetWithTokenByOwner,
  fetchAllDigitalAssetWithTokenByOwnerAndMint,
  fetchDigitalAsset,
  fetchAllDigitalAssetByCreator,
  Creator,
  DigitalAssetWithToken,
  DigitalAsset,
  fetchAllDigitalAssetByUpdateAuthority,
} from "@metaplex-foundation/mpl-token-metadata";
import { Option, Some } from "@metaplex-foundation/umi";
import { umi } from "../MetaplexLogic";
import { publicKey } from "@metaplex-foundation/umi";

async function fetchAsset(address: string): Promise<DigitalAsset> {
  const asset = await fetchDigitalAsset(umi, publicKey(address));
  return asset
}

async function fetchAllUserAssetOnMint(mintAddress: string, owner: string) {
  const assets = await fetchAllDigitalAssetWithTokenByOwnerAndMint(
    umi,
    publicKey(owner),
    publicKey(mintAddress)
  );
  console.log({ assets });
  console.log({ assetCount: assets.length });
}

async function fetchAllAssets(owner: string) {
  const assets = await fetchAllDigitalAssetWithTokenByOwner(
    umi,
    publicKey(owner)
  );
  return assets
}

// fetchAsset("FznkHFZVncLk79yKpdDdsR1ZWa1EZpuYrBGVRLeTrQRg")
// fetchAllUserAssetOnMint("FznkHFZVncLk79yKpdDdsR1ZWa1EZpuYrBGVRLeTrQRg", "DpmMV7knnwZcBeLXv9dX3fCHA8jCw7SA7Lzq4dvj1NR3")
// fetchAllAssets("DpmMV7knnwZcBeLXv9dX3fCHA8jCw7SA7Lzq4dvj1NR3");


function getCreators(asset: DigitalAsset) {
    const creators: Option<Array<Creator>> = asset.metadata.creators;
    const someCreators = creators as Some<Array<Creator>>
    const value = someCreators.value
    return value
}

async function main() {
    // const asset: DigitalAsset = await fetchAsset("FznkHFZVncLk79yKpdDdsR1ZWa1EZpuYrBGVRLeTrQRg")
    // const creators = getCreators(asset)
    // const value = creators.find(val => val.address === publicKey("DpmMV7knnwZcBeLXv9dX3fCHA8jCw7SA7Lzq4dvj1NR3"))
    // console.log(value === null ? "Not a Creator" : "is a Creator")

    const result = await fetchAllAssetsByCrators("HkkVS92U3WwxZz1VKJ2ocD4S4prjHiKz9EBCaGD2s8Fb")
    // const result = await fetchAllDigitalAssetByUpdateAuthority(umi, publicKey("HkkVS92U3WwxZz1VKJ2ocD4S4prjHiKz9EBCaGD2s8Fb"))
    //fetchAllDigitalAssetWithTokenByOwner(umi, publicKey("HkkVS92U3WwxZz1VKJ2ocD4S4prjHiKz9EBCaGD2s8Fb"))
    console.log({result})
}

main()

async function fetchAllAssetsByCrators(creator: string) {
  console.log("fetching...")
  const result = await fetchAllDigitalAssetByCreator(umi, publicKey(creator), {position: 2})
  console.log({result})
  console.log("done fetching...")
}
