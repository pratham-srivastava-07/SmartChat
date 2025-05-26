const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./db');
const { default: fetch } = require('node-fetch');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    await pool.execute('INSERT INTO messages (sender, content) VALUES (?, ?)', ['user', message]);

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          { role: 'system', content: 'You are a helpful AI journal assistant.' },
          { role: 'user', content: message }
        ]
      })
    });

    const data = await response.json();
    const aiReply = data.choices[0].message.content;

    await pool.execute('INSERT INTO messages (sender, content) VALUES (?, ?)', ['ai', aiReply]);

    res.json({ reply: aiReply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process chat' });
  }
});

app.get('/messages', async (req, res) => {
  const [rows] = await pool.execute('SELECT * FROM messages ORDER BY timestamp ASC');
  res.json(rows);
});

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));
