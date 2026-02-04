'use client';
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Calendar, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        dailyCount: 0,
        monthlyCount: 0,
        yearlyCount: 0,
        chartData: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                window.location.href = '/admin/login';
                return;
            }

            try {
                const res = await fetch('/api/admin/stats', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    setStats(data);
                }
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    if (loading) return <div className="p-8 text-center text-gray-500">Loading dashboard...</div>;

    const Card = ({ title, value, icon: Icon, colorClass }: any) => (
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default">
            <div className={`flex h-11.5 w-11.5 items-center justify-center rounded-full bg-opacity-10 ${colorClass} mb-4`}>
                <Icon size={24} className={colorClass.replace('bg-', 'text-').replace('bg-opacity-10', '')} />
            </div>
            <div className="flex items-end justify-between">
                <div>
                    <h4 className="text-2xl font-bold text-black">
                        {value}
                    </h4>
                    <span className="text-sm font-medium text-gray-500">{title}</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:gap-7.5">
            <Card
                title="Daily Registrations"
                value={stats.dailyCount}
                icon={Users}
                colorClass="bg-blue-500 text-blue-500"
            />
            <Card
                title="Monthly Registrations"
                value={stats.monthlyCount}
                icon={Calendar}
                colorClass="bg-green-500 text-green-500"
            />
            <Card
                title="Yearly Registrations"
                value={stats.yearlyCount}
                icon={TrendingUp}
                colorClass="bg-purple-500 text-purple-500"
            />

            <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5 lg:col-span-12 mt-4">
                <div className="mb-4 justify-between gap-4 sm:flex">
                    <div>
                        <h4 className="text-xl font-bold text-black">
                            Registration Analytics
                        </h4>
                    </div>
                </div>

                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={stats.chartData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                            <XAxis
                                dataKey="day"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748B' }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748B' }}
                            />
                            <Tooltip
                                cursor={{ fill: '#F1F5F9' }}
                                contentStyle={{ borderRadius: '4px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Bar
                                dataKey="count"
                                fill="#3C50E0"
                                radius={[4, 4, 0, 0]}
                                barSize={20}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
