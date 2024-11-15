import { getAllEdificios } from "../models/edificios.models.js";

export const getEdificios = async (req, res) => {
    try {
        const edificios = await getAllEdificios()
        res.json(edificios)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los edificios', error })
    }
}