//Package Imports
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//File imports
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"
//database import
import connectToDB from "./db/connectToDB.js";
//other
import { app, server } from './socket/socket.js'

//Variables

//deployment variable -->absolute path to root
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

//environment variable config
dotenv.config();


// ----- Middleware -------- // 
app.use(express.json()); //to get request body
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});







server.listen(PORT, () => {
    connectToDB();
    console.log(`server running on port ${PORT}`)
});