#!/usr/bin/env node

/**
 * Deployment Script for Namecheap Shared Hosting
 * This script prepares your application for production deployment
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting Namecheap Deployment Preparation...\n');

// 1. Build React Frontend
console.log('📦 Building React frontend...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Frontend build completed\n');
} catch (error) {
  console.error('❌ Frontend build failed:', error.message);
  process.exit(1);
}

// 2. Create production directories
console.log('📁 Creating production directories...');
const productionDirs = [
  'public/uploads/pdfs',
  'dist'
];

productionDirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// 3. Copy essential files for deployment
console.log('\n📋 Copying deployment files...');
const filesToCopy = [
  'package.json',
  'api-server-db.js',
  'database.js',
  'deploy-live.js',
  'onaks_fitness.db'
];

const deployDir = path.join(__dirname, 'deployment');
if (!fs.existsSync(deployDir)) {
  fs.mkdirSync(deployDir);
}

filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(deployDir, file);
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied: ${file}`);
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
});

// Copy dist folder
const distSrc = path.join(__dirname, 'dist');
const distDest = path.join(deployDir, 'dist');
if (fs.existsSync(distSrc)) {
  fs.cpSync(distSrc, distDest, { recursive: true });
  console.log('✅ Copied: dist/ (React build)');
}

// Copy public folder
const publicSrc = path.join(__dirname, 'public');
const publicDest = path.join(deployDir, 'public');
if (fs.existsSync(publicSrc)) {
  fs.cpSync(publicSrc, publicDest, { recursive: true });
  console.log('✅ Copied: public/ (uploads)');
}

// 4. Create deployment package.json
console.log('\n📝 Creating production package.json...');
const prodPackageJson = {
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
    "@aws-sdk/client-ses": "^3.830.0",
    "@stripe/stripe-js": "^7.3.1",
    "@tinymce/tinymce-react": "^6.2.1",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "multer": "^2.0.1",
    "nodemailer": "^7.0.3",
    "sqlite": "^5.1.1",
    "sqlite3": "^5.1.7",
    "stripe": "^18.2.1"
  }
};

fs.writeFileSync(
  path.join(deployDir, 'package.json'), 
  JSON.stringify(prodPackageJson, null, 2)
);
console.log('✅ Created production package.json');

// 5. Create deployment instructions
const deploymentInstructions = `
# 🚀 NAMECHEAP SHARED HOSTING DEPLOYMENT GUIDE

## Pre-deployment Checklist:
1. ✅ Ensure your Namecheap hosting plan supports Node.js
2. ✅ Set up your domain email (noreply@onaksfitness.com)
3. ✅ Get your live Stripe API keys
4. ✅ Have your TinyMCE API key ready

## Deployment Steps:

### 1. Upload Files
Upload all files from the 'deployment' folder to your Namecheap hosting root directory (public_html)

### 2. Create .env file
Create a .env file in your root directory with:
\`\`\`
NODE_ENV=production
STRIPE_SECRET_KEY=sk_live_YOUR_LIVE_STRIPE_SECRET_KEY
NAMECHEAP_EMAIL_PASSWORD=your_email_password
NAMECHEAP_SMTP_HOST=mail.onaksfitness.com
VITE_TINYMCE_API_KEY=your_tinymce_api_key
DOMAIN=https://onaksfitness.com
\`\`\`

### 3. Install Dependencies
In your hosting control panel's Node.js section:
\`\`\`
npm install
\`\`\`

### 4. Populate Database
Run the database setup:
\`\`\`
npm run populate-db
\`\`\`

### 5. Start Application
Set the startup file to: api-server-db.js
Or run: npm start

### 6. Domain Configuration
- Point your domain to the hosting account
- Ensure SSL certificate is active
- Test all payment flows

## Important URLs:
- Frontend: https://onaksfitness.com
- API: https://onaksfitness.com/api/payment-plans
- Admin: https://onaksfitness.com/admin

## Troubleshooting:
- Check Node.js version (requires 18+)
- Verify file permissions
- Check error logs in hosting control panel
- Test email delivery
- Verify Stripe webhook endpoints

## Support Files:
- Database: onaks_fitness.db
- Uploads: public/uploads/pdfs/
- Frontend: dist/
- API: api-server-db.js
`;

fs.writeFileSync(path.join(deployDir, 'DEPLOYMENT_INSTRUCTIONS.md'), deploymentInstructions);
console.log('✅ Created deployment instructions');

console.log('\n🎉 Deployment preparation completed!');
console.log('📁 Upload all files to your Namecheap hosting');
console.log('📖 Follow the deployment guide below'); 