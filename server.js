import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.get('/api/manga', (req, res) => {
  res.json({ message: 'Manga API endpoint' });
});

app.get('/api/chapters/:mangaId', (req, res) => {
  res.json({ message: 'Chapters API endpoint' });
});

app.post('/api/user/login', (req, res) => {
  res.json({ success: true, message: 'Login successful' });
});

app.post('/api/user/bookmark', (req, res) => {
  res.json({ success: true, message: 'Bookmark saved' });
});

// Serve index.html for all routes (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 MangaVault running on http://localhost:${PORT}`);
});
