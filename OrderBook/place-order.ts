import * as Phoenix from "@ellipsis-labs/phoenix-sdk"
import { payer, connetction } from "../vars"

async function createOrder() {
    const phoenix = await Phoenix.Client.create(connetction)
    const marketConfig = phoenix.marketConfigs.get("SOL/USDC")//[0]//.find((market) => market.name === "")

    if (!marketConfig) {
        throw new Error("Market not found")
    }
    const marketState = phoenix.marketStates.get(marketConfig.marketId)
    if (!marketState) {
        throw new Error("Market state not found")
    }


    //submit market order
    // const tx = marketState.createSwapInstruction({
    //     side: Phoenix.Side.Bid,
    //     priceInTicks: 0
    // }, payer.publicKey)
    const tx = marketState.getSwapOrderPacket({
        side: Phoenix.Side.Bid,
        inAmount: 100,
    })

    // const txId = await connetction.sendTransaction(tx, [payer])
    // console.log({tx})

}