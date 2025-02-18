import express from "express";
import couponControllers from "../controllers/couponControllers.js";

const router = express.Router();

const { addCoupon, getAllCoupons, getCoupon, updateCoupon, deleteCoupon } = couponControllers;

router.post("/add", addCoupon);
router.get("/", getAllCoupons);
router.get("/:id", getCoupon);
router.put("/update/:id", updateCoupon);
router.delete("/delete/:id", deleteCoupon);


export default router;