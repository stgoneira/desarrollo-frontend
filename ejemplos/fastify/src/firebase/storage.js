const { async } = require('@firebase/util');
const { admin } = require('../../include/firebase.js');
const fs        = require('fs');
const path      = require('path');

const bucket = admin.storage().bucket();

module.exports = async (req, res) => {
    switch( req.method ) {
        case "GET":
            return subirArchivoSistema();
        case "POST":
            return subirArchivoPOST(req, res);
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

async function subirArchivoPOST(req, res) {    
    const data      = await req.file();
    const buffer    = await data.toBuffer();
    const nombreArchivo = data.filename;
    const file      = bucket.file(nombreArchivo);
    await file.save(buffer);
    
    const urlConfig = {
        action: 'read',
        expires: '2025-01-01'
    };
    const url = await file.getSignedUrl(urlConfig);
    //const url = `https://storage.googleapis.com/${bucket.name}/${nombreArchivo}`;

    return {url};
}