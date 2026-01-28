const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Verify Token Middleware
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'No token provided' });

    // Bearer <token>
    const bearer = token.split(' ');
    const tokenVal = bearer.length === 2 ? bearer[1] : token;

    const jwt = require('jsonwebtoken');
    jwt.verify(tokenVal, process.env.JWT_SECRET || 'secretkey', (err, decoded) => {
        if (err) return res.status(500).json({ message: 'Failed to authenticate token' });
        req.userId = decoded.id;
        next();
    });
};

// Multer Setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../public/uploads');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Create Student (Public Registration)
router.post('/', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({ message: 'Registration successful', student });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering student' });
    }
});

// Get All Students (Admin Protected)
router.get('/', verifyToken, async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students' });
    }
});

// Upload Mark Sheet (Admin Protected)
router.post('/:id/upload-marks', verifyToken, upload.single('markSheet'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

        // Relative path for frontend access
        const filePath = '/uploads/' + req.file.filename;

        const student = await Student.findByIdAndUpdate(req.params.id, { markSheetPath: filePath }, { new: true });
        if (!student) return res.status(404).json({ message: 'Student not found' });

        res.json({ message: 'File uploaded successfully', student });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error uploading file' });
    }
});

module.exports = router;
