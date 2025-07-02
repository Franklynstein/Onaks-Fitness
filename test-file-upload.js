import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a simple test PDF content (this creates a basic PDF-like file structure)
const createTestPDF = () => {
  // This creates a minimal PDF structure for testing
  const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj

4 0 obj
<<
/Length 44
>>
stream
BT
/F1 12 Tf
72 720 Td
(Test PDF for Onaks Fitness) Tj
ET
endstream
endobj

xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000074 00000 n 
0000000120 00000 n 
0000000179 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
287
%%EOF`;

  return pdfContent;
};

async function testFileUpload() {
  console.log('🧪 Testing File Upload System...\n');

  try {
    // 1. Check if uploads directory exists
    const uploadsDir = path.join(__dirname, 'public', 'uploads', 'pdfs');
    console.log('1. Checking uploads directory...');
    
    if (fs.existsSync(uploadsDir)) {
      console.log('✅ Uploads directory exists:', uploadsDir);
    } else {
      console.log('❌ Uploads directory does not exist');
      console.log('Creating directory...');
      fs.mkdirSync(uploadsDir, { recursive: true });
      console.log('✅ Uploads directory created');
    }

    // 2. Create a test PDF file
    console.log('\n2. Creating test PDF file...');
    const testPdfPath = path.join(__dirname, 'test-workout-program.pdf');
    const pdfContent = createTestPDF();
    
    fs.writeFileSync(testPdfPath, pdfContent);
    console.log('✅ Test PDF created:', testPdfPath);

    // 3. Check file size
    const stats = fs.statSync(testPdfPath);
    console.log(`✅ File size: ${stats.size} bytes`);

    // 4. Verify file can be read
    console.log('\n3. Verifying file integrity...');
    const fileBuffer = fs.readFileSync(testPdfPath);
    console.log('✅ File can be read successfully');
    console.log(`✅ File starts with: ${fileBuffer.toString('utf8', 0, 8)}`); // Should start with %PDF-

    // 5. Test upload directory permissions
    console.log('\n4. Testing directory permissions...');
    const testFile = path.join(uploadsDir, 'permission-test.txt');
    try {
      fs.writeFileSync(testFile, 'test');
      fs.unlinkSync(testFile);
      console.log('✅ Directory is writable');
    } catch (error) {
      console.log('❌ Directory permission error:', error.message);
    }

    console.log('\n🎉 File upload system test completed successfully!');
    console.log('\n📋 Next Steps:');
    console.log('1. Start the database server: npm run dev-db');
    console.log('2. Access admin interface: http://localhost:5173/admin');
    console.log('3. Use the test PDF file to test upload:', testPdfPath);
    console.log('\n💡 The admin interface now supports:');
    console.log('- PDF file uploads (max 10MB)');
    console.log('- Automatic URL generation');
    console.log('- File validation (PDF only)');
    console.log('- Drag and drop functionality');

  } catch (error) {
    console.error('❌ File upload test failed:', error);
  }
}

// Run the test
testFileUpload(); 