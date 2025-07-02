import { 
  initializeDatabase, 
  getAllPaymentPlans, 
  getPaymentPlan,
  createPaymentPlan,
  updatePaymentPlan,
  closeDatabase 
} from './database.js';

async function testDatabase() {
  console.log('🧪 Starting Database Test...\n');

  try {
    // Initialize database
    console.log('1. Initializing database...');
    await initializeDatabase();
    console.log('✅ Database initialized\n');

    // Get all payment plans
    console.log('2. Fetching all payment plans...');
    const allPlans = await getAllPaymentPlans();
    console.log(`✅ Found ${allPlans.length} payment plans:`);
    allPlans.forEach(plan => {
      console.log(`   - ${plan.id}: ${plan.title} ($${(plan.price/100).toFixed(2)})`);
    });
    console.log('');

    // Get a specific payment plan
    console.log('3. Testing single payment plan fetch...');
    const singlePlan = await getPaymentPlan('male-fat-loss');
    if (singlePlan) {
      console.log(`✅ Found plan: ${singlePlan.title}`);
      console.log(`   Price: $${(singlePlan.price/100).toFixed(2)}`);
      console.log(`   Email Subject: ${singlePlan.email_subject}`);
      console.log(`   Download URL: ${singlePlan.download_url}`);
    } else {
      console.log('❌ Plan not found');
    }
    console.log('');

    // Test creating a new payment plan
    console.log('4. Testing payment plan creation...');
    const newPlan = {
      id: 'test-plan',
      title: 'Test Program',
      description: 'A test program for database testing',
      price: 999, // $9.99
      category: 'test',
      download_url: 'https://example.com/test.pdf',
      email_subject: '🧪 Your Test Program!',
      email_message: 'This is a test program for verification.'
    };

    const createdPlan = await createPaymentPlan(newPlan);
    if (createdPlan) {
      console.log(`✅ Created plan: ${createdPlan.title}`);
    }
    console.log('');

    // Test updating the plan
    console.log('5. Testing payment plan update...');
    const updatedPlan = await updatePaymentPlan('test-plan', {
      price: 1999, // Update to $19.99
      title: 'Updated Test Program'
    });
    if (updatedPlan) {
      console.log(`✅ Updated plan: ${updatedPlan.title} - $${(updatedPlan.price/100).toFixed(2)}`);
    }
    console.log('');

    // Get updated list
    console.log('6. Verifying all plans after changes...');
    const finalPlans = await getAllPaymentPlans();
    console.log(`✅ Total plans: ${finalPlans.length}`);
    finalPlans.forEach(plan => {
      console.log(`   - ${plan.id}: ${plan.title} ($${(plan.price/100).toFixed(2)})`);
    });
    console.log('');

    console.log('🎉 Database test completed successfully!');

  } catch (error) {
    console.error('❌ Database test failed:', error);
  } finally {
    // Close database connection
    await closeDatabase();
    console.log('📦 Database connection closed');
  }
}

// Run the test
testDatabase(); 