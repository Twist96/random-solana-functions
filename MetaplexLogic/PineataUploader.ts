import {
    UploaderInterface,
    UploaderUploadOptions,
    GenericFile,
    UploaderGetUploadPriceOptions,
    Amount,
  } from "@metaplex-foundation/umi";

export class Uploader implements UploaderInterface {
    constructor() {}
  
    async upload(
      files: GenericFile[],
      options?: UploaderUploadOptions
    ): Promise<string[]> {
      // Implement the upload method here
      // You can access the files and options passed as parameters
      // Upload the files and return their URIs as an array of strings
      const uris: string[] = ["upload file1"]; // Replace with actual upload logic
      return uris;
    }
  
    async uploadJson<T>(
      json: T,
      options?: UploaderUploadOptions
    ): Promise<string> {
      // Implement the uploadJson method here
      // You can access the json object and options passed as parameters
      // Upload the JSON object and return its URI as a string
      const uri: string = "json file"; // Replace with actual upload logic
      return uri;
    }
  
    async getUploadPrice(
      files: GenericFile[],
      options?: UploaderGetUploadPriceOptions
    ): Promise<Amount> {
      // Implement the getUploadPrice method here
      // You can access the files and options passed as parameters
      // Calculate the upload price based on the files and options
      const price: Amount = {
        basisPoints: BigInt(0),
        identifier: "0",
        decimals: 2,
      }; // Replace with actual price calculation logic
      return price;
    }
  }