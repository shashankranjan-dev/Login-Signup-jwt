const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter = require("./router/userRouter");

app.use(cors());
app.use("/", router);
const port = process.env.PORT || 3000;

const uri =
  "mongodb+srv://ranjanshashank:BPazmnmK3XLFRc81@cluster0.v49ahbb.mongodb.net/";
// "mongodb+srv://ranjanshashank:BPazmnmK3XLFRc81@cluster0.q1wqrz3.mongodb.net/test";

// //Connect to DB command
mongoose.connect(uri, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);

app.use(express.json());

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`welcome to the tech world at PORT: ${port}`);
});
