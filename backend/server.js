//Package Imports
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

const PORT = process.env.PORT || 5000;

//environment variable config
dotenv.config();


// ----- Middleware -------- // 
app.use(express.json()); //to get request body
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);







server.listen(PORT, () => {
    connectToDB();
    console.log(`server running on port ${PORT}`)
});