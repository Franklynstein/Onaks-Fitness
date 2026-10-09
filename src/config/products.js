// Checkout product IDs — must match the `id` of each row in your backend
// payment_plans (api.onaksfitness.com), which maps them to your Stripe prices.
// Fill each value, then rebuild. An empty value leaves that Buy button disabled.
// (Reference ids seen in your deploy-populate-products.js are shown as hints.)
export const PRODUCTS = {
  maleFatLoss: '',                 // hint: male-fat-loss
  maleMuscle: '',                  // hint: male-muscle-building
  maleRecomp: '',                  // hint: male-body-recomposition
  femaleFatLoss: '',               // hint: female-fat-loss
  femaleMuscle: '',                // hint: female-muscle-building
  femaleRecomp: '',                // hint: female-body-composition
  gluteMax: '',                    // hint: glute-max
  groceryWeightLossMild: '',       // hint: weight-loss-mid
  groceryWeightLossStandard: '',   // hint: weight-loss-standard
  groceryWeightLossAccelerated: '',// hint: weight-loss-accelerated
  groceryLeanBulk: '',             // hint: lean-bulk
  veganMild: '',                   // hint: vegan-mid
  veganStandard: '',               // hint: vegan-standard
  veganAccelerated: '',            // hint: vegan-accelerated
  veganLeanBulk: '',               // hint: vegan-lean-bulk
  comboWeightLoss: '',             // hint: weight-loss-combo-grocery-lists
  comboLeanBulk: '',               // hint: lean-bulking-grocery-lists
  ebook: '',                       // hint: transformation-ebook
};
