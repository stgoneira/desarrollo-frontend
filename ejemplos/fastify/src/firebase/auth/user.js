const app = require('../../../include/firebase.js');
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");

module.exports = async (req, res) => {
    switch( req.method ) {          
        case 'GET': return get(req, res);
        case 'POST': return postRegistroUsuario(req, res); 
        case 'DELETE': return deleteM(req, res); 
        case 'PUT': return put(req, res); 
        default: res.code(404).send('Página no encontrada.');
    }
};

function get(req, res) {
    return {metodo: 'GET'};
}

async function postRegistroUsuario(req, res) {
    try {
        const data      = req.body;
        const usuario   = await createUserWithEmailAndPassword(getAuth(), data.email, data.password);
        return usuario;
    } catch(error) {
        res.code(500).send({
            codigo: error.code,
            mensaje: error.message
        });
    }    
}

function deleteM(req, res) {
    return {metodo: 'DELETE'};
}

function put(req, res) {
    return {metodo: 'PUT'};
}