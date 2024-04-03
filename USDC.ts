import {
  createSignerFromKeypair,
  generateSigner,
  publicKey,
  PublicKey,
  percentAmount,
  RpcAccount,
} from "@metaplex-foundation/umi";

import {
  fetchDigitalAsset,
  TokenStandard,
  createV1,
  mintV1,
} from "@metaplex-foundation/mpl-token-metadata";

import { umi } from "./MetaplexLogic";
import { payer } from "./vars";
import { MintLayout } from "./models/RawMint";
import { getBundlerUploader } from "./MetaplexLogic/BundlrUploader";
// import { GenericFile } from

const pubKey = publicKey(payer.publicKey);
const signer = createSignerFromKeypair(umi, {
  publicKey: pubKey,
  secretKey: payer.secretKey,
});

const USDCImageURI =
  "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png";

async function create() {
  const uri = await umi.uploader.uploadJson({
    name: "USDC",
    description: "Unofficial USDC from clusttr.io",
    image: USDCImageURI,
  });

  const mint = generateSigner(umi);
  console.log("mint Address: ", mint.publicKey);

  const { signature, result } = await createV1(umi, {
    mint,
    authority: signer,
    name: "USDC",
    uri,
    sellerFeeBasisPoints: percentAmount(0),
    tokenStandard: TokenStandard.Fungible,
  }).sendAndConfirm(umi);

  console.log({ result });
  console.log({ signature });
}

async function mint() {
  const mint = publicKey("FDDvibWXSMhzaC2TVuscjt8k5h1NH1mqUHF7VXME5AsX")
  const programs = umi.programs.all()
  console.log({programs})
  // const program = umi.programs.get("splAssociatedToken")
  await mintV1(umi, {
    mint,
    authority: signer,
    amount: 1000, 
    tokenOwner: signer.publicKey,
    tokenStandard: TokenStandard.Fungible
  }).sendAndConfirm(umi)
  console.log("done")
}

async function checkIfAccountExists(pubKey: PublicKey) {
  const result = await umi.rpc.accountExists(pubKey);
  return result;
}

async function getAccountDetails(pubKey: string) {
  const key = publicKey(pubKey);
  // const result = await umi.rpc.getAccount(key)
  // // result.
  // const rpcAccount = (result as RpcAccount)
  // const data = rpcAccount.data
  // const dataString = new TextDecoder().decode(data)
  // const mint = MintLayout.decode(data)
  // console.log({mint})

  const meta = await fetchDigitalAsset(umi, publicKey(payer.publicKey))
  console.log({meta})

  // console.log({"Account Details": result})

  const ans = await umi.rpc.accountExists(
    publicKey("4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU")
  );
  console.log({ ans });
}

// mint();
// getAccountDetails("FDDvibWXSMhzaC2TVuscjt8k5h1NH1mqUHF7VXME5AsX");
mint()
