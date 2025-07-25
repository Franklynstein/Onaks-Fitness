# νΊ ONAKS FITNESS - DEPLOYMENT FILES

## Quick Deployment for Namecheap

### Files Created:
- `deploy-live.js` - Ready-to-run deployment script
- `DEPLOYMENT-GUIDE.md` - Complete deployment instructions

### Quick Start:

1. **Upload these files to your Namecheap server:**
   - database.js
   - api-server-db.js  
   - deploy-live.js
   - package.json

2. **Install dependencies:**
   ```bash
   npm install sqlite sqlite3 express cors stripe nodemailer dotenv multer
   ```

3. **Set environment variables:**
   ```bash
   export STRIPE_SECRET_KEY="your_stripe_secret_key"
   export NAMECHEAP_EMAIL_PASSWORD="your_email_password"
   export NAMECHEAP_SMTP_HOST="mail.onaksfitness.com"
   ```

4. **Run deployment script:**
   ```bash
   node deploy-live.js
   ```

5. **Start API server:**
   ```bash
   node api-server-db.js
   ```

### What the script does:
β Initializes SQLite database
β Creates 22 product records
β Handles existing products gracefully
β Sets up all product IDs used in your UI

### Expected output:
```
νΊ ONAKS FITNESS - Live Deployment
===============================================
β Database initialized
β transformation-ebook
β male-fat-loss
β male-muscle-building
...
===============================================
νΎ DEPLOYMENT COMPLETE: 22 added, 0 existed
ν²‘ Your database is ready for production!
```

### Verify deployment:
```bash
curl https://yourdomain.com/api/payment-plans
```

**All product IDs from your UI will now work!** νΎ―
