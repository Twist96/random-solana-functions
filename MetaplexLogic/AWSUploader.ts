import { awsUploader } from "@metaplex-foundation/umi-uploader-aws";
import { S3Client, S3ClientResolvedConfig } from '@aws-sdk/client-s3';


export const uploader = () => {
    // const config: S3ClientResolvedConfig = {

    const client: S3Client = new S3Client()
    
    // = {
    //     config,
    //     destroy: () => {},
    //     // middlewareStack: ""
    //     send: () => {}
    // }
    return awsUploader(
        client,
        "clusttr"
    )
}