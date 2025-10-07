import { useState } from 'react';
import { Mail, Phone, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import meeting from '../assets/meeting.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('sending');
    setSubmissionMessage('');

    // The URL of your backend API endpoint.
    // Make sure your backend server is running on this address.
    const apiEndpoint = 'https://quadrabyte1.onrender.com/api/send-email';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        // If the server response is not OK (e.g., status 400, 500), throw an error.
        throw new Error(result.message || 'Failed to send message. Please try again.');
      }

      // Handle success
      setSubmissionStatus('success');
      setSubmissionMessage('Thank you! Your message has been sent successfully. we will get back to you soon.');
      // Clear the form on successful submission
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });

    } catch (error) {
      // Handle errors (network errors or errors thrown from the server response)
      setSubmissionStatus('error');
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      setSubmissionMessage(`Sorry, something went wrong. ${errorMessage}`);
      console.error('Submission error:', error);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Ready to start your project? Get in touch and let's build something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          <div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="yash nema"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="yash@quadrabyte.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="+91 8305603771"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="QuadraByte"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submissionStatus === 'sending'}
                  className="w-full bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-base sm:text-lg flex items-center justify-center gap-2 group disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {submissionStatus === 'sending' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {submissionStatus === 'success' && (
                  <div className="flex items-start gap-2 text-green-600 p-3 bg-green-50 rounded-lg text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5"/>
                    <p>{submissionMessage}</p>
                  </div>
                )}

                {submissionStatus === 'error' && (
                  <div className="flex items-start gap-2 text-red-600 p-3 bg-red-50 rounded-lg text-sm sm:text-base">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5"/>
                    <p>{submissionMessage}</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-navy to-navy-light rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Get In Touch</h3>
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1 text-sm sm:text-base">Email Us</div>
                    <a href="mailto:quadrabyte04@gmail.com" className="text-white/80 hover:text-white text-sm sm:text-base break-all">
                      quadrabyte04@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1 text-sm sm:text-base">Call Us</div>
                    <a href="tel:+918319518554" className="text-white/80 hover:text-white text-sm sm:text-base">
                      +91 (831) 951-8554
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <img
                src={meeting}
                alt="Team collaboration"
                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
