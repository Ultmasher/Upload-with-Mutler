app.post('/upload-profile-pic', upload.single('profile_pic'), (req, res) => {
    console.log(req.file);
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const properFilepath = req.file.path.replaceAll('\\', '/').replace('public/', '');
    res.send(`<div> 
        <img width= 250 alt="" src="${req.file.path}" />
        </div>`);

    res.status(200).send('File uploaded.');
});

const ALLOWED_EXT = ['image/jpeg', 'image/png', 'image/gif', 'webp'];
const fileFilter = (file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}