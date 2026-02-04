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
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }
        // Verify token (optional strictly here if middleware handles it, but good practice)
        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);
        if (!decoded) return NextResponse.json({ message: 'Invalid Token' }, { status: 403 });


        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const startOfYear = new Date(now.getFullYear(), 0, 1);

        // Counts
        const dailyCount = await Student.countDocuments({ createdAt: { $gte: startOfDay } });
        const monthlyCount = await Student.countDocuments({ createdAt: { $gte: startOfMonth } });
        const yearlyCount = await Student.countDocuments({ createdAt: { $gte: startOfYear } });

        // Chart Data (Last 7 Days or This Month)
        // Let's do daily counts for the current month for the chart
        const students = await Student.find({ createdAt: { $gte: startOfMonth } }).select('createdAt');

        // Group by day key (e.g., "1", "2")
        const dayMap: { [key: number]: number } = {};
        students.forEach(s => {
            const day = new Date(s.createdAt).getDate();
            dayMap[day] = (dayMap[day] || 0) + 1;
        });

        const chartData = [];
        const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

        for (let i = 1; i <= daysInMonth; i++) {
            // Only show up to today to avoid empty future space visual unless usually desired
            if (i <= now.getDate()) {
                chartData.push({
                    day: i.toString(),
                    count: dayMap[i] || 0
                });
            }
        }

        return NextResponse.json({
            dailyCount,
            monthlyCount,
            yearlyCount,
            chartData
        });

    } catch (error) {
        console.error('Stats Error:', error);
        return NextResponse.json({ message: 'Error fetching stats' }, { status: 500 });
    }
}
