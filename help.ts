import { Creator, DigitalAsset } from "@metaplex-foundation/mpl-token-metadata";
import { Option, Some } from "@metaplex-foundation/umi";

export function printConsoleSeparator(message?: string) {
    console.log("\n===============================================");
    console.log("===============================================\n");
    if (message) console.log(message);
  }

  export function getCreators(creators: Option<Array<Creator>>) {
    const someCreators = creators as Some<Array<Creator>>
    const value = someCreators.value
    return value
  }