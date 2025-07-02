import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

// Database setup
let db = null;

export async function initializeDatabase() {
  try {
    // Open SQLite database
    db = await open({
      filename: './onaks_fitness.db',
      driver: sqlite3.Database
    });

    // Create payment_plans table
    await db.exec(`
      CREATE TABLE IF NOT EXISTS payment_plans (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        price INTEGER NOT NULL,
        currency TEXT DEFAULT 'usd',
        category TEXT,
        is_active BOOLEAN DEFAULT 1,
        download_file_path TEXT,
        download_url TEXT,
        email_subject TEXT,
        email_message TEXT,
        email_html_template TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create purchases table for tracking
    await db.exec(`
      CREATE TABLE IF NOT EXISTS purchases (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        stripe_session_id TEXT UNIQUE NOT NULL,
        payment_plan_id TEXT NOT NULL,
        customer_email TEXT NOT NULL,
        customer_name TEXT,
        amount_paid INTEGER NOT NULL,
        currency TEXT DEFAULT 'usd',
        payment_status TEXT DEFAULT 'pending',
        download_count INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (payment_plan_id) REFERENCES payment_plans (id)
      )
    `);

    console.log('✅ Database initialized successfully');
    
    // Insert default payment plans if table is empty
    await insertDefaultPlans();
    
    return db;
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    throw error;
  }
}

// Insert default payment plans
async function insertDefaultPlans() {
  try {
    const count = await db.get('SELECT COUNT(*) as count FROM payment_plans');
    
    if (count.count === 0) {
      console.log('📦 Inserting default payment plans...');
      
      const defaultPlans = [
        {
          id: 'male-fat-loss',
          title: 'Male Fat Loss Program',
          description: 'Complete fat loss workout program designed for men',
          price: 1499, // $14.99 in cents
          category: 'male',
          download_file_path: '/pdfs/male-fat-loss.pdf',
          download_url: 'https://onaksfitness.com/pdfs/generic-pdf.pdf',
          email_subject: '🔥 Your Male Fat Loss Program is Here!',
          email_message: 'Get ready to transform your body with our scientifically-designed fat loss program for men!'
        },
        {
          id: 'male-muscle-building',
          title: 'Male Muscle Building Program',
          description: 'Comprehensive muscle building program for men',
          price: 1499,
          category: 'male',
          download_file_path: '/pdfs/male-muscle-building.pdf',
          download_url: 'https://onaksfitness.com/pdfs/generic-pdf.pdf',
          email_subject: '💪 Your Muscle Building Program is Ready!',
          email_message: 'Time to build serious muscle with our proven muscle-building system!'
        },
        {
          id: 'female-fat-loss',
          title: 'Female Fat Loss Program',
          description: 'Complete fat loss workout program designed for women',
          price: 1499,
          category: 'female',
          download_file_path: '/pdfs/female-fat-loss.pdf',
          download_url: 'https://onaksfitness.com/pdfs/generic-pdf.pdf',
          email_subject: '✨ Your Female Fat Loss Program is Here!',
          email_message: 'Start your transformation journey with our specially designed program for women!'
        },
        {
          id: 'female-muscle-building',
          title: 'Female Muscle Building Program',
          description: 'Comprehensive muscle building program for women',
          price: 1499,
          category: 'female',
          download_file_path: '/pdfs/female-muscle-building.pdf',
          download_url: 'https://onaksfitness.com/pdfs/generic-pdf.pdf',
          email_subject: '💪 Your Female Muscle Building Program is Ready!',
          email_message: 'Build lean muscle and strength with our effective training program!'
        },
        {
          id: 'glute-max',
          title: 'Glute Max Program',
          description: 'Specialized glute training program',
          price: 2999, // $29.99 in cents
          category: 'specialty',
          download_file_path: '/pdfs/glute-max.pdf',
          download_url: 'https://onaksfitness.com/pdfs/generic-pdf.pdf',
          email_subject: '🍑 Your Glute Max Program is Here!',
          email_message: 'Build amazing glutes with our specialized training program!'
        },
        {
          id: 'transformation-ebook',
          title: 'Complete Transformation Guide',
          description: 'Complete transformation guide with nutrition and training',
          price: 999, // $9.99 in cents
          category: 'guide',
          download_file_path: '/pdfs/transformation-ebook.pdf',
          download_url: 'https://onaksfitness.com/pdfs/generic-pdf.pdf',
          email_subject: '📚 Your Transformation Guide is Ready!',
          email_message: 'Everything you need to know about fitness transformation in one comprehensive guide!'
        }
      ];

      for (const plan of defaultPlans) {
        await createPaymentPlan(plan);
      }
      
      console.log('✅ Default payment plans inserted');
    }
  } catch (error) {
    console.error('❌ Error inserting default plans:', error);
  }
}

// CRUD Operations for Payment Plans

export async function createPaymentPlan(planData) {
  try {
    const {
      id,
      title,
      description = '',
      price,
      currency = 'usd',
      category = 'general',
      download_file_path = '',
      download_url = '',
      email_subject = '',
      email_message = '',
      email_html_template = ''
    } = planData;

    const result = await db.run(`
      INSERT INTO payment_plans (
        id, title, description, price, currency, category,
        download_file_path, download_url, email_subject, 
        email_message, email_html_template
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      id, title, description, price, currency, category,
      download_file_path, download_url, email_subject,
      email_message, email_html_template
    ]);

    console.log(`✅ Payment plan created: ${title}`);
    return await getPaymentPlan(id);
  } catch (error) {
    console.error('❌ Error creating payment plan:', error);
    throw error;
  }
}

