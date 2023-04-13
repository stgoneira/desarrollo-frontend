const { credential } = require('firebase-admin');
const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = async (req, res) => {
    try {
        const usuario = await admin.auth().createUser({
            email: 'admin@example.com',
            password: '123456'
        });
        return usuario;    
    } catch (error) {
        return {error};
    }
    
};