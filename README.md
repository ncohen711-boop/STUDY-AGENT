# 🎓 Study Agent

AI-powered study tools: solve questions from photos, write essays, generate quizzes, create presentations, humanize AI text, and generate YouTube video notes.

## Architecture

- **Frontend**: Single `index.html` file (HTML/CSS/JS) — deployed to **GitHub Pages**
- **Backend**: Node.js Express API (`server.js`) — deployed to **Render.com**
- The backend's only job is to fetch YouTube transcripts (to bypass browser CORS restrictions)

---

## 🚀 Deploy Backend to Render.com

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → **New** → **Web Service**
3. Connect your GitHub repo
4. Configure:
   - **Name**: `study-agent-api`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Free
5. Click **Create Web Service**
6. Copy the live URL (e.g. `https://study-agent-api.onrender.com`)
7. Open `index.html` and update the `BACKEND_URL` variable at the top of the `<script>` section:
   ```js
   const BACKEND_URL = 'https://study-agent-api.onrender.com';
   ```

---

## 🌐 Deploy Frontend to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings** → **Pages**
3. Under **Source**, select **main** branch and `/ (root)`
4. Click **Save**
5. Your site will be live at `https://yourusername.github.io/repo-name/`

> **Note**: Make sure to update `BACKEND_URL` in `index.html` with your Render URL before deploying.

---

## 🛠 Run Locally

```bash
# Install dependencies
npm install

# Start the backend server
npm start
# → API runs at http://localhost:3000

# Open index.html in your browser (or use Live Server in VS Code)
```

---

## 📦 API Endpoint

### `GET /transcript?video_id=VIDEO_ID`

Fetches the transcript for a YouTube video.

**Response:**
```json
{
  "transcript": "full transcript text here..."
}
```

**Error Response:**
```json
{
  "error": "Error message"
}
```

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📸 Question Solver | Upload a homework photo → get step-by-step solution |
| ✍️ Essay Writer | Generate essays by topic, type, grade level |
| ❓ Question Maker | Generate interactive quizzes from notes |
| 📊 Slides Creator | Generate slides + download as .PPTX |
| ✏️ Humanizer | Rewrite AI text to sound human |
| 🎥 YouTube Notes | Auto-fetch video transcript → generate study notes |
