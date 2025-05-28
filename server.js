import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT= 4200;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});