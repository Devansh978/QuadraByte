import { useState, useRef } from 'react';
import { Mail, Phone, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import meeting from '../assets/meeting.png';

export default function Contact() {
  const form = useRef();
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
  const [submissionMessage, setSubmissionMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmissionStatus('sending');
    setSubmissionMessage('');

    emailjs
      .sendForm('service_9tr7lyd', 'template_scfp42j', form.current, {
        publicKey: 'GBGTvJUrIquVPzL1I',
      })
      .then(
        () => {
          setSubmissionStatus('success');
          setSubmissionMessage('Thank you! Your message has been sent successfully. We will get back to you soon.');
          form.current.reset();
        },
        (error) => {
          setSubmissionStatus('error');
          setSubmissionMessage(`Sorry, something went wrong. ${error.text || 'Please try again later.'}`);
          console.error('Email send error:', error);
        }
      );
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
              <form ref={form} onSubmit={sendEmail} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="yash nema"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="yash@quadrabyte.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="user_phone"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="+91 8305603771"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="user_company"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="QuadraByte"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                  <textarea
                    name="message"
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
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>{submissionMessage}</p>
                  </div>
                )}

                {submissionStatus === 'error' && (
                  <div className="flex items-start gap-2 text-red-600 p-3 bg-red-50 rounded-lg text-sm sm:text-base">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
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
