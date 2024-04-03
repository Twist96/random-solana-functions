import Foundation

func mintNFT() {
let headers = [
  "accept": "application/json",
  "content-type": "application/json",
  "x-client-secret": "sk_test.d9acf6c0.77ff5534923a0e6c10a9544a926ff2ad",
  "x-project-id": "ed95cf48-32d3-4d58-b36e-6e9bee9b084f"
]
let parameters = [
  "recipient": "solana:DpmMV7knnwZcBeLXv9dX3fCHA8jCw7SA7Lzq4dvj1NR3",
  "metadata": [
    "name": "Unit 3",
    "image": "https://i.pinimg.com/564x/85/c7/57/85c757f47902884e4992097049c09962.jpg",
    "description": "4 bedroom  semi-detached duplex"
  ],
  "reuploadLinkedFiles": true
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://staging.crossmint.com/api/2022-06-09/collections/779b12ed-d76b-4c5e-8c1b-2995e2b736dc/nfts")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
}

func getNFTList() {
let headers = [
  "x-client-secret": "sk_test.d9acf6c0.77ff5534923a0e6c10a9544a926ff2ad",
  "x-project-id": "ed95cf48-32d3-4d58-b36e-6e9bee9b084f"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://staging.crossmint.com/api/2022-06-09/collections/779b12ed-d76b-4c5e-8c1b-2995e2b736dc/nfts?page=1&perPage=20")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
}