import { pool } from "../database/connection.database.js";

export const getAllSectores = async () => {
    const [rows] = await pool.query('SELECT * FROM sectores', [])
    return rows
}