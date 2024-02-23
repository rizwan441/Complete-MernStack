import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// UserSchema.methods.generateToken = async () => {
//   try {
//     return jwt.sign(
//       {
//         userId: this._id.toString(),
//         email: this.email,
//       },
//       process.env.jwtSecret,
//       {
//         expiresIn: "30d",
//       }
//     );
//   } catch (error) {}
// };

// UserSchema.methods.comparePassword = async () => {
//   return bcrypt.compare(password, this.password);
// };

const User = new mongoose.model("User", UserSchema);
export default User;
