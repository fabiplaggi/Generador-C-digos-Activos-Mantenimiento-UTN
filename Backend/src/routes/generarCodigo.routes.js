import { Router } from "express";
import { crearCodigoActivo } from "../controllers/generarCodigo.controllers.js";

const router = Router()

router.post('/gen', crearCodigoActivo)

export default router