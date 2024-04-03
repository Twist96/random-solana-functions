function createNFT() {
  const url =
    "https://staging.crossmint.com/api/2022-06-09/collections/779b12ed-d76b-4c5e-8c1b-2995e2b736dc/nfts";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-client-secret": "sk_test.d9acf6c0.77ff5534923a0e6c10a9544a926ff2ad",
      "x-project-id": "ed95cf48-32d3-4d58-b36e-6e9bee9b084f",
    },
    body: JSON.stringify({
      recipient: "solana:DpmMV7knnwZcBeLXv9dX3fCHA8jCw7SA7Lzq4dvj1NR3",
      metadata: {
        name: "Unit 3",
        image:
          "https://i.pinimg.com/564x/85/c7/57/85c757f47902884e4992097049c09962.jpg",
        description: "4 bedroom  semi-detached duplex",
      },
      reuploadLinkedFiles: true,
    }),
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
}


//Returned Value
const result = {
    "id": "c9b9b120-191b-4011-b49b-104f620bfe20",
    "onChain": {
      "status": "pending",
      "chain": "solana"
    }
  }