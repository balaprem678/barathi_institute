import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Admin from '@/models/Admin';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Use environment variable in production

export async function POST(req: Request) {
    try {
        await dbConnect();
        const { username, password } = await req.json();

        // Check if user exists
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return NextResponse.json(
                { message: 'Invalid username or password' },
                { status: 401 }
            );
        }

        // Check password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return NextResponse.json(
                { message: 'Invalid username or password' },
                { status: 401 }
            );
        }

        // Create token
        const token = jwt.sign(
            { id: admin._id, username: admin.username },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        return NextResponse.json({
            message: 'Login successful',
            token,
            user: { id: admin._id, username: admin.username }
        });

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
