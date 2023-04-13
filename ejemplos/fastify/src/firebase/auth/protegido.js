const { admin } = require('../../../include/firebase.js');

module.exports = async (req, res) => {
    try {
        const token         = req.headers.authorization.split(' ')[1];        
        const decodedToken  = await admin.auth().verifyIdToken( token );
    } catch (error) {
        res.code(401).send(JSON.stringify(error));
    }    
};