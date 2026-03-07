const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/transcript', async (req, res) => {
  const videoId = req.query.video_id;
  if (!videoId) return res.status(400).json({ error: 'Missing video_id' });

  try {
    const ytUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const response = await fetch(
      `https://api.supadata.ai/v1/youtube/transcript?url=${encodeURIComponent(ytUrl)}&text=true`,
      { headers: { 'x-api-key': process.env.SUPADATA_KEY } }
    );
    const data = await response.json();
    if (!data.content) throw new Error('No transcript found');
    res.json({ transcript: data.content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/', (req, res) => res.send('Running!'));
app.listen(process.env.PORT || 3000);
