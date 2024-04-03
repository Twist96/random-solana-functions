import { Umi, createSignerFromKeypair } from "@metaplex-foundation/umi";
import { Connection, Keypair, clusterApiUrl } from "@solana/web3.js";
import bs58 from "bs58";

export const createAccount = (secretKey: string) => {
  return Keypair.fromSecretKey(bs58.decode(secretKey));
};

export const createSigner = (secretKey: string, umi: Umi) => {
  const secretKeyData = bs58.decode(secretKey);
  const keypair = umi.eddsa.createKeypairFromSecretKey(secretKeyData);
  const myKeypairSigner = createSignerFromKeypair(umi, keypair);
  return myKeypairSigner
};

export const SECRET_KEY =
  "3VXnem4KDbvF1Z7eCZuF7z5sVrmWwTvUkVW1Est9YXjvzZmoNKA8BxVq6z5bQgFbYJFw6hVa8TWxrVT8TpS4osyo";

export const payer = createAccount(SECRET_KEY);

export const CLUSTER_URL = clusterApiUrl("devnet");

export const connetction = new Connection(CLUSTER_URL, "single");
