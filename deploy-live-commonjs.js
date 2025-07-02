const { initializeDatabase, createPaymentPlan } = require("./database-commonjs.js");

const products = [
  { id: "transformation-ebook", title: "Complete Transformation Guide", price: 999 },
  { id: "male-fat-loss", title: "Male Fat Loss Program", price: 1499 },
  { id: "male-muscle-building", title: "Male Muscle Building Program", price: 1499 },
  { id: "male-body-recomposition", title: "Male Body Recomposition Program", price: 1499 },
  { id: "female-fat-loss", title: "Female Fat Loss Program", price: 1499 },
  { id: "female-muscle-building", title: "Female Muscle Building Program", price: 1499 },
  { id: "female-body-composition", title: "Female Body Composition Program", price: 1499 },
  { id: "glute-max", title: "Glute Max Program", price: 2999 },
  { id: "weight-loss-mid", title: "Mid Weight Loss Grocery Lists", price: 1499 },
  { id: "weight-loss-standard", title: "Standard Weight Loss Grocery Lists", price: 1499 },
  { id: "weight-loss-accelerated", title: "Accelerated Weight Loss Grocery Lists", price: 1499 },
  { id: "lean-bulk", title: "Lean Bulk Grocery Lists", price: 1499 },
  { id: "standard-bulk", title: "Standard Bulk Grocery Lists", price: 1499 },
  { id: "vegan-mid", title: "Vegan Mid Weight Loss", price: 1499 },
  { id: "vegan-standard", title: "Vegan Standard Weight Loss", price: 1499 },
  { id: "vegan-accelerated", title: "Vegan Accelerated Weight Loss", price: 1499 },
  { id: "vegan-lean-bulk", title: "Vegan Lean Bulk Program", price: 1499 },
  { id: "vegan-standard-bulk", title: "Vegan Standard Bulk Program", price: 1499 },
  { id: "weight-loss-combo-grocery-lists", title: "Weight Loss Combo - Grocery Lists", price: 1499 },
  { id: "weight-loss-combo-training-program", title: "Weight Loss Combo - Training Program", price: 1499 },
  { id: "lean-bulking-grocery-lists", title: "Lean Bulking Grocery Lists", price: 1499 },
  { id: "muscle-bulking-training-program", title: "Muscle Bulking Training Program", price: 1499 }
];

async function deploy() {
  console.log("🚀 ONAKS FITNESS - Live Deployment");
  console.log("===============================================");
  
  await initializeDatabase();
  console.log("✅ Database initialized");
  
  let added = 0, exists = 0;
  
  for (const product of products) {
    const fullProduct = {
      ...product,
      description: `Complete ${product.title.toLowerCase()} program`,
      currency: "usd",
      is_active: 1,
      download_file_path: `/pdfs/${product.id}.pdf`,
      download_url: `https://api.onaksfitness.com/uploads/pdfs/${product.id}.pdf`,
      email_subject: `🔥 Your ${product.title} is Ready!`,
      email_message: `Thank you for purchasing the ${product.title}!`
    };
    
    try {
      await createPaymentPlan(fullProduct);
      console.log(`✅ ${product.id}`);
      added++;
    } catch (error) {
      if (error.message.includes("UNIQUE constraint failed")) {
        console.log(`⚠️  ${product.id} (exists)`);
        exists++;
      } else {
        console.error(`❌ ${product.id}: ${error.message}`);
      }
    }
  }
  
  console.log("===============================================");
  console.log(`🎉 DEPLOYMENT COMPLETE: ${added} added, ${exists} existed`);
  console.log("🚀 Your database is ready for production!");
}

deploy().catch(console.error); 