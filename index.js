import multer from 'multer';
import express  from 'express';
import profileRouter from './routes/profileRouter';


const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;
const upload = multer({dest:upload});

app.post('/api/images', upload.single('image'), (req, res) => {
    const imageName = req.filename
    const description = req.body.description
    
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // You can now access the uploaded file via req.file
    console.log('Uploaded file', req.file.filename);

    res.status(200).send('File uploaded.');
});

app.listen(port, () => {
    console.log('Server started on port 3000');
});