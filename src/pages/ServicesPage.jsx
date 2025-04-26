
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { 
  Film, Edit, Camera, Tv, Music, Code, 
  Layers, VideoIcon, Clapperboard, 
  Palette, Newspaper, GalleryThumbnails
} from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our <span className="text-cyan">Services</span></h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive video editing and production services tailored to your specific needs and creative vision.
            </p>
          </div>
          
          {/* Main services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ServiceDetailCard
              icon={<Edit className="text-cyan" size={32} />}
              title="Video Editing"
              description="Our professional video editing services transform raw footage into polished, engaging content. We handle everything from cutting and arranging clips to adding transitions, effects, and text overlays."
            />
            <ServiceDetailCard
              icon={<Film className="text-cyan" size={32} />}
              title="Post-Production"
              description="Comprehensive post-production services including color grading, sound design, visual effects, and final mastering to ensure your video meets professional standards."
            />
            <ServiceDetailCard
              icon={<Camera className="text-cyan" size={32} />}
              title="Content Creation"
              description="End-to-end content creation for various platforms including social media, websites, advertising, and marketing campaigns. We tailor content to your specific audience and goals."
            />
            <ServiceDetailCard
              icon={<Tv className="text-cyan" size={32} />}
              title="Motion Graphics"
              description="Custom motion graphics and animations that enhance your videos with dynamic visual elements, animated logos, titles, and infographics."
            />
            <ServiceDetailCard
              icon={<Music className="text-cyan" size={32} />}
              title="Audio Editing"
              description="Professional audio editing services including noise reduction, sound mixing, voice-over integration, and custom sound design to enhance the audio quality of your videos."
            />
            <ServiceDetailCard
              icon={<Code className="text-cyan" size={32} />}
              title="VFX & 3D Animation"
              description="High-quality visual effects and 3D animations to create immersive visual experiences and bring creative concepts to life with stunning detail and realism."
            />
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">
              Additional <span className="text-gold">Services</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AdditionalServiceCard 
                icon={<Layers />} 
                title="Compositing" 
              />
              <AdditionalServiceCard 
                icon={<VideoIcon />} 
                title="Video Restoration" 
              />
              <AdditionalServiceCard 
                icon={<Clapperboard />} 
                title="Trailer Creation" 
              />
              <AdditionalServiceCard 
                icon={<Palette />} 
                title="Color Grading" 
              />
              <AdditionalServiceCard 
                icon={<Newspaper />} 
                title="Promotional Videos" 
              />
              <AdditionalServiceCard 
                icon={<GalleryThumbnails />} 
                title="Slideshow Creation" 
              />
            </div>
          </div>
          
          {/* Process section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">
              Our <span className="text-cyan">Process</span>
            </h2>
            
            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-28 left-1/2 w-0.5 h-[calc(100%-120px)] bg-cyan/30 -translate-x-1/2 hidden md:block"></div>
              
              <div className="space-y-16">
                <ProcessStep 
                  number="01"
                  title="Consultation & Planning"
                  description="We start with understanding your vision, goals, and requirements. Our team collaborates with you to develop a clear plan and creative direction for your project."
                  isRight={false}
                />
                <ProcessStep 
                  number="02"
                  title="Content Review & Organization"
                  description="We review your footage and materials, organizing them effectively for the editing process and identifying the best content to include."
                  isRight={true}
                />
                <ProcessStep 
                  number="03"
                  title="Editing & Post-Production"
                  description="Our editors apply their expertise to craft your footage into a compelling narrative, adding effects, graphics, and audio enhancements as needed."
                  isRight={false}
                />
                <ProcessStep 
                  number="04"
                  title="Review & Revisions"
                  description="You'll review the work and provide feedback. We'll make any necessary revisions to ensure the final product meets your expectations."
                  isRight={true}
                />
                <ProcessStep 
                  number="05"
                  title="Final Delivery"
                  description="Once approved, we deliver your video in your preferred format and resolution, optimized for your intended distribution platform."
                  isRight={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTA />
      <Footer />
    </div>
  );
};

const ServiceDetailCard = ({ 
  icon, 
  title, 
  description 
}) => (
  <div className="bg-gradient-to-br from-midnight to-[#15154f]/80 p-8 rounded-xl border border-cyan/20 hover:border-cyan/40 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]">
    <div className="w-16 h-16 rounded-full bg-midnight/80 flex items-center justify-center mb-6 border border-cyan/30 group-hover:border-cyan/60 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-cyan transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-300">
      {description}
    </p>
  </div>
);

const AdditionalServiceCard = ({ 
  icon, 
  title 
}) => (
  <div className="bg-midnight/50 p-4 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300 flex items-center">
    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-4 text-gold">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-white">
      {title}
    </h3>
  </div>
);

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  isRight 
}) => (
  <div className={`flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
    <div className="w-16 h-16 rounded-full bg-cyan/10 border-2 border-cyan flex items-center justify-center text-2xl font-bold text-cyan z-10 shrink-0">
      {number}
    </div>
    <div className={`bg-midnight/50 p-6 rounded-xl border border-cyan/20 ${isRight ? 'md:text-right' : ''}`}>
      <h3 className="text-xl font-semibold mb-2 text-cyan">
        {title}
      </h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  </div>
);

export default ServicesPage;
