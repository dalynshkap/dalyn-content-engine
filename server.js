const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Proxy route — keeps your API key server-side, no CORS issues
app.post('/api/generate', async (req, res) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || !apiKey.startsWith('sk-ant-')) {
    return res.status(400).json({ error: 'Invalid or missing API key.' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log('');
  console.log('  🔥 Dalyn Content Engine is LIVE');
  console.log(`  👉 Open this in your browser: http://localhost:${PORT}`);
  console.log('');
  console.log('  Press Ctrl+C to stop the server.');
  console.log('');
});
