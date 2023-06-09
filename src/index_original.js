
import express from 'express';
import router from './Routes/index.js'
//import {connect} from './connection.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config({path: './.env'})

const app = express()
const port = process.env.PORT

//uses
app.use(cors())
app.use(express.json())
app.use('/', router)
app.set('appName', 'Recuperatorio MCGA 2021 back-end')

app.use((req, res, next) => {
    res.send("paso por la funcion app.use")
    console.log("paso por la funcion app.use")
    next()
})

app.listen(port, () =>{
    console.log(`aplicacion ${app.get('appName')} corriendo en localhost puerto ${port}`)
})

//connect()

export default app