import { pool } from "../database/connection.database.js";

export const getAllPisos = async () => {
    const [rows] = await pool.query('SELECT * FROM pisos', [])
    return rows
}