/////////////////////-----------------
//PostgreSQL
import { Client } from "pg";
const credentials = {
    user: 'Mayo',
    host: 'localhost',
    database: 'LeaDB',
    password: 'GEGE3325ad',
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
    const data = requestDB(`select * from word where upper(word)='${phrase.toUpperCase()}'`);
    if ((await data).rows.length < 1) return console.log("Je ne connais pas ce mot, apprenez le moi !");
    else console.log((await data).rows);
};

Lea("bonjour")