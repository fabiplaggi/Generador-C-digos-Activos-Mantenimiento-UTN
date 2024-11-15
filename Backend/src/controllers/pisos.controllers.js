import { getAllPisos } from "../models/pisos.models.js";

export const getPisos = async (req, res) => {
    try {
        const pisos = await getAllPisos()
        res.json(pisos)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pisos', error })
    }
}