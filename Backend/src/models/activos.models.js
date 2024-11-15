import { pool } from "../database/connection.database.js";

export const getAllActivos = async () => {
    const [rows] = await pool.query('SELECT * FROM activos', [])
    return rows
}