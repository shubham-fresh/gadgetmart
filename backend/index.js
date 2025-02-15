import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/connectDB.js";

dotenv.config();
connectDB();

const server = express();
const port = 3000 || process.env.PORT;

server.all("*", (req, resp) => {
    resp.status(404).json({ "message": "Requested URL does not exist on the server !!!" });
});

server.listen(port,() => 
    console.log(`Server [STARTED] ~ http://localhost:${port}/`)
);