import idl from "./downtown_program.json"
import { Connection, Keypair, PublicKey, sendAndConfirmTransaction } from "@solana/web3.js"
import { Program, Idl, AnchorProvider, setProvider, Wallet } from "@coral-xyz/anchor"
import { loadKeypair } from "../MetaplexLogic"
import { umi } from "../MetaplexLogic"

console.log({idl})

async function main() {
    const _keypair = loadKeypair()
    const keypair = Keypair.fromSecretKey(_keypair.secretKey)
    const connection = new Connection("https://api.devnet.solana.com")
    const wallet = new Wallet(keypair)
    let anchorProvider = new AnchorProvider(connection, wallet, {})
    setProvider(anchorProvider)

    const programId = new PublicKey(idl.metadata.address)
    const program = new Program(idl as Idl, programId)

    //init contract
    const tx = await program.methods.initialize().accounts({}).transaction()
    const txSig = await sendAndConfirmTransaction(connection, tx, [keypair])
    console.log({txSig})
}
