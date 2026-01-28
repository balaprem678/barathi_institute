const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const dotenv = require('dotenv');

dotenv.config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bharathi_institutes', {});

        const adminExists = await Admin.findOne({ username: 'admin' });
        if (adminExists) {
            console.log('Admin already exists');
        } else {
            const admin = new Admin({ username: 'admin', password: 'password123' });
            await admin.save();
            console.log('Admin created: username=admin, password=password123');
        }
    } catch (error) {
        console.error('Error seeding admin:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedAdmin();
