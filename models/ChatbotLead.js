import mongoose from 'mongoose';

const ChatbotLeadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: false,
    },
    courseType: {
        type: String,
        required: false,
    },
    course: {
        type: String,
        required: false,
    },
    branch: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.ChatbotLead || mongoose.model('ChatbotLead', ChatbotLeadSchema);
