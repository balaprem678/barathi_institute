const mongoose = require('mongoose');

const landingPageSchema = new mongoose.Schema({
    slug: { type: String, required: true, unique: true }, // e.g., 'hotel-management-course-in-villupuram'
    city: { type: String, required: true }, // e.g., 'Villupuram'
    courseType: { type: String, enum: ['hotel-management', 'paramedical'], required: true },
    seo: {
        focusTitle: String,  // Focus Title
        focusKeywords: String, // Focus Keywords
        metaTitle: String,   // Meta Title
        metaKeywords: String, // Meta Keywords
        metaDescription: String, // Meta Description
    },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.models.LandingPage || mongoose.model('LandingPage', landingPageSchema);
