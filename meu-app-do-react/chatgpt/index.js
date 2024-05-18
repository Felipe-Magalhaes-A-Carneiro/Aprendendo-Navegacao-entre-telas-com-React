const express = require('express');
const axios = require('axios');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            {
                prompt: userMessage,
                max_tokens: 150
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                }
            }
        );

        const chatgptResponse = response.data.choices[0].text.trim();

        const query = 'INSERT INTO conversations (user_message, chatgpt_response) VALUES (?, ?)';
        db.query(query, [userMessage, chatgptResponse], (err, result) => {
            if (err) throw err;
            res.json({ response: chatgptResponse });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error communicating with ChatGPT');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
