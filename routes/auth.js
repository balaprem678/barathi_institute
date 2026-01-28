const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');

// Admin Login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'secretkey', { expiresIn: '1d' });
        res.json({ token, user: { username: admin.username } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create Admin (One-time use or protected)
router.post('/create', async (req, res) => {
    try {
        const { username, password } = req.body;
        // Check if any admin exists to prevent public creation of multiple admins
        const count = await Admin.countDocuments();
        if (count > 0) {
            // Optional: Allow multiple admins but maybe require auth? 
            // For now, let's keep it simple: allow creating if you have a secret key in header or just open for initial setup
        }

        const existing = await Admin.findOne({ username });
        if (existing) return res.status(400).json({ message: 'Admin already exists' });

        const admin = new Admin({ username, password });
        await admin.save();
        res.status(201).json({ message: 'Admin created' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
