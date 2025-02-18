import express from "express";
import brandControllers from "../controllers/brandControllers.js";

const router = express.Router();

const { addBrand, getAllBrands, getBrand, updateBrand, deleteBrand } = brandControllers;

router.post("/add", addBrand);
router.get("/", getAllBrands);
router.get("/:id", getBrand);
router.put("/update/:id", updateBrand);
router.delete("/delete/:id", deleteBrand);


export default router;