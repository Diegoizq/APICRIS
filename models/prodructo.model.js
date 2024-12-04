const mongoose = require ('mongoose')

const productoModel = mongoose.Schema ({

    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        enum: ['Fruta', 'Verdura'],
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String
    },
    imagen: {
        type: String // Campo para la URL de la imagen
    }
})

module.exports = mongoose.model('producto', productoModel)
// {
//     "nombre":"mango",
//     "tipo":"Fruta",
//     "precio":2000,
//     "stock":500,
//     "descripcion":"amarillo, dulce"
//     "imagen":"http:image/mango"

// }
