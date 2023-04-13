const { async } = require('@firebase/util');
const { admin } = require('../../include/firebase.js');
const fs        = require('fs');
const path      = require('path');

const bucket = admin.storage().bucket("aiep-frontend-2023.appspot.com");

module.exports = async (req, res) => {
    switch( req.method ) {
        case "GET":
            return subirArchivoSistema();
        case "POST":
            return subirArchivoPOST();
        default: 
            res.code(404).send();
    }
};

async function subirArchivoSistema() {
    const nombreArchivo = "archivo.js";
    const rutaArchivo   = path.join(__dirname, 'firestore.js');
    console.dir(rutaArchivo);
    const archivoStream = bucket.file( nombreArchivo ).createWriteStream();
    archivoStream.end( fs.readFileSync(rutaArchivo) );
    const url = `https://storage.googleapis.com/${bucket.name}/${nombreArchivo}`;
    return {url};
}

async function subirArchivoPOST() {

}