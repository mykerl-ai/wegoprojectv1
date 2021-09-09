const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: "AKIA3JW3XH4SDSGTZ6A7",
  secretAccessKey: "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",
  region: "eu-west-2",
});


export { s3 }