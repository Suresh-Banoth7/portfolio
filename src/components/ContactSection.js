import { useState } from "react";

const ContactSection = ({ id }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [status, setStatus] = useState(" ");
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('Sending...');
      // In a real application, you would send this data to a backend service
      // For demonstration, we'll just simulate a successful send
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form Data Submitted:', formData);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } catch (error) {
        console.error('Error submitting form:', error);
        setStatus('Failed to send message. Please try again.');
      }
    };
  
    return (
      <section id={id} className="py-20 px-8 bg-gray-100 rounded-3xl my-12 mx-auto max-w-5xl shadow-2xl">
        <h2 className="text-5xl font-extrabold text-center text-indigo-800 mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 text-center mb-8">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Suresh Banoth"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="sureshbanoth0397@gmail.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
            {status && (
              <p className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    );
  };
export default ContactSection  