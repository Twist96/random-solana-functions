import {
  PublicKey,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
  Keypair,
} from "@solana/web3.js";
import {
  getOrCreateAssociatedTokenAccount,
  getAccount,
  getAssociatedTokenAddress,
} from "@solana/spl-token";
import { connetction, createAccount, payer } from "./vars";
import { printConsoleSeparator } from "./help";

const usdcMint_main = new PublicKey(
  "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
);

const usdcMint_dev = new PublicKey(
  "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
);

const keyPair = createAccount(
  "5MEw5ABHfz9zycbr14LCw1MhHzpaZ5nPWNkR9G8ChgdLrCbMbHp2ReVsGRjLx3MYu7RRwFsBRyi1zxDib1K6tfCJ"
);

async function registerAccount(keypair: Keypair) {
  printConsoleSeparator("Register Account");
  const space = 0;
  const lamports = await connetction.getMinimumBalanceForRentExemption(space);
  console.log("Total Lamports: ", lamports);

  const creatTransactionIx = SystemProgram.createAccount({
    fromPubkey: payer.publicKey,
    newAccountPubkey: keypair.publicKey,
    lamports,
    space,
    programId: SystemProgram.programId,
  });

  const recentBlockhash = await connetction
    .getLatestBlockhash()
    .then((res) => res.blockhash);

  const message = new TransactionMessage({
    payerKey: payer.publicKey,
    recentBlockhash,
    instructions: [creatTransactionIx],
  }).compileToV0Message();

  const tx = new VersionedTransaction(message);

  tx.sign([payer, keypair]);

  console.log("tx after signing: ", tx);

  // try {
  const sig = await connetction.sendTransaction(tx).catch((err) => err);
  console.log(sig)

  printConsoleSeparator();
}

async function createAssociatedTokenAccount(
  forPublicKey: PublicKey,
  mintToken: PublicKey
) {
  printConsoleSeparator("Create Associated Account");

  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connetction,
    payer,
    mintToken,
    forPublicKey
  );
  console.log("Token account: ", tokenAccount);
  console.log("Token account address: ", tokenAccount.address.toBase58());

  printConsoleSeparator();
}

(async () => {
  registerAccount(keyPair); //This function will fail if this account has already been created
  // createAssociatedTokenAccount(keyPair.publicKey, usdcMint_dev)
})();
