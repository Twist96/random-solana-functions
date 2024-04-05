import idl from "./downtown_program.json"
import { DowntownProgram } from "./downtown_program"
import { Connection, Keypair, PublicKey, sendAndConfirmTransaction } from "@solana/web3.js"
import { Program, Idl, AnchorProvider, setProvider, Wallet } from "@coral-xyz/anchor"
import { loadKeypair } from "../MetaplexLogic"
import { umi } from "../MetaplexLogic"
import { base58 } from "@metaplex-foundation/umi/serializers"

async function main() {
    const _keypair = loadKeypair()
    const keypair = Keypair.fromSecretKey(_keypair.secretKey)
    const connection = new Connection("https://api.devnet.solana.com")
    const wallet = new Wallet(keypair)
    let anchorProvider = new AnchorProvider(connection, wallet, {})
    setProvider(anchorProvider)

    const programId = new PublicKey(idl.metadata.address)
    const program = ((new Program(idl as Idl, programId)) as unknown) as Program<DowntownProgram>

    //init contract
    const [town] = PublicKey.findProgramAddressSync([Buffer.from("town")], programId);
    const tx = await program.methods.createTown("downtown").accounts({signer: keypair.publicKey, town}).transaction()
    // const txSig = await sendAndConfirmTransaction(connection, tx, [keypair])
    // console.log({txSig})

    const secret = base58.deserialize(_keypair.secretKey)
    console.log({secret})
    console.log({pubkey: _keypair.publicKey})
}

main()
.then(_ => {
    console.log("DONE")
})
.catch(err => {
    console.log({err})
    console.log("FAILURE")
})