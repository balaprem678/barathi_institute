'use client';

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
    return (
        <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <KpiCard title="Total Students" value="1,234" icon={Users} color="text-blue-600" bg="bg-blue-100" />
                <KpiCard title="New Registrations" value="56" icon={UserPlus} color="text-green-600" bg="bg-green-100" />
                <KpiCard title="Pending Approvals" value="12" icon={Activity} color="text-orange-600" bg="bg-orange-100" />
                <KpiCard title="This Month" value="45" icon={Calendar} color="text-purple-600" bg="bg-purple-100" />
            </div>

            {/* Chart Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Registration Analytics</h3>
                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
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
