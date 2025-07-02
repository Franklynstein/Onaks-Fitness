import { initializeDatabase, createPaymentPlan } from './database.js';

// Complete list of all products for deployment
const allProducts = [
  {
    id: 'transformation-ebook',
    title: 'Complete Transformation Guide',
    description: 'Complete transformation guide with nutrition and training strategies',
    price: 999,
    currency: 'usd',
    category: 'guide',
    is_active: 1,
    download_file_path: '/pdfs/transformation-ebook.pdf',
    download_url: 'https://onaksfitness.com/pdfs/transformation-ebook.pdf',
    email_subject: 'Ì≥ö Your Transformation Guide is Ready!',
    email_message: 'Everything you need to know about fitness transformation in one comprehensive guide!'
  },
  {
    id: 'male-fat-loss',
    title: 'Male Fat Loss Program',
    description: 'Complete fat loss workout program designed for men',
    price: 1499,
    currency: 'usd',
    category: 'male',
    is_active: 1,
    download_file_path: '/pdfs/male-fat-loss.pdf',
    download_url: 'https://onaksfitness.com/pdfs/male-fat-loss.pdf',
    email_subject: 'Ì¥• Your Male Fat Loss Program is Here!',
    email_message: 'Get ready to transform your body with our scientifically-designed fat loss program for men!'
  },
  {
    id: 'male-muscle-building',
    title: 'Male Muscle Building Program',
    description: 'Comprehensive muscle building program for men',
    price: 1499,
    currency: 'usd',
    category: 'male',
    is_active: 1,
    download_file_path: '/pdfs/male-muscle-building.pdf',
    download_url: 'https://onaksfitness.com/pdfs/male-muscle-building.pdf',
    email_subject: 'Ì≤™ Your Muscle Building Program is Ready!',
    email_message: 'Time to build serious muscle with our proven muscle-building system!'
  },
  {
    id: 'female-fat-loss',
    title: 'Female Fat Loss Program',
    description: 'Complete fat loss workout program designed for women',
    price: 1499,
    currency: 'usd',
    category: 'female',
    is_active: 1,
    download_file_path: '/pdfs/female-fat-loss.pdf',
    download_url: 'https://onaksfitness.com/pdfs/female-fat-loss.pdf',
    email_subject: '‚ú® Your Female Fat Loss Program is Here!',
    email_message: 'Start your transformation journey with our specially designed program for women!'
  },
  {
    id: 'female-muscle-building',
    title: 'Female Muscle Building Program',
    description: 'Comprehensive muscle building program for women',
    price: 1499,
    currency: 'usd',
    category: 'female',
    is_active: 1,
    download_file_path: '/pdfs/female-muscle-building.pdf',
    download_url: 'https://onaksfitness.com/pdfs/female-muscle-building.pdf',
    email_subject: 'Ì≤™ Your Female Muscle Building Program is Ready!',
    email_message: 'Build lean muscle and strength with our effective training program!'
  },
  {
    id: 'glute-max',
    title: 'Glute Max Program',
    description: 'Specialized glute training program for maximum development',
    price: 2999,
    currency: 'usd',
    category: 'specialty',
    is_active: 1,
    download_file_path: '/pdfs/glute-max.pdf',
    download_url: 'https://onaksfitness.com/pdfs/glute-max.pdf',
    email_subject: 'ÌΩë Your Glute Max Program is Here!',
    email_message: 'Build amazing glutes with our specialized training program!'
  },
  {
    id: 'male-body-recomposition',
    title: 'Male Body Recomposition Program',
    description: 'Complete body recomposition program for men',
    price: 1499,
    currency: 'usd',
    category: 'male',
    is_active: 1,
    download_file_path: '/pdfs/male-body-recomposition.pdf',
    download_url: 'https://onaksfitness.com/pdfs/male-body-recomposition.pdf',
    email_subject: 'Ì¥Ñ Your Body Recomposition Program is Here!',
    email_message: 'Transform your physique with our body recomposition program!'
  },
  {
    id: 'female-body-composition',
    title: 'Female Body Composition Program',
    description: 'Complete body composition program for women',
    price: 1499,
    currency: 'usd',
    category: 'female',
    is_active: 1,
    download_file_path: '/pdfs/female-body-composition.pdf',
    download_url: 'https://onaksfitness.com/pdfs/female-body-composition.pdf',
    email_subject: '‚ú® Your Body Composition Program is Ready!',
    email_message: 'Achieve your ideal body composition with our specialized program!'
  },
  {
    id: 'weight-loss-mid',
    title: 'Mid Weight Loss Grocery Lists',
    description: 'Moderate weight loss grocery list and nutrition guide',
    price: 1499,
    currency: 'usd',
    category: 'weight-loss',
    is_active: 1,
    download_file_path: '/pdfs/weight-loss-mid.pdf',
    download_url: 'https://onaksfitness.com/pdfs/weight-loss-mid.pdf',
    email_subject: 'Ìµó Your Weight Loss Grocery Lists are Ready!',
    email_message: 'Start your weight loss journey with our curated grocery lists!'
  }
];

