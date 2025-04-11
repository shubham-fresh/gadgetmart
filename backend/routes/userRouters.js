import express from "express";
import userControllers from "../controllers/userControllers.js";

const router = express.Router();

const { addUser, getUser, getAllUser, updateUser, deleteUser } = userControllers;


router.post("/add", addUser);
router.get("/", getUser);
router.get("/:id", getAllUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;