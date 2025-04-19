import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'Select a service'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally submit the form to your backend
    console.log('Form submitted:', formData);
    // For demo purposes, we'll just show a success message
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: 'Select a service'
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have a question or ready to start a project? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex">
            {/* Contact Form */}
            <div className="md:w-2/3 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              {formSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6" role="alert">
                  <p className="font-bold">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option disabled>Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="IT Consulting">IT Consulting</option>
                    <option value="Cybersecurity Services">Cybersecurity Services</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <div className="mb-6">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="md:w-1/3 mt-12 md:mt-0">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl text-gray-600 font-bold mb-6">Contact Information</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-600 mb-2">Address</h4>
                  <address className="not-italic text-gray-600">
                    Bansree, Rampura<br />
                    Dhaka, Bangladesh<br /> 
                  </address>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-600 mb-2">Email</h4>
                  <p className="text-gray-600">contact@trinitybyte.com</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-600 mb-2">Phone</h4>
                  <p className="text-gray-600">123234345</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-600 mb-2">Working Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>

              {/* Google Map Placeholder */}
              <div className="mt-6 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-600">Google Map Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-600 text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl text-gray-600 font-bold mb-2">How long does it take to develop a custom website?</h3>
              <p className="text-gray-600">
                The timeline for website development varies based on complexity and requirements. A simple website might take 4-6 weeks, while more complex projects can take 3-6 months.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl text-gray-600 font-bold mb-2">Do you provide ongoing maintenance for your solutions?</h3>
              <p className="text-gray-600">
                Yes, we offer various maintenance and support packages to ensure your solutions remain up-to-date, secure, and performant after launch.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl text-gray-600 font-bold mb-2">What industries do you work with?</h3>
              <p className="text-gray-600">
                We work with clients across diverse industries including healthcare, finance, education, retail, manufacturing, and non-profits.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-gray-600 font-bold mb-2">How do you handle project pricing?</h3>
              <p className="text-gray-600">
                We provide customized quotes based on project requirements. Depending on the project, we may work on a fixed-price basis or time and materials model.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;