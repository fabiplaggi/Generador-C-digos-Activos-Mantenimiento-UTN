import { pool } from "../database/connection.database.js";

export const getAllEdificios = async () => {
    const [rows] = await pool.query('SELECT * FROM edificios', [])
    return [rows]
}