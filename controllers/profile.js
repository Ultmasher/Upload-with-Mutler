// Set up multer for file upload
const upload = multer({ dest: 'uploads/' });

app.post('/upload-profile-pic', upload.single('profile_pic'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // You can now access the uploaded file via req.file
    console.log('Uploaded: ' + req.file.filename);

    res.status(200).send('File uploaded.');
});

app.listen(3000, () => console.log('Server started on port 3000'));