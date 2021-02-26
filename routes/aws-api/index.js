const router = require("express").Router();
const AWS = require('aws-sdk');
const multer = require("multer");

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

//POST route to upload a document file. 
//Req has: {file.originalname, userId}
exports.uploadPhoto = async (req, res, next) => {
  
}

app.post("/api-aws/upload", upload.single("myPicture"), async function(req, res) {
    if (req.file.userId) {
      //Sleep for DB record to be created. TODO handle better in production.
      await new Promise(r => setTimeout(r, 2000));
  
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
            fileLink: s3FileURL + file.userId,
            s3_key: params.Key
          };
        }
      });
  
          // Put update to user model with picture name and URL Link     
          db.User.findByIdAndUpdate(
              {
                id: req.userId
              },
              {
                pictureUrl: newFileUploaded.fileLink
              },
              {
                returnOriginal: false
              },
              (error, data) => {
                if (err) return res.status(400).json({ success: false, msg: err });
                if (data === null) return res.status(400).json({ success: false, msg: "No user found" });

                res.status(200).json({
                  success: true,
                  data: data,
                });
              }
          );
    }   
  });

  app.post("/api-aws/text", function(req, res) {
      function fetchSubscribers(event, msg) {
      // DB call for list of attendees for a particular event
      db.User.findAll({
          //where textNotification: true & on event: req.event
      }).then(function(data) {
        console.log("Users to be notified: ");
        data.forEach(element => {
          notifyAttendees(`+1${element.phoneNumber}`, req.msg);
        });
      })
    }
  });

  function notifyAttendees(num, msg) {
    //Foreach phone number, send text;
    let params = {
      Message: msg,
      PhoneNumber: num,
      MessageAttributes: {
          'AWS.SNS.SMS.SenderID': {
              'DataType': 'String',
              'StringValue': "Hosting Party"
          }
      }
    };
    const publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
    publishTextPromise.catch(
      function (err) {
          console.log(`An SNS error has occured: ${err}`);
      }
    )
  };
  

module.exports = router;
