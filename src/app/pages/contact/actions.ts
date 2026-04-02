'use server';

import { Resend } from 'resend';

// 1. Initialize Resend safely - It won't crash even if the key is missing
const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey && apiKey !== 're_placeholder_123' ? new Resend(apiKey) : null;

export async function sendContactEmail(prevState: any, formData: FormData) {
  // 1. Basic Honeypot Check (Spam Protection)
  const botField = formData.get('bot_field');
  if (botField) {
    // If the hidden field is filled, it's likely a bot. 
    // We return a fake success to avoid giving bots feedback.
    return { success: true, message: "Thank you for your message, we will respond in a few hours" };
  }

  // 2. Extract and Validate Form Data
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  try {
    // 3. Send the Email via Resend
    // If we have a valid Resend client, use it. Otherwise, we're in Simulation Mode.
    if (resend) {
      await resend.emails.send({
        from: 'CareBraids Contact <contact@carebraids.com>', // Professional company domain
        to: ['support@carebraids.com'],
        subject: `New Contact Form: ${subject || 'General Inquiry'}`,
        replyTo: email,
        html: `
          <div style="font-family: serif; color: #601438; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #fdf4ff;">
            <h1 style="border-bottom: 1px solid #601438; padding-bottom: 10px;">New Message from ${name}</h1>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
            <div style="background: #fff5f7; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <footer style="margin-top: 30px; font-size: 12px; color: #888;">
              Sent via CareBraids Website Contact Form
            </footer>
          </div>
        `,
      });
    } else {
      // Simulation mode logging (Only visible to developers in the terminal)
      console.log('--- EMAIL SIMULATION ---');
      console.log(`To: support@carebraids.com`);
      console.log(`From: ${name} (${email})`);
      console.log(`Message: ${message}`);
      console.log('--- END SIMULATION ---');
    }

    return { 
      success: true, 
      message: "Thank you for your message, we will respond in a few hours" 
    };
  } catch (error) {
    console.error('Email Error:', error);
    return { 
      success: false, 
      message: "Something went wrong. Please try again later or email us directly." 
    };
  }
}
