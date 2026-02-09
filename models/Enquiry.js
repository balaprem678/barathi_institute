import mongoose from 'mongoose';

const EnquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    alternatePhone: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    yearOfPassing: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: false, // Optional
    },
    message: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);
