const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

const token = process.env.GITHUB_TOKEN;

app.get('/api/repos', async (req, res) => {
    const fetch = await import('node-fetch');
    const response = await fetch.default('https://api.github.com/user/repos', {
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    });
    const data = await response.json();
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});