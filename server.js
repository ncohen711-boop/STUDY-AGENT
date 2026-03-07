const express = require('express');
const cors = require('cors');
const { YoutubeTranscript } = require('youtube-transcript');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());

// Health check
app.get('/', (req, res) => {
    res.json({ status: 'ok', message: 'Study Agent Transcript API is running' });
});

// Transcript endpoint
app.get('/transcript', async (req, res) => {
    const { video_id } = req.query;

    if (!video_id) {
        return res.status(400).json({ error: 'Missing video_id parameter' });
    }

    try {
        const transcriptItems = await YoutubeTranscript.fetchTranscript(video_id);

        if (!transcriptItems || transcriptItems.length === 0) {
            return res.status(404).json({ error: 'No transcript found for this video. It may not have captions.' });
        }

        const transcript = transcriptItems.map(item => item.text).join(' ');
        res.json({ transcript });
    } catch (err) {
        console.error('Transcript fetch error:', err.message);
        res.status(500).json({
            error: 'Failed to fetch transcript. The video may be private, age-restricted, or have no captions.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Study Agent API running on port ${PORT}`);
});
