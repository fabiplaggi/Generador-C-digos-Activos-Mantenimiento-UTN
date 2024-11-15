import { pool } from "../database/connection.database.js";

export const getAllUbicaciones = async () => {
    const [rows] = await pool.query('SELECT * FROM ubicaciones', [])
    return rows
}