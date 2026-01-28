const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bharathi_institutes', {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.prepare().then(() => {
    const server = express();

    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use('/uploads', express.static(require('path').join(__dirname, 'public/uploads')));

    // API Routes
    server.use('/api/auth', require('./routes/auth'));
    server.use('/api/students', require('./routes/students'));

    // Default handler for Next.js
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
