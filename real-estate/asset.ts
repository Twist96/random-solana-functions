import { createFungibleAsset } from "@metaplex-foundation/mpl-token-metadata";
import { umi } from "../MetaplexLogic";
import { GenericFile } from "@metaplex-foundation/umi";

async function uploadAssets(): Promise<string[]> {
  const files: GenericFile[] = [];
  const filesURL = await umi.uploader.upload(files);
  return filesURL;
}

async function buildAsset(): Promise<string> {
  const assetJson = "";
  const url = await umi.uploader.uploadJson(assetJson);
  return url;
}
