# 🚀 NAMECHEAP SEPARATE FRONTEND/BACKEND DEPLOYMENT GUIDE

## 📋 Architecture Overview

**Frontend:** `onaksfitness.com` (React - Static Files)  
**Backend API:** `api.onaksfitness.com` (Express - Node.js App)

## 📋 Pre-deployment Checklist

- [ ] Namecheap hosting plan with Node.js support (for API subdomain)
- [ ] Main domain: `onaksfitness.com` pointed to hosting account
- [ ] Subdomain: `api.onaksfitness.com` created and pointed to hosting account
- [ ] SSL certificates active for both domains
- [ ] Live Stripe API keys (replace test keys)
- [ ] Email account setup: noreply@onaksfitness.com
- [ ] TinyMCE API key
- [ ] Calendly account configured

## 🛠️ Step-by-Step Deployment

### 1. Prepare Your Files

```bash
# Build frontend
npm run build

# This creates the 'dist' folder with React production files
```

### 2A. Deploy Frontend (onaksfitness.com)

Upload `dist/` folder contents to main domain's `public_html`:

```
📁 public_html/ (onaksfitness.com)
├── 📄 index.html
├── 📁 assets/
│   ├── 📄 index-[hash].js
│   ├── 📄 index-[hash].css
│   └── 📁 [images, fonts, videos]
└── 📄 .env (optional - for TinyMCE key)
```

### 2B. Deploy Backend API (api.onaksfitness.com)

Upload API files to `/home/onaktrrg/api/` directory:

```
📁 /home/onaktrrg/api/ (api.onaksfitness.com)
├── 📄 api-server-db.js
├── 📄 database.js
├── 📄 deploy-live.js
├── 📄 package.json
├── 📄 onaks_fitness.db
├── 📄 .env (backend environment)
├── 📁 public/
│   └── 📁 uploads/
│       └── 📁 pdfs/
└── 📁 node_modules/ (will be created)
```

**Note:** API files go in `/home/onaktrrg/api/` (NOT in public_html)

### 3A. Frontend Environment (Optional)

Create `.env` in frontend `public_html/` (onaksfitness.com):

```env
NODE_ENV=production
VITE_TINYMCE_API_KEY=your_tinymce_api_key
```

### 3B. Backend API Environment (Required)

Create `.env` in API folder `/home/onaktrrg/api/` (api.onaksfitness.com):

```env
NODE_ENV=production
STRIPE_SECRET_KEY=sk_live_YOUR_LIVE_STRIPE_SECRET_KEY
NAMECHEAP_EMAIL_PASSWORD=your_domain_email_password
NAMECHEAP_SMTP_HOST=mail.onaksfitness.com
FRONTEND_DOMAIN=https://onaksfitness.com
API_DOMAIN=https://api.onaksfitness.com
```

### 4. Configure Subdomain & Node.js

#### 4A. Create API Subdomain
1. **Go to cPanel → Subdomains**
2. **Create subdomain:**
   - Subdomain: `api`
   - Domain: `onaksfitness.com`
   - Document Root: `/home/onaktrrg/api`

#### 4B. Configure Node.js for API
1. **Go to cPanel → Software → Node.js**
2. **Create App:**
   - App root: `/home/onaktrrg/api`
   - App URL: `api.onaksfitness.com`
   - Node.js version: `18.x` (virtual environment already exists)
   - Application startup file: `api-server-db.js`

**Virtual Environment:** Node.js 18 environment is at `/home/onaktrrg/nodevenv/api/18/`

3. **Activate Virtual Environment & Install Dependencies:**
   ```bash
   source /home/onaktrrg/nodevenv/api/18/bin/activate
   cd /home/onaktrrg/api
   npm install
   ```

4. **Populate Database:**
   ```bash
   npm run populate-db
   ```

### 5. Domain & DNS Configuration

1. **Point domain to hosting account**
2. **Ensure SSL is active**
3. **Test domain access**

### 6. Email Configuration

1. **Create email account:** `noreply@onaksfitness.com`
2. **Set strong password**
3. **Add password to `.env` file**

### 7. Test Your Deployment

#### Frontend Tests (onaksfitness.com):
- [ ] https://onaksfitness.com loads correctly
- [ ] All pages navigate properly (/, /programs, /admin, /success)
- [ ] Images and assets load
- [ ] Mobile responsive design works
- [ ] API calls work (check browser network tab)

#### Backend API Tests (api.onaksfitness.com):
- [ ] https://api.onaksfitness.com/api/payment-plans returns products
- [ ] File uploads work: https://api.onaksfitness.com/uploads/pdfs/
- [ ] CORS allows frontend to access API
- [ ] Admin endpoints respond correctly

#### Payment System Tests:
- [ ] Stripe checkout redirects properly
- [ ] Payment confirmation emails send
- [ ] PDF downloads function from API domain
- [ ] Purchase tracking works
- [ ] Success page receives session data

#### Cross-Domain Integration:
- [ ] Frontend can fetch products from API
- [ ] Stripe checkout redirects to frontend
- [ ] Admin panel can upload files to API
- [ ] Calendly integration works from frontend

## 📊 Production Configuration

### package.json (Production)
```json
{
  "name": "onaks-fitness-production",
  "version": "1.0.0",
  "type": "module",
  "engines": {
    "node": ">=18.0.0"
  },
  "scripts": {
    "start": "NODE_ENV=production node api-server-db.js",
    "populate-db": "node deploy-live.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "stripe": "^18.2.1",
    "nodemailer": "^7.0.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "sqlite": "^5.1.1",
    "sqlite3": "^5.1.7",
    "multer": "^2.0.1"
  }
}
```

## 🔧 Troubleshooting

### Common Issues:

**App won't start:**
- Check Node.js version (18+ required)
- Verify startup file path
- Check error logs in cPanel

**Database errors:**
- Ensure `onaks_fitness.db` uploaded
- Check file permissions (644)
- Verify `deploy-live.js` ran successfully

**Email not sending:**
- Verify email account exists
- Check SMTP settings
- Test email credentials

**Stripe errors:**
- Ensure live API keys are used
- Check webhook endpoints
- Verify domain matches Stripe settings

**File uploads failing:**
- Check `public/uploads/pdfs/` exists
- Verify folder permissions (755)
- Ensure adequate disk space

### File Permissions:
```bash
Files: 644
Folders: 755
.env: 600 (for security)
```

## 🔐 Security Checklist

- [ ] Use live Stripe keys (not test)
- [ ] Strong email password
- [ ] Secure .env file permissions
- [ ] SSL certificate active
- [ ] Regular backups enabled
- [ ] Database file protected

## 📈 Post-Deployment

1. **Monitor error logs** in cPanel
2. **Test all payment flows** with small amounts
3. **Verify email delivery** to different providers
4. **Check performance** and loading times
5. **Set up monitoring** for uptime
6. **Regular database backups**

## 📞 Support

- **Namecheap Support:** For hosting issues
- **Stripe Dashboard:** For payment issues
- **Check error logs** in cPanel for debugging

---

## 🎯 Quick Start Commands

```bash
# Prepare deployment
npm run deploy-namecheap

# Upload files via cPanel File Manager or FTP
# Create .env file with production values
# Install dependencies in cPanel Node.js section
npm install

# Populate database
npm run populate-db

# Start application (auto-starts in cPanel)
npm start
```

Your Onaks Fitness app should now be live at https://onaksfitness.com! 🎉 