import { pgPool } from "../../config/pgPool.js";

export const createCafe = async (cafe) =>{
        try {
            const result = await pgPool.query(
                `INSERT INTO cafe (nom, describe, ref, origine, prix, caracteristiques, disponible) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                [
                    cafe.nom,
                    cafe.describe,
                    cafe.ref,
                    cafe.origine,
                    cafe.prix,
                    cafe.caracteristiques,
                    cafe.disponible
                ]
            );
            return result ?? null;
        } catch (error) {
            throw error;
        }
    };
    
    export const filtreCafe = async () =>{
        try {
            const {rows : result} = await pgPool.query(`SELECT nom FROM cafe`);
            return result ?? null;
        } catch (error) {
            throw error;
        }
    };

export const deleteCafe = async (cafe) => {
    try {
        const result = await pgPool.query(`DELETE FROM cafe WHERE nom ILIKE $1`, [cafe])
        return result ?? null;
    } catch (error) {
        throw error;
    }
}

export const allCafe = async () =>{
    try {
        const {rows : result} = await pgPool.query(`SELECT column_name FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'cafe' AND column_name <> 'id';`);
        return result ?? null;
    } catch (error) {
        throw error;
    }
};


export const modifyCafe = async (cafe1, cafe2, cafe3) => {
    const colonneAModifier = cafe1; 
    const nouvelleValeur = cafe2;
    const conditionValeur = cafe3;
    try {
        const result = await pgPool.query(`UPDATE cafe SET ${colonneAModifier} = $1 WHERE nom ILIKE $2`, [nouvelleValeur, conditionValeur])
        return result ?? null;
    } catch (error) {
        throw error;
    }
}