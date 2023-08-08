import express from 'express'
import users from '../Controllers/users.js'
import morgan from 'morgan'
import verifyToken from '../Controllers/verifyToken.js'

const router = express()

router.use(express.json())
router.use(morgan('short'))

 router.use((req, res, next) => {
    console.log(`url : ${req.url} method: ${req.method}`)
    console.log("paso por la funcion app.use")
    console.log(req.params)
    next()
}) 

router.route('/usuarios')
    .get(verifyToken, users.getUsers)
    .post(users.AddUser)
router.route('/usuarios/:id')
    .get(verifyToken, users.GetUser)
    .patch(verifyToken, users.EditUser)
    .delete(verifyToken, users.DeleteUser)
router.get('/usuarios/buscarpordni/:dni', verifyToken, users.getUserByDni)
router.get('/usuarios/buscarpormail/:email', verifyToken, users.getUserByEmail)

export default router