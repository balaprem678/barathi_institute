const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title'],
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'Please provide a slug'],
        unique: true,
        trim: true
    },
    content: {
        type: String,
        required: [true, 'Please provide blog content']
    },
    imagePath: {
        type: String,
        default: ''
    },
    course: {
        type: String,
        default: ''
    },
    studentName: {
        type: String,
        default: ''
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    seo: {
        metaTitle: String,
        metaDescription: String,
        metaKeywords: String,
        focusKeywords: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
