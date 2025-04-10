
import React from 'react';
import { Clock, Award, Zap, RefreshCw } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-midnight to-[#15154f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose <span className="text-gold">Fusion Frames</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We combine technical expertise with creative vision to deliver extraordinary results that exceed expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Clock className="text-gold" size={28} />}
            title="Fast Turnaround"
            description="We understand tight deadlines and deliver high-quality work on schedule."
          />
          <FeatureCard 
            icon={<Award className="text-gold" size={28} />}
            title="Award-Winning Team"
            description="Our talented editors have years of industry experience and recognition."
          />
          <FeatureCard 
            icon={<Zap className="text-gold" size={28} />}
            title="Cutting-Edge Tech"
            description="We use the latest software and techniques for superior results."
          />
          <FeatureCard 
            icon={<RefreshCw className="text-gold" size={28} />}
            title="Unlimited Revisions"
            description="We work with you until you're completely satisfied with the final product."
          />
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-midnight via-midnight to-[#15154f] border border-cyan/20 rounded-xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your <span className="text-cyan">Video Content?</span></h3>
              <p className="text-gray-300 mb-6">
                Whether you need professional video editing for a commercial project, social media content, or a creative film, our team is ready to bring your vision to life.
              </p>
              <a href="/contact" className="inline-block bg-gold hover:bg-gold/80 text-midnight font-semibold px-6 py-3 rounded-md transition-colors duration-300">
                Get Started
              </a>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-64 h-64 border-4 border-cyan/40 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                  <div className="w-48 h-48 border-4 border-gold/40 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan/20 to-gold/20 rounded-full flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/9e1720cf-2703-4074-b563-bd64cd03fa7a.png" 
                        alt="Fusion Frames Logo" 
                        className="w-20 h-20"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="w-72 h-72 border border-cyan/20 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="bg-midnight/50 backdrop-blur-sm p-6 rounded-lg border border-cyan/10 hover:border-cyan/30 transition-all duration-300">
    <div className="mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-white">
      {title}
    </h3>
    <p className="text-gray-300 text-sm">
      {description}
    </p>
  </div>
);

export default Features;
