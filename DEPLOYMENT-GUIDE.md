# Ì∫Ä ONAKS FITNESS - LIVE DEPLOYMENT GUIDE

## Ì≥ã Pre-Deployment Checklist

### Files to Upload to Namecheap:
1. `database.js` - Database configuration and functions
2. `api-server-db.js` - API server with database integration  
3. `package.json` - Dependencies list
4. `deploy-populate-products.js` - Database population script (see below)
5. Frontend build files (from `npm run build`)

### Environment Variables Required:
```bash
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NAMECHEAP_EMAIL_PASSWORD=your_email_password
NAMECHEAP_SMTP_HOST=mail.onaksfitness.com
```

## Ìª†Ô∏è Deployment Steps

### 1. Install Dependencies
```bash
npm install sqlite sqlite3 express cors stripe nodemailer dotenv multer
```

### 2. Run Database Population Script
Create and run this script on your live server:

```javascript
// save as: deploy-populate-products.js
import { initializeDatabase, createPaymentPlan } from './database.js';

const products = [
  // Core Products
  { id: 'transformation-ebook', title: 'Complete Transformation Guide', price: 999, category: 'guide' },
  { id: 'male-fat-loss', title: 'Male Fat Loss Program', price: 1499, category: 'male' },
  { id: 'male-muscle-building', title: 'Male Muscle Building Program', price: 1499, category: 'male' },
  { id: 'male-body-recomposition', title: 'Male Body Recomposition Program', price: 1499, category: 'male' },
  { id: 'female-fat-loss', title: 'Female Fat Loss Program', price: 1499, category: 'female' },
  { id: 'female-muscle-building', title: 'Female Muscle Building Program', price: 1499, category: 'female' },
  { id: 'female-body-composition', title: 'Female Body Composition Program', price: 1499, category: 'female' },
  { id: 'glute-max', title: 'Glute Max Program', price: 2999, category: 'specialty' },
  
  // Weight Loss Programs
  { id: 'weight-loss-mid', title: 'Mid Weight Loss Grocery Lists', price: 1499, category: 'weight-loss' },
  { id: 'weight-loss-standard', title: 'Standard Weight Loss Grocery Lists', price: 1499, category: 'weight-loss' },
  { id: 'weight-loss-accelerated', title: 'Accelerated Weight Loss Grocery Lists', price: 1499, category: 'weight-loss' },
  
  // Bulking Programs
  { id: 'lean-bulk', title: 'Lean Bulk Grocery Lists', price: 1499, category: 'bulking' },
  { id: 'standard-bulk', title: 'Standard Bulk Grocery Lists', price: 1499, category: 'bulking' },
  
  // Vegan Programs
  { id: 'vegan-mid', title: 'Vegan Mid Weight Loss', price: 1499, category: 'vegan' },
  { id: 'vegan-standard', title: 'Vegan Standard Weight Loss', price: 1499, category: 'vegan' },
  { id: 'vegan-accelerated', title: 'Vegan Accelerated Weight Loss', price: 1499, category: 'vegan' },
  { id: 'vegan-lean-bulk', title: 'Vegan Lean Bulk Program', price: 1499, category: 'vegan' },
  { id: 'vegan-standard-bulk', title: 'Vegan Standard Bulk Program', price: 1499, category: 'vegan' },
  
  // Combo Programs
  { id: 'weight-loss-combo-grocery-lists', title: 'Weight Loss Combo - Grocery Lists', price: 1499, category: 'combo' },
  { id: 'weight-loss-combo-training-program', title: 'Weight Loss Combo - Training Program', price: 1499, category: 'combo' },
  { id: 'lean-bulking-grocery-lists', title: 'Lean Bulking Grocery Lists', price: 1499, category: 'combo' },
  { id: 'muscle-bulking-training-program', title: 'Muscle Bulking Training Program', price: 1499, category: 'combo' }
];

async function deploy() {
  console.log('Ì∫Ä Deploying products...');
  await initializeDatabase();
  
  for (const product of products) {
    const fullProduct = {
      ...product,
      description: `Complete ${product.title.toLowerCase()} program`,
      currency: 'usd',
      is_active: 1,
      download_file_path: `/pdfs/${product.id}.pdf`,
      download_url: `https://onaksfitness.com/pdfs/${product.id}.pdf`,
      email_subject: `Ì¥• Your ${product.title} is Ready!`,
      email_message: `Thank you for purchasing the ${product.title}!`
    };
    
    try {
      await createPaymentPlan(fullProduct);
      console.log(`‚úÖ Added: ${product.id}`);
    } catch (error) {
      if (error.message.includes('UNIQUE constraint failed')) {
        console.log(`‚ö†Ô∏è  Exists: ${product.id}`);
      } else {
        console.error(`‚ùå Failed: ${product.id}`, error.message);
      }
    }
  }
  
  console.log('Ìæâ Deployment complete!');
}

deploy();
```

### 3. Run the Script
```bash
node deploy-populate-products.js
```

### 4. Start the API Server
```bash
node api-server-db.js
```

## Ì¥ç Verification Steps

1. **Check Products API:**
   ```bash
   curl https://yourdomain.com/api/payment-plans
   ```

2. **Test a Purchase:**
   - Go to your live website
   - Select any product
   - Complete a test purchase
   - Verify email is sent

3. **Check Database:**
   - Verify SQLite file created: `payment-plans.db`
   - Check file permissions (writable)

## Ì≥Å File Structure on Server
```
/your-app-directory/
‚îú‚îÄ‚îÄ database.js
‚îú‚îÄ‚îÄ api-server-db.js
‚îú‚îÄ‚îÄ deploy-populate-products.js
‚îú‚îÄ‚îÄ package.json
‚îú‚îÄ‚îÄ .env
‚îú‚îÄ‚îÄ payment-plans.db (created automatically)
‚îú‚îÄ‚îÄ public/
‚îÇ   ‚îî‚îÄ‚îÄ uploads/
‚îÇ       ‚îî‚îÄ‚îÄ pdfs/
‚îî‚îÄ‚îÄ dist/ (frontend build)
```

## Ì¥í Security Notes for Namecheap

1. **Environment Variables:**
   - Store sensitive data in `.env` file
   - Never commit API keys to version control

2. **File Permissions:**
   - Ensure database directory is writable
   - Secure uploaded files directory

3. **Domain Setup:**
   - Update API endpoints to use your live domain
   - Configure CORS for your domain

## Ì∫® Troubleshooting

### Common Issues:
1. **Database not writable**: Check directory permissions
2. **Email not sending**: Verify SMTP credentials
3. **Stripe errors**: Check API keys and webhook endpoints
4. **CORS errors**: Update CORS configuration for your domain

### Success Indicators:
- ‚úÖ 22+ products in database
- ‚úÖ All product IDs from UI work
- ‚úÖ Payments process successfully
- ‚úÖ Emails send automatically
- ‚úÖ No "Invalid product ID" errors

## Ì≥û Quick Commands

```bash
# Check products count
curl -s https://yourdomain.com/api/payment-plans | grep -o '"id"' | wc -l

# Test specific product
curl https://yourdomain.com/api/payment-plans/male-fat-loss

# Check server logs
tail -f server.log
```

---
**Ready for Production!** ÌæØ
