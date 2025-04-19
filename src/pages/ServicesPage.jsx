import React from 'react';
import { Link } from 'react-router-dom';

function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "We create custom web applications and responsive websites tailored to your specific business needs. Our web solutions are designed to provide optimal user experience across all devices.",
      features: [
        "Custom web application development",
        "Responsive website design",
        "E-commerce solutions",
        "Content management systems",
        "Web portal development",
        "UI/UX design"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "We develop high-performance, feature-rich mobile applications for iOS and Android platforms that help businesses engage with their customers and streamline operations.",
      features: [
        "Native iOS app development",
        "Native Android app development",
        "Cross-platform mobile solutions",
        "Mobile app UI/UX design",
        "App testing and quality assurance",
        "App maintenance and support"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Our cloud services help businesses leverage the power of cloud computing to improve scalability, reduce costs, and enhance security of their IT infrastructure.",
      features: [
        "Cloud migration strategies",
        "Cloud infrastructure setup and management",
        "AWS, Azure, and Google Cloud solutions",
        "Cloud security services",
        "Disaster recovery planning",
        "Hybrid cloud solutions"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "IT Consulting",
      description: "Our expert consultants provide strategic advice on how to optimize your technology investments and align them with your business objectives.",
      features: [
        "IT strategy development",
        "Digital transformation consulting",
        "Technology assessment and roadmapping",
        "IT architecture design",
        "Project management",
        "Vendor selection and management"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
        </svg>
      )
    },
    {
      id: 5,
      title: "Cybersecurity Services",
      description: "Protect your business from cyber threats with our comprehensive security solutions designed to safeguard your data and systems.",
      features: [
        "Security assessments and audits",
        "Penetration testing",
        "Vulnerability management",
        "Security awareness training",
        "Incident response planning",
        "Compliance management"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      )
    },
    {
      id: 6,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions that help you make better business decisions.",
      features: [
        "Business intelligence implementation",
        "Data visualization",
        "Predictive analytics",
        "Big data solutions",
        "Data warehousing",
        "Machine learning solutions"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We offer a comprehensive range of IT solutions to help your business thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className="bg-gray-100 p-8 rounded-lg flex justify-center items-center h-64">
                    <div className="text-blue-600">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <h3 className="text-xl font-bold mb-3">Key Features:</h3>
                  <ul className="list-disc pl-5 mb-6 text-gray-600">
                    {service.features.map((feature, i) => (
                      <li key={i} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-gray-600 font-bold mb-6">Ready to Get Started?</h2> 
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Contact us today to discuss how our services can help your business grow and thrive in the digital landscape.
          </p>
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;