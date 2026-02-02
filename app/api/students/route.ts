import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Student from '@/models/Student';
import { verifyToken } from '@/lib/auth';

export async function GET(req: Request) {
    try {
        await dbConnect();

        // Verification
        const authHeader = req.headers.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'No token provided' }, { status: 403 });
        }

        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);

        if (!decoded) {
            return NextResponse.json({ message: 'Failed to authenticate token' }, { status: 500 });
        }

        // Fetch students
        const students = await Student.find().sort({ createdAt: -1 });
        return NextResponse.json(students);

    } catch (error) {
        return NextResponse.json({ message: 'Error fetching students', error }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();

        const student = new Student(body);
        await student.save();

        return NextResponse.json({ message: 'Registration successful', student }, { status: 201 });

    } catch (error) {
        console.error('Registration Error:', error);
        return NextResponse.json({ message: 'Error registering student', error }, { status: 500 });
    }
}
