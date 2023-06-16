import express from "express";
import { Router } from 'express';
import { ping } from "./Controllers/home";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

var app = express();
app.use(cors());
app.use(bodyParser.json());

const router = Router();
router.route('/').get(ping);
app.use(router);

dotenv.config({path:"./.env"});

let puerto = process.env.PORT;

app.listen(puerto, function() {
        console.log("api de usuarios iniciada en puerto "+puerto);
})

export default app;