// src/components/WhyChooseUs.jsx
import React from 'react';
import { Award, Shield, Users, Clock, CheckCircle, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="h-12 w-12" />,
      title: 'We are Professionals',
      description: 'We have well-trained professionals specialized in the glass industry. Glass should be handled with care; we are equipped and experienced.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'We are Trusted',
      description: 'Profoundly committed to fulfilling customer needs. Our professionally trained experts are available for you anytime.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'We are Expert',
      description: 'Whether it\'s a small piece of glass or an entire project, we provide quick, reliable service with expert craftsmanship.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Headphones className="h-12 w-12" />,
      title: 'We\'re here to help',
      description: 'Our team puts knowledge and enthusiasm into every project. We tackle even the trickiest jobs with confidence.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: '12+ Years Experience',
      description: 'Over a decade of experience in the glass industry ensures quality workmanship and reliable solutions.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: 'Quality Guarantee',
      description: 'Every installation comes with our quality guarantee. We ensure 100% customer satisfaction.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4 shadow-lg">
            Why Choose Sri Venu Glass
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Excellence in Every Installation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise, quality materials, and professional service to deliver 
            glass solutions that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8 text-center">How We Work</h3>
            <p className="text-xl mb-12 text-center opacity-90 max-w-3xl mx-auto">
              From your initial contact to project completion, we're with you at every step
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-9 gap-4">
              {[
                { step: '01', title: 'Reach Us' },
                { step: '02', title: 'Discussion' },
                { step: '03', title: 'Rough Measurement' },
                { step: '04', title: 'Design & Ideas' },
                { step: '05', title: 'Quote' },
                { step: '06', title: 'Contract' },
                { step: '07', title: 'Final Measurement' },
                { step: '08', title: 'Start Work' },
                { step: '09', title: 'Finish Work' }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                    <div className="text-3xl font-bold text-blue-300 mb-2">{item.step}</div>
                    <div className="font-semibold">{item.title}</div>
                  </div>
                  {index < 8 && (
                    <div className="hidden xl:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent transform translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;