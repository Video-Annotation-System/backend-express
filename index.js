// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory annotations array
let annotations = [];

// GET /
app.get('/', (req, res) => {
    res.send("Hello world");
});

// GET /api/annotations
app.get('/api/annotations', (req, res) => {
    console.log("received GET to /api/annotations");
    res.json(annotations);
});

// POST /api/annotations
app.post('/api/annotations', (req, res) => {
    const annotation = req.body;
    annotations.push(annotation);
    res.status(201).json({ message: 'Annotation saved' });
});

app.listen(PORT, () => {
    console.log(`Annotation backend server running on http://localhost:${PORT}`);
});
