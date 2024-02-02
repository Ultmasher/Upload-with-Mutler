import multer from 'multer';
import express  from 'express';
import profileRouter from './routes/profileRouter';


const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

// Set up multer for file upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.post('/upload-profile-pic', upload.single('profile_pic'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // You can now access the uploaded file via req.file
    console.log(req.file);

    res.status(200).send('File uploaded.');
});

app.listen(3000, () => console.log('Server started on port 3000'));