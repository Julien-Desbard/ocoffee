import { pgPool } from "../../config/pgPool.js";

export const oneCafe = async (id) =>{
        try {
            const {rows :  [cafe] } = await pgPool.query(`SELECT * FROM cafe WHERE id = $1`, [id])
            return cafe ?? null;
        } catch (error) {
            throw error;
        }
    };
    