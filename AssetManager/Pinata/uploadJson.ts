import PinataSDK, { PinataPinOptions } from "@pinata/sdk";
import {
    Attribute,
  FungibleAssetMetaData,
  Properties,
} from "../../models/FungibleAssetMetaData";
const pinata = new PinataSDK(
  "b6af61006c4d8a0be3ed",
  "2581e79be4b49e66e419d21797c5c55ed6b4bd4913f64c30183cb01025726a9b"
);
const pinataBaseURI =
  "https://lavender-following-rabbit-173.mypinata.cloud/ipfs/";

async function upload() {

  const properties: Properties = {
    files: [
      {
        uri: `${pinataBaseURI}QmWMRLVJ7yjUPiMwfLs8Q2VvFJ1QtFeG4oT6i8HwZZPYnJ`,
        type: "usdz",
        cdn: false,
      },
      {
        uri: `${pinataBaseURI}QmU5kVfMwBF5xS889BwRSoDmi1Taahzo4qYhcqcY6dWTmX`,
        type: "usdz",
        cdn: false,
      },
    ],
    category: "models",
  };

  const attributes: Attribute[] = [
    {trait_type: "bedroom", value: "3"},
    {trait_type: "bathrooms", value: "3"},
    {trait_type: "area", value: "3000"},
    {trait_type: "address", value: "House 05, Dr. Kennedey Okonkwo Street, Lekki, Lagos"},
    {trait_type: "coordinate", value: `[${6.4564231},${3.5144315},${0}]`}
  ]

  const body: FungibleAssetMetaData = {
    name: "Hacker House",
    symbol: "HKH",
    description:
      "Hacker House is a one bedroom unit with a well set out lounge and a visitor's toilet.\nEquipped with a Satellite TV Network, Free super fast internet, 24/7 electricity, fully equipped kitchenette, washing machine and free parking within a gated compound in a safe, serene and homely neighbourhood.\nFree access to swimming pool, gym, and playground located within 10 minutes walking distance from the apartment.",
    image: `${pinataBaseURI}QmTm52VmASeVyCNJiqkYJ8Z6VCgrQtXNL5k5PW9Yzkd2Nb`,
    external_url: "clusttr.io",
    attributes: attributes,
    properties,
  };

  const options: PinataPinOptions = {
    pinataMetadata: {
      name: "Hacker House",
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };

  const res = await pinata.pinJSONToIPFS(body, options);
  console.log(res);
}

upload()