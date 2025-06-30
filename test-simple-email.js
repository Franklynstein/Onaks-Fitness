import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function testSimpleEmail() {
  console.log('🚀 Testing Simple Email (Anti-Spam)...\n');
  
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

  // Very simple email to avoid spam filters
  const testEmail = {
    from: 'noreply@onaksfitness.com',  // Simple from address
    to: 'toluiwal@gmail.com',
    subject: 'Test Message',  // Simple subject
    text: 'Hello! This is a test message from your website. If you see this, email is working.',
    html: `
    <html>
    <body>
      <h2>Hello!</h2>
      <p>This is a test message from your website.</p>
      <p>If you see this, email is working.</p>
      <p>Time: ${new Date().toLocaleString()}</p>
    </body>
    </html>`
  };

  try {
    console.log('📧 Sending simple test email...\n');
    
    const info = await transporter.sendMail(testEmail);
    
    console.log('✅ Simple email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    console.log('\n📍 CHECK YOUR EMAIL NOW:');
    console.log('- Inbox');
    console.log('- SPAM folder (most likely)');
    console.log('- All Mail');
    console.log('- Search for "Test Message"');
    
  } catch (error) {
    console.error('❌ Email sending failed:');
    console.error('Error:', error.message);
  }
}

// Run the test
testSimpleEmail(); 