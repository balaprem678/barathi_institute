import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import ChatbotLead from '@/models/ChatbotLead';
import Settings from '@/models/Settings';

export async function POST(req: Request) {
    try {
        await dbConnect();
        
        const body = await req.json();
        
        // Save the lead to the database
        await ChatbotLead.create(body);

        // Fetch the configured WhatsApp number from Settings
        let settings = await Settings.findOne();
        const whatsappNumber = settings?.general?.whatsappNumber || '';

        return NextResponse.json({ 
            success: true, 
            whatsappNumber 
        });
    } catch (error) {
        console.error('Error saving chatbot lead:', error);
        return NextResponse.json({ message: 'Error saving lead' }, { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        await dbConnect();

        // Basic Auth check (same as other admin APIs)
        const authHeader = req.headers.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const leads = await ChatbotLead.find().sort({ createdAt: -1 });
        return NextResponse.json(leads);
    } catch (error) {
        console.error('Error fetching chatbot leads:', error);
        return NextResponse.json({ message: 'Error fetching leads' }, { status: 500 });
    }
}
