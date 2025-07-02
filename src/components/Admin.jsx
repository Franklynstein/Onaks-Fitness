import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { API_BASE_URL } from '../config/api';

const tiny_mce_api_key = import.meta.env.VITE_TINYMCE_API_KEY;

const Admin = () => {
  const [paymentPlans, setPaymentPlans] = useState([]);
  const [editingPlan, setEditingPlan] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    price: '',
    category: '',
    download_file_path: '',
    download_url: '',
    email_subject: '',
    email_message: '',
    email_html_template: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [uploadingFile, setUploadingFile] = useState(false);

  // Fetch all payment plans
  const fetchPaymentPlans = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/payment-plans`);
      const plans = await response.json();
      setPaymentPlans(plans);
    } catch (error) {
      console.error('Error fetching payment plans:', error);
      setMessage('Error fetching payment plans');
    }
  };

  useEffect(() => {
    fetchPaymentPlans();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle TinyMCE editor changes
  const handleEditorChange = (content, editor) => {
    setFormData(prev => ({
      ...prev,
      email_html_template: content
    }));
  };

  // Handle file upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    if (file.type !== 'application/pdf') {
      setMessage('Error: Only PDF files are allowed');
      return;
    }

    // Validate file size (10MB limit)
    if (file.size > 100 * 1024 * 1024) {
      setMessage('Error: File size must be less than 10MB');
      return;
    }

    setUploadingFile(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('pdfFile', file);

      const response = await fetch(`${API_BASE_URL}/api/admin/upload-pdf`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        // Update form data with uploaded file URLs
        setFormData(prev => ({
          ...prev,
          download_url: result.downloadUrl,
          download_file_path: result.filePath
        }));
        setMessage(`File uploaded successfully: ${result.originalName}`);
      } else {
        setMessage(`Upload failed: ${result.message}`);
      }
    } catch (error) {
      setMessage(`Upload error: ${error.message}`);
    }

    setUploadingFile(false);
    // Clear the file input
    event.target.value = '';
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      id: '',
      title: '',
      description: '',
      price: '',
      category: '',
      download_file_path: '',
      download_url: '',
      email_subject: '',
      email_message: '',
      email_html_template: ''
    });
    setEditingPlan(null);
    setShowForm(false);
  };

  // Create new payment plan
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const planData = {
        ...formData,
        price: parseInt(formData.price)
      };

      const response = await fetch(`${API_BASE_URL}/api/admin/payment-plans`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(planData),
      });

      if (response.ok) {
        setMessage('Payment plan created successfully!');
        resetForm();
        fetchPaymentPlans();
      } else {
        const error = await response.json();
        setMessage(`Error: ${error.message}`);
      }
    } catch (error) {
      setMessage(`Error creating payment plan: ${error.message}`);
    }

    setLoading(false);
  };

  // Update payment plan
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const planData = {
        ...formData,
        price: parseInt(formData.price)
      };

      const response = await fetch(`${API_BASE_URL}/api/admin/payment-plans/${editingPlan}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(planData),
      });

      if (response.ok) {
        setMessage('Payment plan updated successfully!');
        resetForm();
        fetchPaymentPlans();
      } else {
        const error = await response.json();
        setMessage(`Error: ${error.message}`);
      }
    } catch (error) {
      setMessage(`Error updating payment plan: ${error.message}`);
    }

    setLoading(false);
  };

  // Edit payment plan
  const handleEdit = (plan) => {
    setFormData({
      id: plan.id,
      title: plan.title,
      description: plan.description || '',
      price: plan.price.toString(),
      category: plan.category || '',
      download_file_path: plan.download_file_path || '',
      download_url: plan.download_url || '',
      email_subject: plan.email_subject || '',
      email_message: plan.email_message || '',
      email_html_template: plan.email_html_template || ''
    });
    setEditingPlan(plan.id);
    setShowForm(true);
  };

  // Format price for display
  const formatPrice = (priceInCents) => {
    return `$${(priceInCents / 100).toFixed(2)}`;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Payment Plans Admin</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add New Plan
          </button>
        </div>

        {message && (
          <div className={`p-4 rounded-lg mb-6 ${
            message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          }`}>
            {message}
          </div>
        )}

        {/* Payment Plans Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paymentPlans.map((plan) => (
                <tr key={plan.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 font-mono text-sm">{plan.id}</td>
                  <td className="px-4 py-2 font-semibold">{plan.title}</td>
                  <td className="px-4 py-2">{formatPrice(plan.price)}</td>
                  <td className="px-4 py-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {plan.category}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEdit(plan)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Enhanced Form with Rich Text Editor */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">
                {editingPlan ? 'Edit Payment Plan' : 'Create Payment Plan'}
              </h2>

              <form onSubmit={editingPlan ? handleUpdate : handleCreate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column - Basic Info */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Plan ID *</label>
                      <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleInputChange}
                        disabled={editingPlan}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="male-fat-loss"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Title *</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Male Fat Loss Program"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Program description..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Price (cents) *</label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="1499 for $14.99"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Category</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="specialty">Specialty</option>
                        <option value="guide">Guide</option>
                        <option value="nutrition">Nutrition</option>
                      </select>
                    </div>
                  </div>

                  {/* Right Column - Download & Email */}
                  <div className="space-y-4">
                    {/* File Upload Section */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Upload PDF File</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileUpload}
                          disabled={uploadingFile}
                          className="hidden"
                          id="pdf-upload"
                        />
                        <label 
                          htmlFor="pdf-upload" 
                          className={`cursor-pointer flex flex-col items-center space-y-2 ${uploadingFile ? 'opacity-50' : ''}`}
                        >
                          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                          <span className="text-sm text-gray-600">
                            {uploadingFile ? 'Uploading...' : 'Click to upload PDF or drag and drop'}
                          </span>
                          <span className="text-xs text-gray-400">PDF files only, max 10MB</span>
                        </label>
                      </div>
                    </div>

                    <div className="text-center text-gray-500 text-sm">
                      OR enter URLs manually:
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Download URL</label>
                      <input
                        type="url"
                        name="download_url"
                        value={formData.download_url}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://onaksfitness.com/pdfs/program.pdf"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Download File Path</label>
                      <input
                        type="text"
                        name="download_file_path"
                        value={formData.download_file_path}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="/pdfs/program.pdf"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email Subject</label>
                      <input
                        type="text"
                        name="email_subject"
                        value={formData.email_subject}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="🔥 Your Program is Here!"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email Message (Plain Text)</label>
                      <textarea
                        name="email_message"
                        value={formData.email_message}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Thank you for purchasing this program..."
                      />
                    </div>
                  </div>
                </div>

                {/* Full Width Rich Text Editor */}
                <div className="mt-6">
                  <label className="block text-sm font-medium mb-2">Email HTML Template (Rich Text)</label>
                  <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <Editor
                      apiKey={tiny_mce_api_key}
                      value={formData.email_html_template}
                      onEditorChange={handleEditorChange}
                      init={{
                        height: 400,
                        menubar: false,
                        plugins: [
                          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                          'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                          'bold italic forecolor backcolor | alignleft aligncenter ' +
                          'alignright alignjustify | bullist numlist outdent indent | ' +
                          'removeformat | link image | code preview',
                        content_style: 'body { font-family: Arial, sans-serif; font-size: 14px; }',
                        placeholder: 'Create your custom email template here...'
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Use this editor to create a rich HTML email template. You can include formatting, links, and basic styling.
                  </p>
                </div>

                <div className="flex justify-end space-x-4 mt-8">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Saving...' : (editingPlan ? 'Update Plan' : 'Create Plan')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin; 