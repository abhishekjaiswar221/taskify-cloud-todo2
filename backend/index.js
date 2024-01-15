//Connection to MongoDB
const connectToMongo = require("./dbConnection");
connectToMongo();

//Express Server
const express = require("express");
const app = express();
const port = 5000;

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// app.get("/", (req, res) => {
//   res.send("Hello I am the Express Server From Localhost");
// });

//Listening to the Server on Port 5000
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
