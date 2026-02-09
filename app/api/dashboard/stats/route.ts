import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Student from '@/models/Student';
import Enquiry from '@/models/Enquiry';
import { startOfMonth, subMonths, format } from 'date-fns';

export async function GET(req: Request) {
    try {
        await dbConnect();

        // 1. Total Counts
        const totalStudents = await Student.countDocuments();
        const totalEnquiries = await Enquiry.countDocuments();

        // 2. This Month Counts
        const startOfCurrentMonth = startOfMonth(new Date());
        const newStudentsMonth = await Student.countDocuments({
            createdAt: { $gte: startOfCurrentMonth }
        });
        const newEnquiriesMonth = await Enquiry.countDocuments({
            createdAt: { $gte: startOfCurrentMonth }
        });

        // 3. Chart Data (Last 7 Months)
        // We want to group students by month. 
        // Since we can't easily use MongoDB aggregation with just 'createdAt' string formatting in all environments reliably without more complex queries,
        // we will fetch recent students and aggregate in JS for simplicity, or use a basic aggregation if possible.
        // Let's use a simple aggregation.

        const sixMonthsAgo = subMonths(new Date(), 6);

        const studentStats = await Student.aggregate([
            { $match: { createdAt: { $gte: sixMonthsAgo } } },
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        // Transform aggregation to Chart format
        // We need to fill in missing months with 0
        const chartData = [];
        for (let i = 6; i >= 0; i--) {
            const date = subMonths(new Date(), i);
            const monthKey = format(date, 'yyyy-MM');
            const monthLabel = format(date, 'MMM');

            const stat = studentStats.find((s: any) => s._id === monthKey);
            chartData.push({
                name: monthLabel,
                students: stat ? stat.count : 0
            });
        }

        return NextResponse.json({
            kpi: {
                totalStudents,
                totalEnquiries,
                newStudentsMonth,
                newEnquiriesMonth
            },
            chart: chartData
        });

    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        return NextResponse.json({ message: 'Error fetching stats' }, { status: 500 });
    }
}
