import User from "../models/UserModel.js"; // Adjust the path to match the location of your userModel file
import bcrypt from "bcrypt"; // Assuming you're using bcrypt for password hashing
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const ExistEmail = await User.findOne({ email });
    console.log(ExistEmail);
    // if (!ExistEmail) {
    //   return res.status(400).json({ messege: "invalid criendital" });
    // }

    if (!ExistEmail || !(await bcrypt.compare(password, ExistEmail.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        _id: ExistEmail._id.toString(),
        userId: ExistEmail._id.toString(),
        email: ExistEmail.email,
        isAdmin: ExistEmail.isAdmin,
      },
      process.env.jwtSecret,
      {
        expiresIn: "1h",
      }
    ); //
    res.status(200).json({ token, message: "User exist sucessfully" });
  } catch (error) {
    console.log("error");
  }
};

export const register = async (req, res) => {
  try {
    const { email, username, password, phone } = req.body;
    //  check if user Exist;
    const UserExist = await User.findOne({ email: email });
    if (UserExist) {
      return res.status(400).json({ mesege: "useralready exist" });
    }
    //   create new user and save it to the database
    const saltRounds = 10;

    const hashPasword = await bcrypt.hash(password, saltRounds);
    const userCreated = await User.create({
      email,
      username,
      password: hashPasword,
      phone,
    });
    // const token = jwt.sign(
    //   {
    //     userId: userCreated._id.toString(),
    //     email: userCreated.email,
    //     isAdmin: userCreated.isAdmin, // Assuming you have an isAdmin field in your User model
    //   },
    //   process.env.jwtSecret,
    //   {
    //     expiresIn: "10m",
    //   }
    // );

    const token = jwt.sign(
      {
        userId: userCreated._id.toString(),
        email: userCreated.email,
        isAdmin: userCreated.isAdmin,
      },
      process.env.jwtSecret,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({ message: "userCreated", token: token });

    // res.send("login successfully");
  } catch (error) {
    console.log(error);
  }
};

/////

/////////////

export const userData = async (req, res) => {
  try {
    const UserData = req.user;
    res.status(200).json({ mesg: UserData });
  } catch (error) {
    console.log(error);
  }
};
