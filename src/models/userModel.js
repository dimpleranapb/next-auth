import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: [true, "Username already taken"],
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
