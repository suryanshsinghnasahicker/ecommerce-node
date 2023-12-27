import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
//router object
const router = express.Router();

//routing
//Register||Method POST
router.post("/register", registerController);
//login || Method Post
router.post("/login", loginController);

// test route
router.get("/test", testController);

// protected route
//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
