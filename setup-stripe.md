# Complete Setup Guide: Stripe Payment + Namecheap Email Integration

This guide will help you set up the complete payment and email system for your Onaks Fitness website.

## 🔧 Environment Variables Setup

Create a `.env` file in your project root with these variables:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_live_your_live_secret_key_here
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_publishable_key_here

# Namecheap Email Configuration  
NAMECHEAP_EMAIL_PASSWORD=your_noreply_email_password_here
NAMECHEAP_SMTP_HOST=mail.onaksfitness.com

# Optional: Email settings
FROM_EMAIL=noreply@onaksfitness.com
```

## 📧 Namecheap Email Setup

### Step 1: Create the Email Account

1. **Log into your Namecheap hosting cPanel**
2. **Find "Email Accounts" section**
3. **Create new email**: `noreply@onaksfitness.com`
4. **Set a strong password** (save this for NAMECHEAP_EMAIL_PASSWORD)

### Step 2: Find Your SMTP Host

Your SMTP host depends on your hosting server. You can find it:

**Method 1: Check your welcome email**
- Look for "Account Information" section
- Find the server name (e.g., `server123.web-hosting.com`)

**Method 2: From cPanel**
- Go to cPanel → Email Accounts
- Click "Connect Devices" next to your email
- Copy the "Incoming/Outgoing Server" name

**Method 3: Common formats**
- `mail.onaksfitness.com` (most common)
- `mail.yourserver.com`
- `server123.web-hosting.com`

### Step 3: Update Environment Variables

```bash
# Replace with your actual values
NAMECHEAP_EMAIL_PASSWORD=your_actual_password_here
NAMECHEAP_SMTP_HOST=your_actual_server_here
```

### Step 4: Test Email Configuration

Run the test script to verify your setup:

```bash
node test-mailchimp.js
```

Expected output:
```
✅ Email sent successfully!
Message ID: <some-message-id>
Response: 250 2.0.0 Ok: queued
```

## 💳 Stripe Configuration

### Step 1: Get Your Stripe Keys

1. **Log into Stripe Dashboard**
2. **Go to Developers → API Keys**
3. **Copy your keys:**
   - **Secret key** (sk_live_... for production)
   - **Publishable key** (pk_live_... for production)

### Step 2: Update Environment Variables

```bash
STRIPE_SECRET_KEY=sk_live_your_actual_secret_key
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_actual_publishable_key
```

## 🚀 Running the Application

### Start Both Servers

```bash
# Install dependencies (if not done)
npm install

# Start both Vite dev server and API server
npm run dev
```

This will start:
- **Vite dev server** on `http://localhost:5173`
- **API server** on `http://localhost:3001`

## 🧪 Testing the Complete Flow

### Test Individual Components

1. **Test Email**:
   ```bash
   node test-mailchimp.js
   ```

2. **Test Stripe (in browser)**:
   - Go to your website
   - Try purchasing a program
   - Use test card: `4242 4242 4242 4242`

### Test Complete Purchase Flow

1. **Navigate to your programs page**
2. **Click "Buy Now" on any program**
3. **Complete payment with test card**
4. **Check that:**
   - Payment succeeds
   - Redirects to success page
   - Email is sent to customer

## 🔍 Troubleshooting

### Email Issues

**"Authentication failed" error:**
```bash
# Check your credentials
echo $NAMECHEAP_EMAIL_PASSWORD
echo $NAMECHEAP_SMTP_HOST
```

**"Connection refused" error:**
- Verify your SMTP host is correct
- Try different ports (465 for SSL, 587 for TLS)
- Check if hosting provider blocks certain ports

**"Domain not verified" error:**
- Make sure `noreply@onaksfitness.com` email exists in cPanel
- Try using your main domain email instead

### Stripe Issues

**"Invalid API key" error:**
- Check you're using the correct environment (live vs test)
- Verify the key format (sk_live_... or sk_test_...)

**Payment fails:**
- Check webhook endpoints in Stripe Dashboard
- Verify product IDs match between frontend and backend

## 📋 Environment Variables Checklist

- [ ] `STRIPE_SECRET_KEY` (starts with sk_live_ or sk_test_)
- [ ] `VITE_STRIPE_PUBLISHABLE_KEY` (starts with pk_live_ or pk_test_)
- [ ] `NAMECHEAP_EMAIL_PASSWORD` (password for noreply@onaksfitness.com)
- [ ] `NAMECHEAP_SMTP_HOST` (your hosting server name)

## 🎯 Production Deployment

### Before Going Live

1. **Switch to Live Stripe Keys**
2. **Test with real email addresses**
3. **Verify all environment variables are set**
4. **Test complete purchase flow**

### On Netlify

1. **Add environment variables in Netlify Dashboard**
2. **Deploy your site**
3. **Update success/cancel URLs in Stripe**

## 📞 Support

If you encounter issues:

1. **Check the console logs** for detailed error messages
2. **Verify all environment variables** are set correctly
3. **Test components individually** before testing the full flow
4. **Check Stripe Dashboard** for payment logs
5. **Check email logs** in cPanel for delivery status

---

**Your payment system is now configured with:**
- ✅ Stripe payment processing
- ✅ Namecheap email notifications  
- ✅ Professional email templates
- ✅ Automatic purchase confirmations 