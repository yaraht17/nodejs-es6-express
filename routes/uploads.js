import express from 'express';
import multer from 'multer';
import { uploadFile, removeFile } from '../controllers/files';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const fileNames = file.originalname.split('.');
    let filename = '';
    for (let i = 0; i < fileNames.length - 1; i++) {
      filename = `${filename + fileNames[i]}.`;
    }
    filename = `${filename}-${Date.now()}.${fileNames[fileNames.length - 1]}`;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

const isVerifiedToken = (req, res, next) => {
  return next();
};

const router = express.Router();
router.post('/files', isVerifiedToken, upload.single('file'), uploadFile);
router.delete('/files', isVerifiedToken, removeFile);
export default router;
