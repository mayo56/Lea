require("dotenv")
/////////////////////-----------------
//PostgreSQL
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



async function Lea (phrase:string) {
    const data = await requestDB(`select * from word where upper(word)='${phrase.toUpperCase()}'`);
    if (data.rows.length < 1) return console.log("Je ne connais pas ce mot, apprenez le moi !");
    else console.log(data.rows);
};

Lea("bonjour")