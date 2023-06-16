import express from "express";
import router from './Routes/index.js'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

var app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.set('appName', 'Recuperatorio MCGA 2021 back-end')


dotenv.config({path:"./.env"});

let puerto = process.env.PORT;

app.use((req, res, next) => {
    res.send("paso por la funcion app.use")
    console.log("paso por la funcion app.use")
    next()
})

app.listen(puerto, function() {
        console.log("api de usuarios iniciada en puerto "+puerto);
})

export default app;