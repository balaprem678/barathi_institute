const mongoose = require('mongoose');

const staticPageSEOSchema = new mongoose.Schema({
    pagePath: { 
        type: String, 
        required: true, 
        unique: true,
        index: true 
    },
    pageName: { 
        type: String, 
        required: true 
    },
    metaTitle: { 
        type: String, 
        default: '' 
    },
    metaDescription: { 
        type: String, 
        default: '' 
    },
    metaKeywords: { 
        type: String, 
        default: '' 
    },
    altText: { 
        type: String, 
        default: '' 
    },
    schemaScript: { 
        type: String, 
        default: '' 
    }
}, { timestamps: true });

module.exports = mongoose.models.StaticPageSEO || mongoose.model('StaticPageSEO', staticPageSEOSchema);
