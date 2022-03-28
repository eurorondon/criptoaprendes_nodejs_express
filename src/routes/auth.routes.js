import { Router } from "express";
const router = Router();
import { isLoggedIn, isNotLoggedIn } from "../lib/auth";

import {
  renderSignUp,
  signUp,
  renderSignIn,
  signIn,
  logout,
} from "../controllers/auth.controller";

// SIGNUP
router.get("/signup", renderSignUp);
router.post("/signup", signUp);

// SINGIN
router.get("/signin",isNotLoggedIn, renderSignIn);
router.post("/signin", signIn);

router.get("/logout", logout);

export default router;
