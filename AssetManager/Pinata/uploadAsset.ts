import PinataSDK, { PinataPinOptions } from "@pinata/sdk";
import fs from "fs";

const pinata = new PinataSDK("b6af61006c4d8a0be3ed", "2581e79be4b49e66e419d21797c5c55ed6b4bd4913f64c30183cb01025726a9b");
const keyvalues = {
    customKey: 'customValue',
    customKey2: 'customValue2'
}

async function upload() {
  const fileStream = fs.createReadStream("../asset/hacker-house.jpg");
  const options: PinataPinOptions = {
    pinataMetadata: {
        name: "hacker-house",
        // keyvalues: keyvalues
    },
    pinataOptions: {
        cidVersion: 0
    }
};
  const res = await pinata.pinFileToIPFS(fileStream, options);
  console.log(res);
}

upload()

// NEXT_PUBLIC_PINATA_API_KEY=b6af61006c4d8a0be3ed
// NEXT_PUBLIC_PINATA_API_SECRET_KEY=2581e79be4b49e66e419d21797c5c55ed6b4bd4913f64c30183cb01025726a9b

// const tokenId = "1234abc"
// const link = `https://solscan.io/token/${tokenId}?cluster=devnet}`