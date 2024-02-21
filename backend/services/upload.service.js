import multer from 'multer';
import {existsSync, mkdirSync} from "fs"

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        var dir = './uploads';
        if (!existsSync(dir)){
            mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
  });
  
let upload = multer({storage: storage});

const uploadFile = (req, res) => {
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
    }
    res.status(200).send({ 
        type: "UPLOAD" ,
        body:{ 
            filename: req.file.filename ,
            mimetype: req.file.mimetype ,
            path: req.file.path 
        }
    });
}

export{
    upload,
    uploadFile
}