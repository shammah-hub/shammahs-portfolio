// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: { json: () => any; }) {
  try {
    const body = await request.json();
    const { name, email, subject, message, recipient, siteOrigin } = body;
    
    // Basic validation
    if (!name || !email || !message || !recipient) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !emailRegex.test(recipient)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: recipient,
      replyTo: email,
      subject: subject || `New contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        This message was sent from ${siteOrigin}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p style="margin-bottom: 15px;"><strong>From:</strong> ${name}</p>
          <p style="margin-bottom: 15px;"><strong>Email:</strong> ${email}</p>
          <p style="margin-bottom: 15px;"><strong>Subject:</strong> ${subject || 'No subject'}</p>
          <div style="margin-bottom: 20px;">
            <strong>Message:</strong>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="font-size: 12px; color: #777;">This message was sent from ${siteOrigin}</p>
        </div>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    // Return success response
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}n