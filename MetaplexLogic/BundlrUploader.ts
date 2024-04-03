import { createBundlrUploader, BundlrUploaderOptions, bundlrUploader } from "@metaplex-foundation/umi-uploader-bundlr";
import { Umi } from "@metaplex-foundation/umi";
import { generateSigner } from "@metaplex-foundation/umi";

export const bundlrOptions = (umi: Umi): BundlrUploaderOptions => ({
  address: "http://node2.bundlr.network",
  providerUrl: "http://node2.bundlr.network",
  payer: generateSigner(umi),
});

export const getBundlerUploader = (umi: Umi) =>  createBundlrUploader(umi)//, bundlrOptions(umi))

// address?: string;
// timeout?: number;
// providerUrl?: string;
// priceMultiplier?: number;
// payer?: Signer;
