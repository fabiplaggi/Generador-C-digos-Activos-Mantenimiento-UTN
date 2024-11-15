import { getAllUbicaciones } from "../models/ubicaciones.models.js";

export const getUbicaciones = async (req, res) => {
    try {
        const ubicaciones = await getAllUbicaciones()
        res.json(ubicaciones)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los ubicaciones', error })
    }
}