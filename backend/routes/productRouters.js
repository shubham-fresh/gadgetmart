import express from "express";
import productControllers from "../controllers/productControllers.js";

const router = express.Router();

const { addProduct, getAllProducts, getProduct, updateProduct, deleteProduct } = productControllers;


router.post("/add", addProduct);
router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.put("/update/:id", updateProduct);
router.delete("delete/:id", deleteProduct);


export default router;