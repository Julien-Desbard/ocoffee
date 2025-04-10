// import de pg
import pg from 'pg'
// récupération de Pool à l'interieur de pg
const { Pool } = pg
 
// je crée un objet pool
export const pgPool = new Pool()