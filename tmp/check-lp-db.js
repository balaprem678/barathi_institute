const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

async function checkDB() {
    const MONGO_URI = process.env.MONGODB_URI ||
        process.env.DATABASE_URL ||
        'mongodb+srv://balaprem:Bharathi@bharathi.398v8.mongodb.net/test';

    console.log('Using URI:', MONGO_URI.replace(/:([^@]+)@/, ':****@'));

    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to DB');

        const landingPageSchema = new mongoose.Schema({
            slug: String,
            city: String,
            course: String,
            imagePath: String,
            isActive: Boolean
        });

        const LandingPage = mongoose.models.LandingPage || mongoose.model('LandingPage', landingPageSchema);

        const pages = await LandingPage.find({}).lean();
        console.log('--- Landing Pages in DB ---');
        pages.forEach(p => {
            console.log(`Slug: ${p.slug}, City: ${p.city}, Course: ${p.course}, ImagePath: ${p.imagePath}, Active: ${p.isActive}`);
        });

        console.log('--- End of records ---');

        const uploadDir = path.resolve(process.cwd(), 'public/uploads/landing-pages');
        console.log('Checking directory:', uploadDir);
        if (fs.existsSync(uploadDir)) {
            const files = fs.readdirSync(uploadDir);
            console.log(`Files in ${uploadDir}:`, files);
        } else {
            console.log(`Directory ${uploadDir} does not exist`);
        }

        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

checkDB();
