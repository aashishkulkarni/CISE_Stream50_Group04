const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')


app.use(cors())
require('dotenv').config()
const url = process.env.MONGOLAB_URI
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );

} catch (e) {
  console.log("could not connect");
}


const articleRouter = require("./router/articleRouter");

const bodyParser = require('body-parser');
const { addOnceData } = require("./controller/articleController");

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded()); // t

app.use("/article", articleRouter);

addOnceData()
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`The server is runnig on ${PORT} port `);
});
