import { getEdificios } from "../controllers/edificios.controllers.js";
import { Router } from "express";

const router = Router()

router.get('', getEdificios)

export default router