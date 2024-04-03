// import { PublicKey } from "@metaplex-foundation/js";
import { TokenStandard, createFungible, mintV1 } from "@metaplex-foundation/mpl-token-metadata"
import { createSignerFromKeypair, generateSigner, keypairIdentity, percentAmount, PublicKey } from "@metaplex-foundation/umi";
import { umi, loadKeypair } from "../MetaplexLogic";

async function createToken() {

}

async function create(mint:PublicKey) {
    console.log("Creating Token")
    const tx = await createFungible(umi, {
        mint,
        name: "USDC",
        symbol: "USDC",
        uri: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
        isMutable: true,
        sellerFeeBasisPoints: percentAmount(0)
    }).sendAndConfirm(umi)
    return {tx}
}

async function mintToken(mint: PublicKey, tokenOwner: PublicKey, amount: Number) {
    const tx = await mintV1(umi, {
        mint,
        authority: umi.payer,
        amount: 10_000,
        tokenOwner,
        tokenStandard: TokenStandard.Fungible
    })
}

import { web3JsRpc } from "@metaplex-foundation/umi-rpc-web3js";

async function main() {
    umi.use(web3JsRpc("http://127.0.0.1:8899"))
    const keypair = loadKeypair()
    const signer = createSignerFromKeypair(umi, keypair)
    umi.use(keypairIdentity(signer))

    const mint = generateSigner(umi);
    const tx = await create(mint.publicKey)
    console.log({tx})
    const amount = 10_000
    const tokenOwner = "9831HW6Ljt8knNaN6r6JEzyiey939A2me3JsdMymmz5J" as PublicKey
    const tx2 = await mintToken(mint.publicKey, tokenOwner, amount)
    console.log({tx2})
    console.log({mint})
}

main().then(() => {
    console.log("Start")
}).catch((error) => {
    console.log({error})
})
