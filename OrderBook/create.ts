import * as Phoenix from "@ellipsis-labs/phoenix-sdk"
import { payer, connetction } from "../vars"

async function create() {
    const phoenix = await Phoenix.Client.create(connetction)
}