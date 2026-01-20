import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: 'Contact form submitted' });
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
