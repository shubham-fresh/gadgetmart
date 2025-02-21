import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/connectDB.js";
import brandRouters from "./routes/brandRouters.js";
import categoryRouters from "./routes/categoryRouters.js";
import couponRouters from "./routes/couponRouters.js";
import sellerRouters from "./routes/sellerRouters.js";
import productRouters from "./routes/productRouters.js";

dotenv.config();
connectDB();

const server = express();
const port = 3000 || process.env.PORT;

server.use(express.json());
server.use("/api/brand", brandRouters);
server.use("/api/category", categoryRouters);
server.use("/api/coupon", couponRouters);
server.use("/app/seller", sellerRouters);
server.use("/api/product", productRouters);


server.all("*", (req, resp) => {
    resp.status(404).json({ "message": "Requested URL does not exist on the server !!!" });
});

server.listen(port,() => 
    console.log(`Server [STARTED] ~ http://localhost:${port}/`)
);