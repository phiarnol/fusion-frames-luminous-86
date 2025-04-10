
import React from 'react';
import { Film, Edit, Camera, Tv, Music, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="py-20 bg-midnight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-cyan">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of video editing and post-production services tailored to your specific needs, combining technical expertise with creative vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Edit />}
            title="Video Editing"
            description="Professional video editing services including color grading, transitions, and effects to create a polished final product."
          />
          <ServiceCard 
            icon={<Film />}
            title="Post-Production"
            description="Complete post-production workflow including sound design, visual effects, and final mastering."
          />
          <ServiceCard 
            icon={<Camera />}
            title="Content Creation"
            description="End-to-end content creation services for social media, advertising, and marketing campaigns."
          />
          <ServiceCard 
            icon={<Tv />}
            title="Motion Graphics"
            description="Eye-catching motion graphics and animations to enhance your videos and create engaging visual experiences."
          />
          <ServiceCard 
            icon={<Music />}
            title="Audio Editing"
            description="Professional audio editing, mixing, and sound design to ensure your videos sound as good as they look."
          />
          <ServiceCard 
            icon={<Code />}
            title="VFX & 3D Animation"
            description="Custom visual effects and 3D animations to bring your creative vision to life with stunning visuals."
          />
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-cyan hover:bg-cyan/80 text-midnight font-bold">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="bg-gradient-to-br from-midnight to-midnight/80 p-6 rounded-xl border border-cyan/20 hover:border-cyan/40 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]">
    <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center mb-4 text-cyan group-hover:bg-cyan/20 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-300">
      {description}
    </p>
  </div>
);

export default Services;
