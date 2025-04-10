import { pgPool } from "../../config/pgPool.js";

export const allCafe = async () =>{

        try {
            const {rows :  cafe } = await pgPool.query(`SELECT * FROM cafe ORDER BY id DESC`)
            return cafe ?? null;
        } catch (error) {
            throw error;
        }
    };
    