export async function getPaymentPlan(planId) {
  try {
    const plan = await db.get(
      'SELECT * FROM payment_plans WHERE id = ? AND is_active = 1',
      [planId]
    );
    return plan;
  } catch (error) {
    console.error('❌ Error getting payment plan:', error);
    throw error;
  }
}

export async function getAllPaymentPlans() {
  try {
    const plans = await db.all(
      'SELECT * FROM payment_plans WHERE is_active = 1 ORDER BY price ASC'
    );
    return plans;
  } catch (error) {
    console.error('❌ Error getting all payment plans:', error);
    throw error;
  }
}

export async function updatePaymentPlan(planId, updateData) {
  try {
    const fields = [];
    const values = [];
    
    // Build dynamic update query
    Object.keys(updateData).forEach(key => {
      if (key !== 'id') { // Don't update ID
        fields.push(`${key} = ?`);
        values.push(updateData[key]);
      }
    });
    
    // Add updated_at timestamp
    fields.push('updated_at = CURRENT_TIMESTAMP');
    values.push(planId);

    const query = `UPDATE payment_plans SET ${fields.join(', ')} WHERE id = ?`;
    
    await db.run(query, values);
    console.log(`✅ Payment plan updated: ${planId}`);
    
    return await getPaymentPlan(planId);
  } catch (error) {
    console.error('❌ Error updating payment plan:', error);
    throw error;
  }
}

export async function deletePaymentPlan(planId) {
  try {
    // Soft delete - set is_active to false
    await db.run(
      'UPDATE payment_plans SET is_active = 0, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [planId]
    );
    
    console.log(`✅ Payment plan deleted: ${planId}`);
    return { success: true, message: 'Payment plan deleted successfully' };
  } catch (error) {
    console.error('❌ Error deleting payment plan:', error);
    throw error;
  }
}

// Purchase tracking functions

export async function createPurchase(purchaseData) {
  try {
    const {
      stripe_session_id,
      payment_plan_id,
      customer_email,
      customer_name = '',
      amount_paid,
      currency = 'usd',
      payment_status = 'completed'
    } = purchaseData;

    const result = await db.run(`
      INSERT INTO purchases (
        stripe_session_id, payment_plan_id, customer_email,
        customer_name, amount_paid, currency, payment_status
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [
      stripe_session_id, payment_plan_id, customer_email,
      customer_name, amount_paid, currency, payment_status
    ]);

    console.log(`✅ Purchase recorded: ${customer_email} - ${payment_plan_id}`);
    return result.lastID;
  } catch (error) {
    console.error('❌ Error creating purchase record:', error);
    throw error;
  }
}

export async function getPurchase(sessionId) {
  try {
    const purchase = await db.get(`
      SELECT p.*, pp.title as plan_title, pp.download_url, pp.download_file_path
      FROM purchases p
      JOIN payment_plans pp ON p.payment_plan_id = pp.id
      WHERE p.stripe_session_id = ?
    `, [sessionId]);
    
    return purchase;
  } catch (error) {
    console.error('❌ Error getting purchase:', error);
    throw error;
  }
}

export async function incrementDownloadCount(sessionId) {
  try {
    await db.run(
      'UPDATE purchases SET download_count = download_count + 1 WHERE stripe_session_id = ?',
      [sessionId]
    );
  } catch (error) {
    console.error('❌ Error incrementing download count:', error);
  }
}

// Close database connection
export async function closeDatabase() {
  if (db) {
    await db.close();
    console.log('📦 Database connection closed');
  }
} 