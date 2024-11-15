import { Router } from "express";
import { getPisos } from "../controllers/pisos.controllers.js";

const router = Router()

router.get('', getPisos)

export default router