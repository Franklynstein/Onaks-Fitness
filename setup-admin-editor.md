# Admin Interface with Rich Text Editor Setup Guide

## 🎯 What's New

Your admin interface now includes a **rich text editor** (TinyMCE) for creating custom email templates! This allows you to:

- Create professional HTML email templates
- Format text with bold, italic, colors, etc.
- Add links and images to emails
- Use placeholders for dynamic content
- Preview email templates before saving

## 🚀 Quick Start

### 1. Run the Database-Powered Server

```bash
npm run dev-db
```

This starts both your Vite frontend and the database-powered API server.

### 2. Access Admin Interface

Add the admin route to your main app by updating `src/App.jsx`:

```javascript
import Admin from './components/Admin';

// Add to your routes:
<Route path="/admin" element={<Admin />} />
```

Then visit: `http://localhost:5173/admin`

## 📝 Creating Payment Plans

### Basic Information
- **Plan ID**: Unique identifier (e.g., `male-fat-loss`)
- **Title**: Display name (e.g., `Male Fat Loss Program`)
- **Description**: Program description
- **Price**: In cents (1499 = $14.99)
- **Category**: male, female, specialty, guide, nutrition

### Email Configuration
- **Email Subject**: Subject line for purchase emails
- **Email Message**: Plain text message (fallback)
- **Rich Text Template**: HTML template with formatting

### Download Settings
- **Download URL**: Direct link to PDF file
- **Download File Path**: Server file path

## 🎨 Rich Text Editor Features

### Available Placeholders
Use these in your rich text templates:

- `{customerName}` - Customer's name
- `{planTitle}` - Product title
- `{downloadUrl}` - Download link
- `{emailMessage}` - Plain text message

### Example Template
```html
<h2>Hey {customerName}! 🎉</h2>
<p>Thank you for purchasing <strong>{planTitle}</strong>!</p>
<p>{emailMessage}</p>
<p><a href="{downloadUrl}" style="background: #007cba; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Download Now</a></p>
```

## 🔑 TinyMCE API Key (Optional)

For production use, get a free API key:

1. **Sign up** at [TinyMCE Cloud](https://www.tiny.cloud/)
2. **Get your API key** from the dashboard
3. **Update Admin.jsx**:

```javascript
// Replace in src/components/Admin.jsx:
apiKey="no-api-key"
// With:
apiKey="your-actual-api-key-here"
```

**Note**: The editor works without an API key for development, but you'll see a "This domain is not registered" message.

## 📊 Admin Interface Features

### Payment Plans Table
- View all payment plans
- See pricing and categories
- Quick edit access

### Create/Edit Form
- Two-column layout for better organization
- Rich text editor for email templates
- Real-time form validation
- Success/error messaging

### Email Template System
- **Fallback Logic**: Uses custom template if available, otherwise uses default
- **Dynamic Content**: Placeholders replaced automatically
- **Rich Formatting**: Full HTML support with TinyMCE

## 🛠️ Database Structure

### Payment Plans Table
```sql
CREATE TABLE payment_plans (
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
  email_html_template TEXT,  -- Rich text from TinyMCE
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🚀 API Endpoints

### Public Routes
- `GET /api/payment-plans` - List all plans
- `GET /api/payment-plans/:id` - Get single plan
- `POST /api/create-checkout-session` - Create Stripe payment
- `POST /api/verify-payment` - Process payments

### Admin Routes
- `POST /api/admin/payment-plans` - Create new plan
- `PUT /api/admin/payment-plans/:id` - Update plan
- `DELETE /api/admin/payment-plans/:id` - Delete plan

## 💡 Tips & Best Practices

### Email Templates
1. **Keep it simple** - Complex layouts may break in some email clients
2. **Test thoroughly** - Send test emails to different providers
3. **Use inline CSS** - Better compatibility than external stylesheets
4. **Include alt text** - For images in case they don't load

### Pricing
- Always use cents (1499 = $14.99)
- Consistent pricing structure
- Clear value proposition

### Categories
- Use consistent category names
- Consider creating category-specific templates
- Group related products

## 🔧 Troubleshooting

### Rich Text Editor Issues
- **Domain not registered**: Get a TinyMCE API key
- **Editor not loading**: Check browser console for errors
- **Content not saving**: Verify handleEditorChange function

### Database Issues
- **Plans not showing**: Check database initialization
- **Update failures**: Verify required fields are provided
- **Performance**: SQLite handles hundreds of plans easily

### Email Issues
- **Templates not working**: Check placeholder syntax
- **Fallback to default**: Verify email_html_template has content
- **Formatting issues**: Test with different email clients

## 🎉 What's Next?

Your admin system is now ready for professional use! You can:

1. **Create custom email templates** for each product
2. **Manage all your fitness programs** from one interface
3. **Track customer purchases** in the database
4. **Scale easily** by adding new products anytime

The system automatically handles Stripe payments, sends custom emails, and tracks everything in the database. Perfect for scaling your fitness business! 💪 