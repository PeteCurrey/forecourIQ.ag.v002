import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real implementation, this would send an email via Postmark/SendGrid
    // and/or save to a CRM like HubSpot/Salesforce.
    console.log('--- NEW DEMO REQUEST ---');
    console.log('Date:', new Date().toISOString());
    console.log('Payload:', JSON.stringify(data, null, 2));
    console.log('------------------------');

    return NextResponse.json({ 
      success: true, 
      message: "Demonstration request received successfully." 
    }, { status: 200 });
  } catch (error) {
    console.error('Demo API Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: "Internal server error." 
    }, { status: 500 });
  }
}
