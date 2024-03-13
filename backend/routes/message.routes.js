import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import routeProtector from "../middleware/routeProtector.js";

const router = express.Router();

//protect this route, basically only those that are logged in
router.get("/:id", routeProtector, getMessages);
router.post("/send/:id", routeProtector, sendMessage);

export default router;