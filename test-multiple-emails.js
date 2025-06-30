import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function testMultipleEmails() {
  console.log('🚀 Testing Email Delivery to Multiple Addresses...\n');
  
  // Create Namecheap SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.NAMECHEAP_SMTP_HOST || 'mail.onaksfitness.com',
    port: 465,
    secure: true,
    auth: {
      user: 'noreply@onaksfitness.com',
      pass: process.env.NAMECHEAP_EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Test different email addresses
  const testEmails = [
    'toluiwal@gmail.com',        // Your Gmail
    'onaksfitness@gmail.com',    // Your business Gmail (if it exists)
    // Add more test addresses if you have them
  ];

  const timestamp = new Date().toLocaleString();

  for (const email of testEmails) {
    console.log(`📧 Sending to: ${email}`);
    
    try {
      const testEmail = {
        from: '"Onaks Fitness" <noreply@onaksfitness.com>',
        to: email,
        subject: `🔥 Deliverability Test - ${timestamp}`,
        text: `
🔥 ONAKS FITNESS - Deliverability Test

Time: ${timestamp}
To: ${email}

This is a deliverability test email.

If you receive this, email delivery is working!

Check your:
- Inbox
- Spam folder
- All Mail
- Promotions tab (Gmail)

Best regards,
The Onaks Fitness Team
`,
        html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Deliverability Test</title>
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white; border-radius: 8px;">
        <h1 style="margin: 0;">🔥 ONAKS FITNESS</h1>
        <p style="margin: 10px 0 0 0;">Deliverability Test</p>
    </div>
    
    <div style="padding: 30px; background-color: white; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #333;">Deliverability Test ✉️</h2>
        
        <p style="color: #666; line-height: 1.6;">
            <strong>Time:</strong> ${timestamp}<br>
            <strong>To:</strong> ${email}
        </p>
        
        <p style="color: #666; line-height: 1.6;">
            This is a deliverability test email. If you receive this, email delivery is working! 🎉
        </p>
        
        <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
            <h3 style="color: #333; margin: 0 0 10px 0;">📍 Check These Locations:</h3>
            <ul style="color: #666; margin: 0; padding-left: 20px;">
                <li>Inbox</li>
                <li>Spam/Junk folder</li>
                <li>All Mail</li>
                <li>Promotions tab (Gmail)</li>
            </ul>
        </div>
        
        <p style="color: #666; margin-top: 30px;">
            Best regards,<br>
            <strong>The Onaks Fitness Team</strong>
        </p>
    </div>
    
    <div style="background-color: #333; color: #999; padding: 20px; text-align: center; font-size: 12px; border-radius: 8px;">
        © 2024 Onaks Fitness. All rights reserved.<br>
        <a href="https://onaksfitness.com" style="color: #667eea;">onaksfitness.com</a>
    </div>
</body>
</html>`
      };

      const info = await transporter.sendMail(testEmail);
      console.log(`   ✅ Sent! Message ID: ${info.messageId}`);
      console.log(`   📨 Response: ${info.response}\n`);
      
      // Wait 2 seconds between emails
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (error) {
      console.error(`   ❌ Failed to send to ${email}:`);
      console.error(`   Error: ${error.message}\n`);
    }
  }

  console.log('🏁 Test completed!');
  console.log('\n📋 Next Steps:');
  console.log('1. Check all your email folders (Inbox, Spam, All Mail)');
  console.log('2. Wait 5-10 minutes for delivery');
  console.log('3. Try searching for "Onaks Fitness" in your email');
  console.log('4. Check Gmail Promotions tab if using Gmail');
}

// Run the test
testMultipleEmails(); 