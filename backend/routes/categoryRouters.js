import express from "express";
import categoryControllers from "../controllers/categoryControllers.js";

const router = express.Router();

const { addCategory, getAllCategories, getCategory, updateCategory, deleteCategory } = categoryControllers;

router.post("/add", addCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategory);
router.put("/update/:id", updateCategory);
router.delete("/delete/:id", deleteCategory);

export default router;