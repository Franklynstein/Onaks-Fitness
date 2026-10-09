// Checkout product ids — these are the live ids from your backend payment_plans
// (api.onaksfitness.com/api/payment-plans), confirmed against the running catalogue.
// Prices are NOT stored here; the pages fetch live prices from /api/payment-plans.
export const PRODUCTS = {
  maleFatLoss: 'male-fat-loss',
  maleMuscle: 'male-muscle-building',
  maleRecomp: 'male-body-recomposition',
  femaleFatLoss: 'female-fat-loss',
  femaleMuscle: 'female-muscle-building',
  femaleRecomp: 'female-body-composition',
  gluteMax: 'glute-max',
  groceryWeightLossMild: 'weight-loss-mid',
  groceryWeightLossStandard: 'weight-loss-standard',
  groceryWeightLossAccelerated: 'weight-loss-accelerated',
  groceryLeanBulk: 'lean-bulk',
  veganMild: 'vegan-mid',
  veganStandard: 'vegan-standard',
  veganAccelerated: 'vegan-accelerated',
  veganLeanBulk: 'vegan-lean-bulk',
  comboWeightLoss: 'weight-loss-combo-grocery-lists',
  comboLeanBulk: 'lean-bulking-grocery-lists',
  ebook: 'transformation-ebook',
};
