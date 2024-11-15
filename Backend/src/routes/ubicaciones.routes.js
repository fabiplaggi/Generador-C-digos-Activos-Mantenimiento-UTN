import { Router } from "express";
import { getUbicaciones } from "../controllers/ubicaciones.controlles.js";

const router = Router()

router.get('', getUbicaciones)

export default router