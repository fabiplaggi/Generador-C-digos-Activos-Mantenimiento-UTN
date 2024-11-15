import { Router } from "express";
import { getActivos } from "../controllers/activos.controllers.js";

const router = Router()

router.get('', getActivos)

export default router