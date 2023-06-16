import dotenv from 'dotenv'
dotenv.config({path:"./.env"});
let uri = process.env.URI_DB

export const ping = async (req, res) => {
    res.send("api funcionando correctamente en " + uri)
}