// // @desc    Get recipe
// // @route   GET /api/v1/aws
// // @access  Public
const router = require("express").Router();
const AWS = require('aws-sdk');
const multer = require("multer");

module.exports = function(app) {
  var storage = multer.memoryStorage();
  var upload = multer({ storage: storage });

  // app.post("/upload-photo", upload.single("myPicture"), function(req, res) {
  app.post("api/v1/upload-photo", upload.single("myPicture"), function(req, res) {
    if (req.file.userId) {

      const file = req.file;
      const s3FileURL = process.env.AWS_S3_Uploaded_File_URL_LINK;

      let s3bucket = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_S3_REGION
      });

      //Stored file metadata
      var params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read"
      };

      // //Call to S3 storage, uploading picture
      s3bucket.upload(params, function(err, data) {
        if (err) {
          res.status(500).json({ error: true, Message: err });
        } else {
          res.send({ data });
          var newFileUploaded = {
            description: req.body.description,
            fileLink: s3FileURL + file.originalname,
            s3_key: params.Key
          };
        }
      });
    }
  });

  app.post("api/v1/text/:number", function(req, res) {
      let params = {
        Message: req.body,
        PhoneNumber: req.params.number,
        MessageAttributes: {
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': "PNWWhaler"
            }
        }
      };
      const publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
      publishTextPromise.catch(
        function (err) {
            console.log(`An SNS error has occured: ${err}`);
        }
      )
    });
}
