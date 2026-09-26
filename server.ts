import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Ensure public directory exists
const publicDir = path.resolve(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// API endpoint to save uploaded photo directly to public/
app.post('/api/upload-photo', (req, res) => {
  try {
    const { imageBase64, filename } = req.body;
    if (!imageBase64) {
      return res.status(400).json({ error: 'No image data provided' });
    }

    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const targetName = filename || 'henil-photo.png';
    const publicPath = path.join(publicDir, targetName);
    fs.writeFileSync(publicPath, buffer);

    const distDir = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distDir)) {
      fs.writeFileSync(path.join(distDir, targetName), buffer);
    }

    return res.json({ success: true, url: `/${targetName}` });
  } catch (err: any) {
    console.error('Error saving image:', err);
    return res.status(500).json({ error: err.message });
  }
});

// Serve public files statically
app.use(express.static(publicDir));

// Vite middleware in dev mode
if (process.env.NODE_ENV !== 'production') {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
