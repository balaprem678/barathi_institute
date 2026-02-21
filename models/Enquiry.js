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
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    qualification: {
        type: String,
        required: false,
    },
    yearOfPassing: {
        type: String,
        required: false,
    },
    course: {
        type: String,
        required: false,
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
