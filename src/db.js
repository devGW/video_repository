import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config(); //env파일의 variable 들을 process.env.key 로 저장

mongoose.connect(
  process.env.PRODUCTION ? process.env.MONGO_URL_PROD : process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;
const handleOpen = () => console.log("✅ Connected to DB");
const handleError = err => console.log(`❌ Error on DB Connection: ${err}`);

db.once("open", handleOpen);
db.on("error", handleError);
