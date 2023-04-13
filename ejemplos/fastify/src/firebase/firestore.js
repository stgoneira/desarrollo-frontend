const { async } = require('@firebase/util');
const { admin } = require('../../include/firebase.js');
const db        = admin.firestore();
const coleccion = db.collection('productos');

// Source: https://googleapis.dev/nodejs/firestore/latest/DocumentReference.html 

module.exports = async (req, res) => {
    switch(req.method) {
        case 'GET':
            //return buscar();
            //return agregar();
            //return modificar();
            return borrar();
        case 'POST':
        case 'PUT':
        case 'DELETE':
        default:
            res.code(405).send("Método HTTP no permitido");
    }
};

async function buscar() {
    const query     = await coleccion.where('precio', '<', 20000);
    const productos = (await query.get()).docs.map(d => d.data());
    return {productos};
}

async function agregar() {
    const documento = {        
        nombre: 'Producto 3',
        precio: 990
    };
    const docRef = await coleccion.doc();
    documento.id = docRef.id;
    docRef.set(documento);
    return documento;
}

async function modificar() {
    const docRef = await coleccion.doc("lNp3wtBmGhQ98brEsrFg");
    await docRef.update({
        precio: 99990
    });
    return {docRef};
}

async function borrar() {
    const docRef = await coleccion.doc("8apF9lGNoMq928a6QFGo");
    await docRef.delete();
    return {borrado: true};    
}