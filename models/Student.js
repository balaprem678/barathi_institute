const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String },
    address: { type: String },
    location: { type: String },
    dob: { type: Date },
    qualification: { type: String },
    yearOfPassing: { type: String },
    message: { type: String },
    markSheetPath: { type: String }, // Path to uploaded file
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Student || mongoose.model('Student', studentSchema);
