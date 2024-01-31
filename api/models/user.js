import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
  crushes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  recievedLikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  matches: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  profileImages: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
  turnOns: [
    {
      type: String, //Array of string for turn ons
    },
  ],
  lookingFor: [
    {
      type: String, // Array of strings for what they are looking for
    },
  ],
});


const User = model("User",userSchema);

export default User