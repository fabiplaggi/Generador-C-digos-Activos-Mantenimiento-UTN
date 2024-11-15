import { getAllActivos } from "../models/activos.models.js";

export const getActivos = async (req, res) => {
    try {
        const activos = await getAllActivos()
        res.json(activos)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los activos', error })
    }
}