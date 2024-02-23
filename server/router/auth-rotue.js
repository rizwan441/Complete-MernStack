import express from "express";
import { login, register, userData } from "../controller/auth-controller.js";
import { signUpSchema } from "./../validator/auth-validator.js";
import { registerMiddleware } from "../middleEares/registrationMiddleware.js";
import { loginSchema } from "./../validator/auth-validator.js";
import { loginMiddleware } from "../middleEares/loginMiddleWare.js";
import { submitMessage } from "./../controller/clientConreoler.js";
import { clientFormMiddleware } from "./../middleEares/contactFormMiddleware.js";
import { clientFormSchemaValidator } from "./../validator/auth-validator.js";
import { authMiddleware } from "../middleEares/authMiddleware.js";

const router = express.Router();

router.post("/login", loginMiddleware(loginSchema), login);
router.post("/register", registerMiddleware(signUpSchema), register);
router.get("/user", authMiddleware, userData);

router.post(
  "/client",
  clientFormMiddleware(clientFormSchemaValidator),
  submitMessage
); //add validation here

export default router;
