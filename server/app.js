const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
require("dotenv").config();

const DATA_PATH = process.env.MONGODB_PATH;

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "https://connectsd.vercel.app", credentials: true }));

app.use(express.json());

const store = new MongoDBStore({
  uri: DATA_PATH,
  collection: "mySessions",
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    store: store,
    resave: false,
    saveUninitialized: false,
  }),
);

const rootdir = require("./utils/pathUtils");
app.use(express.static(path.join(rootdir, "public")));

const authRouter = require("./router/authRouter");
const userRouter = require("./router/userRouter");
const userPostRouter = require("./router/userPostRouter");
const searchRouter = require("./router/searchRouter");
const myNetwork = require("./router/networkRouter");

app.use("/uploads", express.static("uploads"));
app.use("/api/user", authRouter);
app.use("/api/user", userRouter);
app.use("/api/user", userPostRouter);
app.use("/api/user", searchRouter);
app.use("/api/user", myNetwork);

const PORT = process.env.PORT || 3006;

mongoose
  .connect(DATA_PATH)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("error while connecting to database,", err);
  });
