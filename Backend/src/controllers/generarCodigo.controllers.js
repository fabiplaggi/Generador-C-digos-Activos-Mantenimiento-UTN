import { generarCodigoActivo } from "../models/generarCodigo.models.js";

export const crearCodigoActivo = async (req, res) => {
    try {
        const { idEdificio, idPiso, idSector, idActivo, idUbicacion } = req.body;

        // Llama a la función en el modelo para generar el código
        const codigoGenerado = await generarCodigoActivo(idEdificio, idPiso, idSector, idActivo, idUbicacion);

        // Devuelve el código generado como respuesta
        res.status(200).json({ codigo: codigoGenerado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al generar el código de activo' });
    }
};