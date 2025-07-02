#!/usr/bin/env node

/**
 * Separate Frontend/Backend Deployment Script
 * Prepares files for deploying to onaksfitness.com (frontend) and api.onaksfitness.com (backend)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Preparing Separate Frontend/Backend Deployment...\n');

// 1. Build React Frontend
console.log('📦 Building React frontend...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Frontend build completed\n');
} catch (error) {
  console.error('❌ Frontend build failed:', error.message);
  process.exit(1);
}

// 2. Create deployment directories
const deployDir = path.join(__dirname, 'deployment');
const frontendDir = path.join(deployDir, 'frontend');
const backendDir = path.join(deployDir, 'backend');

[deployDir, frontendDir, backendDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

console.log('📁 Created deployment directories\n');

// 3. Prepare Frontend Files (for onaksfitness.com)
console.log('📋 Preparing frontend files...');
const distSrc = path.join(__dirname, 'dist');
if (fs.existsSync(distSrc)) {
  fs.cpSync(distSrc, frontendDir, { recursive: true });
  console.log('✅ Copied dist/ contents to deployment/frontend/');
}

// Copy frontend environment template
const frontendEnvTemplate = `# Frontend Environment (.env for onaksfitness.com)
NODE_ENV=production
VITE_TINYMCE_API_KEY=your_tinymce_api_key_here
`;
fs.writeFileSync(path.join(frontendDir, '.env.template'), frontendEnvTemplate);
console.log('✅ Created frontend environment template');

// 4. Prepare Backend Files (for api.onaksfitness.com)
console.log('\n📋 Preparing backend files...');
const backendFiles = [
  'api-server-db.js',
  'database.js',
  'deploy-live.js',
  'onaks_fitness.db',
  'database-commonjs.js',
  'deploy-live-commonjs.js',
  'package-commonjs.json'
];

backendFiles.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(backendDir, file);
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied: ${file}`);
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
});

// Copy public uploads directory
const publicSrc = path.join(__dirname, 'public');
const publicDest = path.join(backendDir, 'public');
if (fs.existsSync(publicSrc)) {
  fs.cpSync(publicSrc, publicDest, { recursive: true });
  console.log('✅ Copied: public/ (uploads directory)');
}

// Create backend package.json
const backendPackageJson = {
  "name": "onaks-fitness-api",
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
  path.join(backendDir, 'package.json'), 
  JSON.stringify(backendPackageJson, null, 2)
);
console.log('✅ Created backend package.json');

// Create backend environment template
const backendEnvTemplate = `# Backend API Environment (.env for api.onaksfitness.com)
NODE_ENV=production
STRIPE_SECRET_KEY=sk_live_REDACTED_LIVE_STRIPE_SECRET_KEY
NAMECHEAP_EMAIL_PASSWORD=your_email_password_here
NAMECHEAP_SMTP_HOST=mail.onaksfitness.com
FRONTEND_DOMAIN=https://onaksfitness.com
API_DOMAIN=https://api.onaksfitness.com
`;
fs.writeFileSync(path.join(backendDir, '.env.template'), backendEnvTemplate);
console.log('✅ Created backend environment template');

// 5. Create deployment instructions
const deploymentInstructions = `
# 🚀 SEPARATE FRONTEND/BACKEND DEPLOYMENT INSTRUCTIONS

## 📁 Deployment Structure

### Frontend (onaksfitness.com)
Upload all files from 'deployment/frontend/' to main domain's public_html/:
- Upload all files and folders from frontend/ directly to public_html/
- Rename .env.template to .env and configure

### Backend API (api.onaksfitness.com)  
Upload all files from 'deployment/backend/' to subdomain's folder:
- Create subdomain 'api' pointing to public_html/api/
- Upload all files and folders from backend/ to public_html/api/
- Rename .env.template to .env and configure

## 🔧 Setup Steps

### 1. Create Subdomain
- Go to cPanel → Subdomains
- Create: api.onaksfitness.com → public_html/api/

### 2. Upload Files
- Frontend files → public_html/ (main domain)
- Backend files → public_html/api/ (subdomain)

### 3. Configure Environment Files
- Frontend: Edit public_html/.env
- Backend: Edit public_html/api/.env

### 4. Setup Node.js (API only)
- Go to cPanel → Node.js
- App root: /public_html/api
- App URL: api.onaksfitness.com
- Startup file: api-server-db.js
- Run: npm install
- Run: npm run populate-db

### 5. Test Deployment
- Frontend: https://onaksfitness.com
- API: https://api.onaksfitness.com/api/payment-plans

## 🔑 Required Environment Variables

Frontend (.env):
- VITE_TINYMCE_API_KEY=your_key

Backend (.env):
- STRIPE_SECRET_KEY=sk_live_REDACTED
- NAMECHEAP_EMAIL_PASSWORD=xxx
- All other variables from template

Your app will be live with:
- Frontend: https://onaksfitness.com
- API: https://api.onaksfitness.com
`;

fs.writeFileSync(path.join(deployDir, 'DEPLOYMENT_INSTRUCTIONS.txt'), deploymentInstructions);
console.log('✅ Created deployment instructions');

console.log('\n🎉 Deployment preparation completed!');
console.log('\n📁 Deployment files ready in ./deployment/ folder:');
console.log('   📂 frontend/ - Upload to onaksfitness.com public_html/');
console.log('   📂 backend/  - Upload to api.onaksfitness.com public_html/api/');
console.log('   📄 DEPLOYMENT_INSTRUCTIONS.txt - Step-by-step guide');
console.log('\n🔗 Architecture:');
console.log('   🌐 Frontend: https://onaksfitness.com');
console.log('   ⚡ API: https://api.onaksfitness.com');
console.log('\n📖 See NAMECHEAP_DEPLOYMENT.md for detailed instructions'); 