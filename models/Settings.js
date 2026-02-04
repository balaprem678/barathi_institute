const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    smtpHost: { type: String, default: '' },
    smtpPort: { type: String, default: '587' },
    smtpUser: { type: String, default: '' },
    smtpPass: { type: String, default: '' }, // In production, this should be encrypted
    recipientEmails: { type: String, default: '' } // Comma separated emails
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
