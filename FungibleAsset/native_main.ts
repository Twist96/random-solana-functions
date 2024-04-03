import { loadKeypair, umi } from "../MetaplexLogic";
import {
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
  getMint,
  getAccount,
} from "@solana/spl-token";
import web3, { PublicKey } from "@solana/web3.js";
import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

const connection = new web3.Connection("http://127.0.0.1:8899", "confirmed");
const wallet = loadKeypair();
const payer = Keypair.fromSecretKey(wallet.secretKey);

async function main() {
  const mint = await createMint(
    connection,
    payer,
    payer.publicKey,
    payer.publicKey,
    0
  );

  console.log({ token: mint.toBase58() });

  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    payer,
    mint,
    payer.publicKey
  );

  console.log(tokenAccount.address.toBase58());

  await mintTo(connection, payer, mint, tokenAccount.address, payer, 10_000);

  const mintInfo = await getMint(connection, mint);

  console.log(mintInfo.supply);
  // 100

  const tokenAccountInfo = await getAccount(connection, tokenAccount.address);

  console.log(tokenAccountInfo.amount);
}

async function justMint() {
  const mint = new PublicKey("HKagbtJvkDd9n5pSumWq7HsQTJLF7skZsrdt8iyqjv5D");
  const ata = new PublicKey("HrrTUpBaq6t9v6wXWXxpDmKmLNLRMnx51Wre3d166zL8");

  const tokenAccountInfo = await getAccount(connection, ata);

  console.log(tokenAccountInfo.amount);

//   const tx = await mintTo(connection, payer, mint, ata, payer, 10_000);
//   console.log({ tx });
}

justMint()
  .then(() => {
    console.log("Done");
  })
  .catch((error) => {
    console.log({ error });
  });

//usdc token = HKagbtJvkDd9n5pSumWq7HsQTJLF7skZsrdt8iyqjv5D
//usdc AssociatedtokenAddress = HrrTUpBaq6t9v6wXWXxpDmKmLNLRMnx51Wre3d166zL8
