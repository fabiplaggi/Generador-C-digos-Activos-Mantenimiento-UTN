import { pool } from "../database/connection.database.js";

export const generarCodigoActivo = async (idEdificio, idPiso, idSector, idActivo, idUbicacion) => {
    const query = `CALL generarCodigoActivo(?, ?, ?, ?, ?);`;
    const [rows] = await pool.execute(query, [idEdificio, idPiso, idSector, idActivo, idUbicacion]);
    return rows[0][0].codigo_generado; // Retorna el código generado
};