// Add remaining products (continuing due to length limit)
const additionalProducts = [
  { id: 'weight-loss-standard', title: 'Standard Weight Loss Grocery Lists', price: 1499, category: 'weight-loss' },
  { id: 'weight-loss-accelerated', title: 'Accelerated Weight Loss Grocery Lists', price: 1499, category: 'weight-loss' },
  { id: 'lean-bulk', title: 'Lean Bulk Grocery Lists', price: 1499, category: 'bulking' },
  { id: 'standard-bulk', title: 'Standard Bulk Grocery Lists', price: 1499, category: 'bulking' },
  { id: 'vegan-mid', title: 'Vegan Mid Weight Loss', price: 1499, category: 'vegan' },
  { id: 'vegan-standard', title: 'Vegan Standard Weight Loss', price: 1499, category: 'vegan' },
  { id: 'vegan-accelerated', title: 'Vegan Accelerated Weight Loss', price: 1499, category: 'vegan' },
  { id: 'vegan-lean-bulk', title: 'Vegan Lean Bulk Program', price: 1499, category: 'vegan' },
  { id: 'vegan-standard-bulk', title: 'Vegan Standard Bulk Program', price: 1499, category: 'vegan' },
  { id: 'weight-loss-combo-grocery-lists', title: 'Weight Loss Combo - Grocery Lists', price: 1499, category: 'combo' },
  { id: 'weight-loss-combo-training-program', title: 'Weight Loss Combo - Training Program', price: 1499, category: 'combo' },
  { id: 'lean-bulking-grocery-lists', title: 'Lean Bulking Grocery Lists', price: 1499, category: 'combo' },
  { id: 'muscle-bulking-training-program', title: 'Muscle Bulking Training Program', price: 1499, category: 'combo' }
];

// Add default fields to additional products
additionalProducts.forEach(product => {
  Object.assign(product, {
    description: `Complete ${product.title.toLowerCase()} program`,
    currency: 'usd',
    is_active: 1,
    download_file_path: `/pdfs/${product.id}.pdf`,
    download_url: `https://onaksfitness.com/pdfs/${product.id}.pdf`,
    email_subject: `ÔøΩÔøΩ Your ${product.title} is Ready!`,
    email_message: `Thank you for purchasing the ${product.title}!`
  });
});

// Combine all products
const completeProductList = [...allProducts, ...additionalProducts];

async function deployProducts() {
  console.log('Ì∫Ä ONAKS FITNESS - LIVE DEPLOYMENT SCRIPT');
  console.log('==========================================');
  console.log(`Ì≥¶ Deploying ${completeProductList.length} products to live database...\n`);
  
  let successCount = 0;
  let existingCount = 0;
  let errorCount = 0;
  
  try {
    console.log('1. Initializing database...');
    await initializeDatabase();
    console.log('‚úÖ Database initialized successfully\n');
    
    console.log('2. Adding products...');
    
    for (const product of completeProductList) {
      try {
        await createPaymentPlan(product);
        console.log(`‚úÖ Added: ${product.id} - ${product.title} ($${(product.price/100).toFixed(2)})`);
        successCount++;
      } catch (error) {
        if (error.message.includes('UNIQUE constraint failed')) {
          console.log(`‚ö†Ô∏è  Exists: ${product.id} - ${product.title}`);
          existingCount++;
        } else {
          console.error(`‚ùå Failed: ${product.id} - ${error.message}`);
          errorCount++;
        }
      }
    }
    
    console.log('\n==========================================');
    console.log('Ìæâ DEPLOYMENT SUMMARY');
    console.log('==========================================');
    console.log(`‚úÖ New products added: ${successCount}`);
    console.log(`‚ö†Ô∏è  Already existed: ${existingCount}`);
    console.log(`‚ùå Errors: ${errorCount}`);
    console.log(`Ì≥ä Total products: ${successCount + existingCount}`);
    
    if (errorCount === 0) {
      console.log('\nÌæØ DEPLOYMENT SUCCESSFUL!');
      console.log('Ì≤° Your live database is ready for production!');
    } else {
      console.log('\n‚ö†Ô∏è  DEPLOYMENT COMPLETED WITH ERRORS');
    }
    
  } catch (error) {
    console.error('\n‚ùå DEPLOYMENT FAILED:', error);
    process.exit(1);
  }
}

deployProducts();
