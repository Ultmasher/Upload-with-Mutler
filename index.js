import multer from 'multer';
import express  from 'express';
import profileRouter from './routes/profileRouter';


const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

app.post('/upload-profile-pic', upload.single('profile_pic'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // You can now access the uploaded file via req.file
    console.log('Uploaded file', req.file.filename);

    res.status(200).send('File uploaded.');
});

app.listen(port, () => {
    console.log('Server started on port ${port}');
});