const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectDB = async () => {
  const connection = await mongoose.connect("mongodb://localhost:27017/HostParty", {
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

// API Routes
const userRoutes = require("./routes/app-api/userRoutes");
const eventRoutes = require("./routes/app-api/eventRoutes");

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/events", eventRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
