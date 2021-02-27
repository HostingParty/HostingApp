// const express = require("express");
// const router = express.Router();
// const AWS = require('aws-sdk');
// const multer = require("multer");

// //POST route to upload a picture file
// router.post("/upload-photo", upload.single("myPicture"), function(req, res) {
//     var storage = multer.memoryStorage();
//     var upload = multer({ storage: storage });
//   if (req.file.originalname) {

//     const file = req.file;
//     const s3FileURL = process.env.AWS_S3_Uploaded_File_URL_LINK;

//     let s3bucket = new AWS.S3({
//       accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
//       secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
//       region: process.env.AWS_S3_REGION
//     });

//     //Stored file metadata
//     var params = {
//       Bucket: process.env.AWS_S3_BUCKET_NAME,
//       Key: file.originalname,
//       Body: file.buffer,
//       ContentType: file.mimetype,
//       ACL: "public-read"
//     };

//     //Call to S3 storage, uploading picture
//     s3bucket.upload(params, function(err, data) {
//       if (err) {
//         res.status(500).json({ error: true, Message: err });
//       } else {
//         res.send({ data });
//         var newFileUploaded = {
//           description: req.body.description,
//           fileLink: s3FileURL + file.originalname,
//           s3_key: params.Key
//         };

//         //Put update NEEDED to user with image url of fileLink    

//       }
//     })      
//   }
// });

// router.post("/text/:number", function(req, res) {
//     let num = req.params.number;
//     let msg = req.body;
//     notifySubscribers(num, msg);
// });

// function notifySubscribers(num, msg) {
// //Foreach subscriber, send text;
// let params = {
//     Message: msg,
//     PhoneNumber: num,
//     MessageAttributes: {
//         'AWS.SNS.SMS.SenderID': {
//             'DataType': 'String',
//             'StringValue': "Hosting Party"
//         }
//     }
// };
// const publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
// publishTextPromise.catch(
//     function (err) {
//         console.log(`An SNS error has occured: ${err}`);
//     }
// )
// };

// module.exports = router;