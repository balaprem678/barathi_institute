const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    smtpHost: { type: String, default: '' },
    smtpPort: { type: String, default: '587' },
    smtpUser: { type: String, default: '' },
    smtpPass: { type: String, default: '' }, // In production, this should be encrypted
    recipientEmails: { type: String, default: '' }, // Comma separated emails
    seo: {
        title: { type: String, default: '' },
        description: { type: String, default: '' },
        keywords: { type: String, default: '' },
        ogTitle: { type: String, default: '' },
        ogDescription: { type: String, default: '' },
    },
    general: {
        siteName: { type: String, default: 'Bharathi Institute' },
    }
}, { timestamps: true });

// Ensure only one settings document exists
settingsSchema.statics.getSettings = async function () {
    let settings = await this.findOne();
    if (!settings) {
        settings = await this.create({});
    }
    return settings;
};

module.exports = mongoose.models.Settings || mongoose.model('Settings', settingsSchema);
