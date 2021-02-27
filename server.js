const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const passport = require("./config/passport");
const session = require("express-session");
const morgan = require("morgan");

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectDB = async () => {
  const connection = await mongoose.connect("mongodb://localhost:27017/HostParty2", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`Mongo DB Connected on ${connection.connection.host}`);
};

connectDB();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Logger Middleware for Development
app.use(morgan("tiny"));

app.use(
  session({
    secret: "super secret hostingparty",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Auth Routes
const authRoute = require("./routes/auth/authRoute");
app.use("/", authRoute);

// API Routes
const userRoutes = require("./routes/app-api/userRoutes");
const eventRoutes = require("./routes/app-api/eventRoutes");
const foodRoutes = require("./routes/food-api/foodRoutes");
const awsRoutes = require("./routes/aws-api/awsRoutes");

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/events", eventRoutes);
app.use("/api/v1/food", foodRoutes);
app.use("/api/v1/aws", awsRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
