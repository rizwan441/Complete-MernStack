//

import jwt from "jsonwebtoken";
import User from "./../models/UserModel.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ msg: "No token provided" });
    }
    const jwtToken = token.replace("Bearer ", "").trim();

    console.log("Token from auth middleware", jwtToken);

    try {
      const decodedToken = jwt.verify(jwtToken, process.env.jwtSecret);

      // Find user by email from the decoded token
      const user = await User.findOne({ email: decodedToken.email }).select({
        password: 0, // Exclude password from the returned user data
      });

      if (!user) {
        return res.status(401).json({ msg: "User not found" });
      }

      // Assign user data and token to request object
      req.user = user;
      req.token = token;
      req.id = user._id;

      next();
    } catch (error) {
      console.error("Error verifying token:", error);
      return res.status(401).json({ msg: "Invalid token" });
    }
  } catch (error) {
    console.error("Error in authMiddleware:", error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};
