import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const ContactPage = () => {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = 'Name is required';
    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!values.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const subject = encodeURIComponent(`Contact from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name}\nEmail: ${values.email}`);
      window.location.href = `mailto:krishnakeshri9510ib@gmail.com?subject=${subject}&body=${body}`;
      
      setSubmitSuccess(true);
      setValues({ name: '', email: '', message: '' });
    } catch (error) {
      setErrors({ form: `${error}Failed to prepare email. Please try again.` });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitSuccess(false);
    setValues({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Add AnimatedBackground here */}
      <AnimatedBackground 
        opacity={10}
        darkOpacity={3} 
        color="blue" 
        darkColor="purple" 
      />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind or want to collaborate? Send me a message!
          </p>
        </div>

        {submitSuccess ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-6 rounded-lg text-center"
          >
            <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
            <p className="mb-4">Thank you for reaching out. I'll get back to you soon.</p>
            <Button
              onClick={resetForm}
              variant="secondary"
              size="small"
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-8 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className={`pl-10 block w-full h-12 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700/50 dark:text-white ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  placeholder="Your name"
                />
              </div>
              {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-8 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className={`pl-10 block w-full h-12 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700/50 dark:text-white ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3">
                  <FiMessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  className={`pl-10 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700/50 dark:text-white ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  placeholder="Your message..."
                />
              </div>
              {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="large"
                icon="send"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>

            {/* Form Error */}
            {errors.form && (
              <div className="rounded-md bg-red-50 dark:bg-red-900/30 p-4">
                <p className="text-sm text-red-700 dark:text-red-300">{errors.form}</p>
              </div>
            )}
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default ContactPage;
