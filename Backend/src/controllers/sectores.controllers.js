import { getAllSectores } from "../models/sectores.models.js";

export const getSectores = async (req, res) => {
    try {
        const sectores = await getAllSectores()
        res.json(sectores)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los sectores', error })
    }
}