/////////////////////----------------
// DotEnv
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env"});
/////////////////////-----------------
// PostgreSQL
import { Client } from "pg";
const credentials = {
    user: process.env.DB_USER,
    host: 'localhost',
    database: 'LeaDB',
    password: process.env.DB_PASS,
    port: 5455
};
async function requestDB(req: string) {
    const client = new Client(credentials);
    await client.connect();
    const now = await client.query(req);
    await client.end();
    return now;
};
////////////-------------------------


////////////////---------------------
// Import des fonctions de trie
import { sortSpecialCaractere, forUseInSQLRequest } from "./functions/sortFunction"
// import fonctions de réponse
import { resAccordToSize } from "./functions/FirstResFunctions";
//////////---------------------------

async function Lea (phrase:string) {
    const MotsDePhrase = sortSpecialCaractere(phrase);
    const RequestMotsDePhrase = forUseInSQLRequest(MotsDePhrase);
    const data = await requestDB(`select * from word where upper(word) in (${RequestMotsDePhrase.join(",")})`);
    const res = resAccordToSize(data.rows, MotsDePhrase);
    console.log(res)
};

Lea("bonjour")