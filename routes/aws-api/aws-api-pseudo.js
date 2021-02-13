app.post("/api-aws/text", function (req, res) {
  // On client side, Event Host (User) will:
  // 1) add friends(has full profile) to event  - **Action (separate API call) client side will add the event to that user's pending events list
  // 2) add phone numbers of friends who are not registered users yet - this will go in unregisteredUsers model (phone number, eventId and possibly name?);

  // Here on server side, hitting this route ("/api-aws/text")
  // 1) findAll users where the eventId matches the eventId provided in request object. forEach(user => notifyAttendees())
  // 2) findAll unregisteredUsers where eventId matches the eventId provided in requrest object. forEach(user => notifyAttendees())

  // Do we want to start with textNotification option or just have that as part of our business model to start?

  db.User.findAll({
    //where textNotification: true & on event: req.event
  }).then(function (data) {
    console.log("Users to be notified: ");
    data.forEach((element) => {
      notifyAttendees(`+1${element.phoneNumber}`, req.msg);
    });
  });
});

function notifyAttendees(num, msg) {
  //Foreach phone number, send text;
  let params = {
    Message: msg,
    PhoneNumber: num,
    MessageAttributes: {
      "AWS.SNS.SMS.SenderID": {
        DataType: "String",
        StringValue: "Hosting Party",
      },
    },
  };
  const publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" }).publish(params).promise();
  publishTextPromise.catch(function (err) {
    console.log(`An SNS error has occured: ${err}`);
  });
}
