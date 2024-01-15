const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/TaskifyTodoDB";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  const connectionState = mongoose.connection.readyState;
  switch (connectionState) {
    case 0:
      console.log(
        `Status Code is ${connectionState}, Disconnected with MongoDB`
      );
      break;
    case 1:
      console.log(
        `Status Code is ${connectionState}, Connected to MongoDB Successfully`
      );
      break;
    case 2:
      console.log(`Status Code is ${connectionState}, Connecting to MongoDB`);
      break;
    case 3:
      console.log(
        `Status Code is ${connectionState}, Disconnecting with MongoDB`
      );
      break;
    case 99:
      console.log(
        `Status Code is ${connectionState}, Connection to MongoDB is Uninitialized`
      );
  }
};
module.exports = connectToMongo;
