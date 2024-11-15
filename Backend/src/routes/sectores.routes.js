import { Router } from "express";
import { getSectores } from "../controllers/sectores.controllers.js";

const router = Router()

router.get('', getSectores)

export default router