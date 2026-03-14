import mongoose from 'mongoose';

const landingPageSchema = new mongoose.Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String },
    city: { type: String, required: true },
    course: { type: String, required: true },
    imagePath: { type: String },
    htmlContent: { type: String },
    seo: {
        focusKeywords: String,
        metaTitle: String,
        metaKeywords: String,
        metaDescription: String,
    },
    schemaScript: { type: String },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.models.LandingPage || mongoose.model('LandingPage', landingPageSchema);
