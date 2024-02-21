import app from '../app.js';
import { upload, uploadFile } from '../services/upload.service.js';

app.post('/upload', upload.single('file'), uploadFile);

