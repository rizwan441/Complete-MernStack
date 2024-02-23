import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const clienSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const Client = new mongoose.model("Client", clienSchema);

export default Client;
