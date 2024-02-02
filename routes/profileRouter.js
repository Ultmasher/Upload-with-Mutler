import express from "express";
import { postProfile } from "../controllers/profile.js";

const profileRouter = express.Router();

profileRouter.post("/", postProfile);

export default profileRouter;   