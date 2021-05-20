const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const port = 6000

const DB_ONLINE = "mongodb+srv://shotcode:ilovemusic1234@cluster0.g51is.mongodb.net/shotcode?retryWrites=true&w=majority";

const app = express();


mongoose
  .connect(DB_ONLINE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database has been connected successfully...!");
  });

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send("API is ready for consumption");
});

app.listen(port, () => {
  console.log(`server is ready to listen to port: ${port}`);
});