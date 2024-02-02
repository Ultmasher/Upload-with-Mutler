import multer from 'multer';
import express from 'express';
import upload from './upload.js';

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/upload');
    },
    filename: function(req, file, cb){
        const fileExt = file.originalname.split('.')();
        const uniquesuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniquesuffix);
    }
});

const upload = multer({storage});

const properFilepath = path.join.replaceAll('\\', '/').replace('public/', '');
const images = '<img width=250 src="${properFilepath}" alt="image" style="width: 100px; height: 100px;">'

const app = express();

app.use(express.static('public'));



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});