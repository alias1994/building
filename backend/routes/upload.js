import app from '../app.js';
import multer from 'multer';
import * as fs from "fs"

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        var dir = './uploads';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
  });
  
  let upload = multer({storage: storage});

  app.post('/upload', upload.single('file'), (req, res) => {
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
  });

