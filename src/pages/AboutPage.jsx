import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  const team = [
    {
      id: 1,
      name: "Masum",
      position: "CEO",
      bio: "Alex has over 15 years of experience in IT leadership and software development. He founded TrinityByte with the vision of helping businesses leverage technology for growth.",
      image: "...."
    },
    {
      id: 2,
      name: "Akram",
      position: "CTO & Head of Development",
      bio: "With a background in computer science and cloud architecture, Sarah leads our technical strategy and ensures we stay at the cutting edge of technology.",
       image: "...."
    },
    {
      id: 3,
      name: "Aytullah",
      position: "Head of Marketing",
      bio: "Aytullah brings 10+ years of software development expertise, specializing in creating scalable and robust applications for enterprise clients.",
       image: "...."
    },
    {
      id: 4,
      name: "Minhaj",
      position: "Head of Financial",
      bio: "Minhaj combines design thinking with user psychology to create engaging and intuitive digital experiences for our clients.",
       image: "...."
    },
    {
      id: 5,
      name: "Yeakub",
      position: "Head of Operating",
      bio: "Minhaj combines design thinking with user psychology to create engaging and intuitive digital experiences for our clients.",
       image: "...."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">About TrinityByte</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are a team of passionate technology experts dedicated to helping businesses succeed in the digital world.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img src="https://img.freepik.com/free-psd/membership-instagram-stories_23-2149176234.jpg?t=st=1745062900~exp=1745066500~hmac=d3b4da5a91a7af167ff07196a846a9bb7c6272a434fe427b81f32f810da22d92&w=740" alt="TrinityByte Office" className="rounded-lg shadow-xl" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4">
                Founded in 2025, TrinityByte began as a small team of developers with a big vision: to make enterprise-grade technology solutions accessible to businesses of all sizes.
              </p>
              <p className="mb-4">
                What started as a web development agency quickly evolved into a comprehensive IT solutions provider as we recognized the growing needs of our clients for integrated technology services.
              </p>
              <p className="">
                Today, we are proud to serve clients across multiple industries, helping them navigate the complex digital landscape and leverage technology for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-gray-600 font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            To help businesses grow with smart, efficient, and automated software solutions.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-gray-600 font-bold mb-6">Our Vission</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
          To become a global leader in software solutions, transforming businesses with AI-driven automation and seamless digital integration.
          </p>
        </div>
      </section> 

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl text-gray-600 font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from code quality to client communication and project delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl text-gray-600 font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and creative approaches to deliver innovative solutions that address complex business challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl text-gray-600 font-bold mb-2">Partnership</h3>
              <p className="text-gray-600">
                We build long-term relationships with our clients, working as partners in their success rather than just service providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold  text-gray-600 text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(member => (
              <div key={member.id} className="bg-white p-6 rounded-lg shadow-md">
                <img src={member.image} alt={member.name} className="w-full h-64 text-gray-600 object-cover rounded-lg mb-6" />
                <h3 className="text-xl text-gray-600 font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TrinityByte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
                <p className="">
                  Our team consists of experienced professionals with deep expertise in various technology domains.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                <p className="">
                  We develop tailored solutions that address your specific business needs rather than offering one-size-fits-all packages.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collaborative Approach</h3>
                <p className="">
                  We believe in working closely with our clients throughout the project lifecycle, ensuring transparency and alignment.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                <p className="">
                  We adhere to rigorous quality standards and testing procedures to deliver reliable and robust solutions.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                <p className="">
                  Our commitment doesn't end with project delivery; we provide continuous support and maintenance services.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Industry Expertise</h3>
                <p className="">
                  We have served clients across various industries, giving us insights into specific sector challenges and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss how we can help your business achieve its technology goals.
          </p>
          <Link to="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;