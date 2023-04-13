const app = require('../../../include/firebase.js');
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

module.exports = async (req, res) => {
    if(req.method != 'POST') {
        return res.code(501).send('Método no implementado');
    }

    // signIn code
    try {
        const userData = {
            email: req.body.email, 
            password: req.body.password
        };
        const usuario = await signInWithEmailAndPassword(getAuth()
                                , userData.email
                                , userData.password
        );
        return {usuario};
    } catch (error) {
        switch( error.code ) {
            case 'auth/invalid-email':
            case 'auth/user-not-found':
            case 'auth/wrong-password':
                return res.code(401).send({
                    codigo: error.code,
                    mensaje: error.message
                });
            default:
                res.code(500).send({
                    codigo: error.code,
                    mensaje: error.message
                });
        }
    }
};