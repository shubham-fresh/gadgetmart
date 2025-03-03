import express from "express";
import userControllers from "../controllers/userControllers.js";

const router = express.Router();

const { signIn, logIn } = userControllers;


router.post("/signin", signIn);
router.get("/login", logIn);


export default router;