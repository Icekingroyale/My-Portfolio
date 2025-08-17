import React, { useState, useRef, useEffect } from 'react';

// Simple text-based fallback components
const CheckIcon = () => <span>✓</span>;
const CrossIcon = () => <span>✕</span>;
const SendIcon = () => <span>✉️</span>;

// Load EmailJS from CDN
const loadEmailJS = () => {
  return new Promise((resolve) => {
    if (window.emailjs) {
      window.emailjs.init('HU0YKBfkcE-kEfjFQ');
      return resolve(true);
    }
    
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      window.emailjs.init('HU0YKBfkcE-kEfjFQ');
      resolve(true);
    };
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const HomepageContact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ 
    loading: false, 
    success: null, 
    error: null 
  });
  const [isEmailJSReady, setIsEmailJSReady] = useState(false);
  const [initError, setInitError] = useState(null);

  // Load EmailJS when component mounts
  useEffect(() => {
    const init = async () => {
      try {
        const loaded = await loadEmailJS();
        if (loaded) {
          setIsEmailJSReady(true);
        } else {
          setInitError('Failed to load email service. Please try again later.');
        }
      } catch (error) {
        console.error('Error initializing EmailJS:', error);
        setInitError('Failed to initialize email service.');
      }
    };

    init();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    if (!isEmailJSReady) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: 'Email service is not ready. Please try again.' 
      });
      return;
    }

    const serviceId = 'service_znuelhq';
    const templateId = 'template_h3s3f8r';

    try {
      if (!window.emailjs) {
        throw new Error('Email service not available');
      }

      await window.emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message
        }
      );

      setStatus({ loading: false, success: true, error: null });
      setFormData({
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: null }));
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({ 
        loading: false, 
        success: false, 
        error: 'Failed to send message. Please try again later.' 
      });
    }
  };

  return (
    <div >
      <div className="min-h-screen bg-green-700 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum-dark.png')] flex flex-col items-center justify-center gap-10">
        {initError && (
          <div className="mb-6 p-4 bg-yellow-100 text-yellow-700 rounded-lg">
            {initError}
          </div>
        )}
        <h2 className="" >Contact Me</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-10 mx-5 my-5 justify-center w-80 md:w-3/5 md:mx-auto'>
          <div className='flex flex-col md:flex-row gap-10 md:gap-5'>
          
            <input 
              type="text" 
              name="from_name"
              placeholder='Name' 
              className='h-10 rounded-xl px-4 w-full' 
              value={formData.from_name}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="from_email"
              placeholder='Email Address' 
              className='h-10 rounded-xl px-4 w-full' 
              value={formData.from_email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea 
            name="message"
            placeholder='Write me a Message...' 
            className='h-60 rounded-xl px-4' 
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button 
            type="submit" 
            className='w-1/2 md:w-full mx-auto h-10 text-white bg-gray-800 rounded-md hover:bg-gray-950' 
            disabled={status.loading}
          >
            {status.loading ? 'Sending...' : 'Send'}
          </button>
          
          {status.success && (
            <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {status.error && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center">
              {status.error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default HomepageContact;
