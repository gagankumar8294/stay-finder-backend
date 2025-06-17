import multer from "multer";
import path from "path";
import fs from "fs";

const uploadFolder = './uploads/'; // ✅ Corrected

if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadFolder); // ✅ Now matches the declared variable
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '_') + '-' + file.originalname);
    }
});

export const upload = multer({
    storage: storage
});
