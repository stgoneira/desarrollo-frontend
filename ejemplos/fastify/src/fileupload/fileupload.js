const { database } = require("firebase-admin");

module.exports = async (req, res) => {
    const data      = await req.file();
    const buffer    = await data.toBuffer();
    return {
        file: data.file,
        //fields: data.fields,
        fieldname: data.fieldname,
        filename: data.filename,
        encoding: data.encoding,
        mime: data.mimetype
    };
};