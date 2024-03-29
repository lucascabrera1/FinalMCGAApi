import mongoose from "mongoose";
import bcrypt from "bcryptjs"

let schemaUsuario = new mongoose.Schema ({
    nombre : {
        type: String,
        required: true
    },
    apellido : {
        type: String,
        required : true
    },
    fechanacimiento : {
        type: Date,
        required: true
    },
    dni : {
        type : Number,
        unique: true,
        required: true
    },
    nacionalidad: {
        type: String,
        required: true
    },
    email : {
        type: String,
        unique: true,
        required: true
    },
    contraseña: {
        type: String,
        required : true
    }
})

schemaUsuario.methods.encryptPassword = async (contraseña) => {
    const salt = await bcrypt.genSalt(9)
    return bcrypt.hash(contraseña, salt)
}

schemaUsuario.methods.validatePassword = function (contraseña) {
    return bcrypt.compare(contraseña, this.contraseña)
}

schemaUsuario.virtual("edad").get(function() {
    let hoy = new Date();
    let edad =  hoy.getFullYear() - this.fechanacimiento.getFullYear();
    if (hoy.getMonth() < this.fechanacimiento.getMonth()){
        return --edad
    }
    else if ((hoy.getMonth() === this.fechanacimiento.getMonth())  && 
    hoy.getDay() < this.fechanacimiento.getDay()){
        console.log(edad)
        return --edad
    }
    else return edad;
})

schemaUsuario.set("toJSON", {
    virtuals: true
})

export default mongoose.model('User', schemaUsuario)