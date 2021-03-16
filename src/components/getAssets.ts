// Load the required clients and packages
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';

// Initialize the Amazon Cognito credentials provider
const REGION = 'us-east-2';
const BUCKET = 'gvsalinas-portfolio-assets'
const s3 = new S3Client({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: 'us-east-2:b51fd8e7-4096-41ea-8664-9c79d1380699'
  }),
});

const getAssets = (folder: string): Promise<string[]> => {
  var folderKey = encodeURIComponent(folder) + "/";

  return s3.send(new ListObjectsCommand({
    Prefix: folderKey,
    Bucket: BUCKET,
  }))
  .then(data => {
    var href = "https://s3." + REGION + ".amazonaws.com/";
    var bucketUrl = href + BUCKET + "/";
    if (data.Contents) {
      return data.Contents
        .filter((file) => {
          return file.Size && file.Size > 0 ? true : false;
        })
        .map((file) => {
          if (file.Key) {
            return bucketUrl + encodeURIComponent(file.Key);
          } else {
            throw new Error('Atleast one object has no key/name');
          }
        });
    } else {
      throw new Error('No objects in given folder')
    }
  })
}

export default getAssets;