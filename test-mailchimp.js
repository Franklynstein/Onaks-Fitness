import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function testNamecheapSMTP() {
  console.log('🚀 Starting Namecheap SMTP Test...\n');
  
  console.log('🔍 Testing Namecheap SMTP Configuration...\n');
  
  // Environment check
  console.log('Environment Check:');
  console.log('NAMECHEAP_EMAIL_PASSWORD:', !!process.env.NAMECHEAP_EMAIL_PASSWORD ? '✅ Set' : '❌ Missing');
  console.log('NAMECHEAP_SMTP_HOST:', !!process.env.NAMECHEAP_SMTP_HOST ? '✅ Set' : '❌ Missing');
  console.log('');
  
  // Create Namecheap SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.NAMECHEAP_SMTP_HOST || 'mail.onaksfitness.com', // Replace with your actual hosting server
    port: 465,
    secure: true, // true for SSL
    auth: {
      user: 'noreply@onaksfitness.com',
      pass: process.env.NAMECHEAP_EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false // Sometimes needed for shared hosting
    }
  });

  // Test email data
  const testEmail = {
    from: '"Onaks Fitness" <noreply@onaksfitness.com>',
    to: 'toluiwal@gmail.com', // Test email
    subject: '🔥 Test Email - Your Weight Loss Program is Here!',
    text: `
🔥 ONAKS FITNESS - Test Email

Hey there!

This is a test email to verify that Namecheap SMTP is working correctly.

If you're reading this, the email configuration is successful! 💪

Best regards,
The Onaks Fitness Team

© 2024 Onaks Fitness. All rights reserved.
Visit us at https://onaksfitness.com
`,
    html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Test Email - Onaks Fitness</title>
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
        <h1 style="margin: 0;">🔥 ONAKS FITNESS</h1>
        <p style="margin: 10px 0 0 0;">Test Email</p>
    </div>
    
    <div style="padding: 30px; background-color: #f9f9f9;">
        <h2 style="color: #333;">Hey there!</h2>
        
        <p style="color: #666; line-height: 1.6;">
            This is a test email to verify that <strong>Namecheap SMTP</strong> is working correctly.
        </p>
        
        <p style="color: #666; line-height: 1.6;">
            If you're reading this, the email configuration is successful! 💪
        </p>
        
        <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #333; margin: 0; text-align: center;">
                <strong>✅ Namecheap SMTP Test Successful!</strong>
            </p>
        </div>
        
        <p style="color: #666; margin-top: 30px;">
            Best regards,<br>
            <strong>The Onaks Fitness Team</strong>
        </p>
    </div>
    
    <div style="background-color: #333; color: #999; padding: 20px; text-align: center; font-size: 12px;">
        © 2024 Onaks Fitness. All rights reserved.<br>
        Visit us at <a href="https://onaksfitness.com" style="color: #667eea;">onaksfitness.com</a>
    </div>
</body>
</html>`
  };

  try {
    console.log('📧 Sending test email...\n');
    
    const info = await transporter.sendMail(testEmail);
    
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    
  } catch (error) {
    console.error('❌ Email sending failed:');
    console.error('Error:', error.message);
    
    if (error.code) {
      console.error('Error Code:', error.code);
    }
    
    if (error.response) {
      console.error('Server Response:', error.response);
    }
  }
}

// Run the test
testNamecheapSMTP(); 