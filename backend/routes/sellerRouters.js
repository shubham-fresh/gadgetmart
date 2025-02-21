import express from "express";
import sellerControllers from "../controllers/sellerControllers.js";

const router = express.Router();

const { addSeller, getAllSellers, getSeller, updateSeller, deleteSeller } = sellerControllers;


router.post("/add", addSeller);
router.get("/", getAllSellers);
router.get("/:id", getSeller);
router.put("/update/:id", updateSeller);
router.delete("/delete/:id", deleteSeller);


export default router;