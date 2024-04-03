import { createSignerFromKeypair, publicKey } from "@metaplex-foundation/umi";
import { umi } from "../MetaplexLogic";
import { payer } from "../vars";


function create() {
    const authority = createSignerFromKeypair(umi, {
        publicKey: publicKey(payer.publicKey),
        secretKey: payer.secretKey,
      });
      

      const candyMachineSettings = { authority: authority}
}