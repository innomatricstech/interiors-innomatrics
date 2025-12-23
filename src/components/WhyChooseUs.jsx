import React from 'react';
import { Award, Shield, Users, Clock, CheckCircle, Headphones, Zap, ChevronRight } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="h-12 w-12" />,
      title: 'We are Professionals',
      description: 'We have well-trained professionals specialized in the glass industry. Glass should be handled with care; we are equipped and experienced.',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'We are Trusted',
      description: 'Profoundly committed to fulfilling customer needs. Our professionally trained experts are available for you anytime.',
      gradient: 'from-blue-600 to-sky-600'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'We are Expert',
      description: 'Whether it\'s a small piece of glass or an entire project, we provide quick, reliable service with expert craftsmanship.',
      gradient: 'from-sky-600 to-blue-600'
    },
    {
      icon: <Headphones className="h-12 w-12" />,
      title: 'We\'re here to help',
      description: 'Our team puts knowledge and enthusiasm into every project. We tackle even the trickiest jobs with confidence.',
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: '12+ Years Experience',
      description: 'Over a decade of experience in the glass industry ensures quality workmanship and reliable solutions.',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: 'Quality Guarantee',
      description: 'Every installation comes with our quality guarantee. We ensure 100% customer satisfaction.',
      gradient: 'from-indigo-600 to-blue-600'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Reach Us', description: 'Initial contact and consultation' },
    { step: '02', title: 'Discussion', description: 'Detailed project requirements' },
    { step: '03', title: 'Rough Measurement', description: 'On-site assessment' },
    { step: '04', title: 'Design & Ideas', description: 'Creative visualization' },
    { step: '05', title: 'Quote', description: 'Transparent pricing' },
    { step: '06', title: 'Contract', description: 'Formal agreement' },
    { step: '07', title: 'Final Measurement', description: 'Precise measurements' },
    { step: '08', title: 'Start Work', description: 'Begin installation' },
    { step: '09', title: 'Finish Work', description: 'Quality inspection & handover' }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Blue Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-sky-900/30 to-cyan-900/20 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-cyan-500/10 mix-blend-overlay"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Glass Container */}
        <div className="backdrop-blur-xl bg-gradient-to-b from-white/80 via-white/60 to-white/40 rounded-3xl border border-white/20 shadow-2xl shadow-blue-900/10 p-8 md:p-12">
          
          {/* Header with Glass Effect */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-3xl rounded-full"></div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-blue-500/20">
                <Zap className="h-4 w-4" />
                Why Choose Sri Venu Glass
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-900 via-sky-900 to-cyan-900 bg-clip-text text-transparent">
                Excellence in Every Installation
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-700 leading-relaxed backdrop-blur-sm bg-white/40 rounded-2xl p-8 border border-white/40">
                  We combine expertise, quality materials, and professional service to deliver 
                  glass solutions that exceed expectations. Experience the perfect blend of 
                  craftsmanship, innovation, and reliability.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid with Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group backdrop-blur-xl bg-gradient-to-br from-white/60 via-white/40 to-white/30 rounded-3xl p-8 border border-white/30 shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Glass shine effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-shine"></div>
                
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-20 h-20 backdrop-blur-sm bg-gradient-to-r ${feature.gradient} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-700 backdrop-blur-sm bg-white/40 rounded-xl p-4 border border-white/40">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Process Timeline with Glass Effects */}
          <div className="relative rounded-3xl overflow-hidden mb-20">
            {/* Background with Glass Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-sky-900/80 to-cyan-900/90 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 opacity-20" style={{
                background: `linear-gradient(90deg, 
                  rgba(59, 130, 246, 0.1) 0%, 
                  rgba(14, 165, 233, 0.15) 25%, 
                  rgba(6, 182, 212, 0.1) 50%, 
                  rgba(14, 165, 233, 0.15) 75%, 
                  rgba(59, 130, 246, 0.1) 100%)`,
                backgroundSize: '200% 100%',
                animation: 'gradientShift 8s ease infinite'
              }}></div>
            </div>
            
            <div className="relative p-12 md:p-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-400/40 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-blue-500/30">
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                  Our Work Process
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  How We Work
                </h3>
                
                <p className="text-xl text-gray-200 max-w-3xl mx-auto backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 leading-relaxed">
                  From your initial contact to project completion, we're with you at every step, 
                  ensuring transparency, quality, and satisfaction throughout the journey.
                </p>
              </div>

              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-9 gap-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative group">
                    <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>
                      <div className="font-semibold text-white mb-2">{step.title}</div>
                      <div className="text-sm text-blue-100 opacity-80">{step.description}</div>
                    </div>
                    
                    {/* Connector lines */}
                    {index < processSteps.length - 1 && (
                      <>
                        {/* Mobile connector */}
                        <div className="md:hidden absolute bottom-0 left-1/2 h-4 w-0.5 bg-gradient-to-b from-blue-400/50 to-transparent transform -translate-x-1/2 translate-y-full"></div>
                        
                        {/* Desktop connector */}
                        <div className="hidden md:block lg:hidden absolute top-1/2 right-0 w-4 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent transform translate-x-full -translate-y-1/2"></div>
                        
                        {/* Tablet connector */}
                        <div className="hidden lg:block xl:hidden absolute top-1/2 right-0 w-4 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent transform translate-x-full -translate-y-1/2"></div>
                        
                        {/* Desktop connector (for 9 columns) */}
                        <div className="hidden xl:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-blue-400/30 via-blue-400/50 to-transparent transform translate-x-1/2"></div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Process Timeline Note */}
              <div className="mt-12 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto text-center">
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Average Timeline: 7-14 Days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Free 3D Visualization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">On-site Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customer Support */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/60 via-white/40 to-white/30 rounded-3xl p-8 border border-white/30 shadow-xl shadow-blue-900/10">
              <div className="flex items-start gap-6">
                <div className="backdrop-blur-sm bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-2xl">
                  <Headphones className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">24/7 Customer Support</h4>
                  <p className="text-gray-700 backdrop-blur-sm bg-white/40 rounded-xl p-4 border border-white/40">
                    Our dedicated support team is available round the clock to address 
                    your queries and concerns. We believe in building lasting relationships 
                    with our clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/60 via-white/40 to-white/30 rounded-3xl p-8 border border-white/30 shadow-xl shadow-blue-900/10">
              <div className="flex items-start gap-6">
                <div className="backdrop-blur-sm bg-gradient-to-r from-cyan-600 to-blue-600 p-4 rounded-2xl">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">5-Year Warranty</h4>
                  <p className="text-gray-700 backdrop-blur-sm bg-white/40 rounded-xl p-4 border border-white/40">
                    All our installations come with a comprehensive 5-year warranty. 
                    We stand behind our work and ensure complete peace of mind for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="group relative overflow-hidden backdrop-blur-sm bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Start Your Project Today
                <ChevronRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Glass shine effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-shine"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;