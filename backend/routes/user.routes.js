import express from "express";
import routeProtector from "../middleware/routeProtector.js";
import { getUsersForBar } from "../controllers/user.controller.js";


const router = express.Router();

router.get("/", routeProtector, getUsersForBar)
export default router;