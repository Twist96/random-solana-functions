import { DigitalAsset, TokenStandard, createV1, fetchAllDigitalAssetByOwner, mintV1 } from "@metaplex-foundation/mpl-token-metadata";
import { loadKeypair, umi } from "../MetaplexLogic";
import { createSignerFromKeypair, generateSigner, keypairIdentity, KeypairSigner, none, Option, percentAmount, PublicKey, signerIdentity, some, Umi } from "@metaplex-foundation/umi";

const mintSecret = [
    93,   6,  20,  43, 219, 147, 216,  47, 241, 129, 253,
    120, 178,  24, 106,  68, 220,   1, 223, 119, 134, 107,
     11, 177, 197, 232, 141,  38, 143,  11, 205, 194,   3,
    172, 218, 132, 208, 195,  79,  44, 235, 159,  49, 103,
    117, 141,  57,   7,  50,  85,  79,  14, 251, 212, 244,
    102, 129,  48,  84, 249, 153, 158, 196, 214
 ]

 const u8a = new Uint8Array(mintSecret)
 const mint = umi.eddsa.createKeypairFromSecretKey(u8a)

async function create(mint: KeypairSigner, umi: Umi): Promise<Uint8Array> {
    let result = await createV1(umi, {
        mint,
        authority: umi.payer,
        name: "Kick House",
        symbol: "KH",
        uri: "https://lavender-following-rabbit-173.mypinata.cloud/ipfs/QmSrSw8H3DUTVWzcAyZY1pQzcQFh9zxCVsHwn3aWU9exLr",
        sellerFeeBasisPoints: percentAmount(5),
        isMutable: true,
        tokenStandard: TokenStandard.NonFungible
    }).sendAndConfirm(umi)
    return result.signature
}

async function mintNFT(mint: PublicKey): Promise<Uint8Array>  {
    let result = await mintV1(umi, {
        mint,
        authority: umi.payer,
        amount: 1,
        tokenOwner: umi.payer.publicKey,
        tokenStandard: TokenStandard.NonFungible
    }).sendAndConfirm(umi)
    return result.signature
}

async function fetchNFTs(owner: PublicKey): Promise<DigitalAsset[]> {
    const result = await fetchAllDigitalAssetByOwner(umi, owner)

    let filteredResult = result.filter(value => {
        let creators = value.metadata.creators
        if(creators.__option === "Some") {
            return creators.value.map(x => x.address.toString()).includes(umi.payer.publicKey.toString())
        } else {
            return false
        }
    })
    
    return filteredResult
}

async function main() {
    const keypair = loadKeypair()
    const signer = createSignerFromKeypair(umi, keypair)

    umi.use(keypairIdentity(signer))
    const mintSigner = createSignerFromKeypair(umi, mint)

    //Create NFT
    // console.log({pubkey_nft: mintSigner.publicKey})
    // const creatNFTtx = await create(mintSigner, umi)
    // console.log({creatNFTtx})

    //Mint NFT
    // const mintNFTtx = await mintNFT(mintSigner.publicKey)
    // console.log({mintNFTtx})

    const asset = await fetchNFTs(umi.payer.publicKey)
    console.log({asset})
}

main().then(() => {
    console.log("Start")
}).catch((error) => {
    console.log({error})
})

// const keypair  = generateSigner(umi)
// console.log({pubkey: keypair.publicKey, secret: keypair.secretKey})

//ACCOUNT WITH 5 SOL ON DEVNET
// [
//     45, 139, 218, 246, 116, 185, 132,  74,  29, 151, 180,
//      1, 151,  62,  93, 161, 198, 148, 112,  20, 228, 196,
//    169, 235,  59, 161, 141,  32,  34,  74, 137, 224, 120,
//    170, 211, 249, 165, 103, 167,  86, 247, 122, 181, 117,
//     67, 199,  96, 176, 247,   1, 209,  25, 222,  77, 113,
//    235, 144, 175, 253, 238,  95, 104, 153, 157
//  ]

// transfer Fnd3WMEGywcTjp3hdBnAepfJjcMJ2N1RwPpGqoV8Qsmp out of account