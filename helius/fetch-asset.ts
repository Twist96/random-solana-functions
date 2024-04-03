import fetch from "node-fetch";
const url = `https://devnet.helius-rpc.com/?api-key=499442b3-cea7-45f3-bb46-c62487c1e8f1`
​
async function main() {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 'my-id',
          method: 'getAssetsByCreator',
          params: {
            creatorAddress: 'D3XrkNZz6wx6cofot7Zohsf2KSsu2ArngNk8VqU9cTY3',
            onlyVerified: true,
            page: 1, // Starts at 1
            limit: 1000
          },
        }),
      });
      const result = await response.json();
      console.log("Assets by Creator: ", result);
}

main()