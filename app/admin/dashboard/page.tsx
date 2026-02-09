'use client';
import { useState, useEffect } from 'react';

import { Users, UserPlus, Calendar, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', students: 40 },
    { name: 'Feb', students: 30 },
    { name: 'Mar', students: 20 },
    { name: 'Apr', students: 27 },
    { name: 'May', students: 18 },
    { name: 'Jun', students: 23 },
    { name: 'Jul', students: 34 },
];

export default function AdminDashboard() {
    const [kpi, setKpi] = useState({
        totalStudents: 0,
        totalEnquiries: 0,
        newStudentsMonth: 0,
        newEnquiriesMonth: 0
    });
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/dashboard/stats');
                if (res.ok) {
                    const data = await res.json();
                    setKpi(data.kpi);
                    setChartData(data.chart);
                }
            } catch (error) {
                console.error('Error loading dashboard stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return <div className="p-6 text-center text-gray-500">Loading dashboard...</div>;
    }

    return (
        <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <KpiCard title="Total Students" value={kpi.totalStudents.toString()} icon={Users} color="text-blue-600" bg="bg-blue-100" />
                <KpiCard title="Total Enquiries" value={kpi.totalEnquiries.toString()} icon={Activity} color="text-orange-600" bg="bg-orange-100" />
                <KpiCard title="New Students (Mo)" value={kpi.newStudentsMonth.toString()} icon={UserPlus} color="text-green-600" bg="bg-green-100" />
                <KpiCard title="New Enquiries (Mo)" value={kpi.newEnquiriesMonth.toString()} icon={Calendar} color="text-purple-600" bg="bg-purple-100" />
            </div>

            {/* Chart Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Student Registration Trend</h3>
                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Area type="monotone" dataKey="students" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.1} strokeWidth={2} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

function KpiCard({ title, value, icon: Icon, color, bg }: { title: string, value: string, icon: any, color: string, bg: string }) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 flex items-center">
            <div className={`p-3 rounded-full ${bg} ${color} mr-4`}>
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
            </div>
        </div>
    );
}
