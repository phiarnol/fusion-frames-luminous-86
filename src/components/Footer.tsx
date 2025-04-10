
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Facebook, Mail, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-midnight border-t border-cyan/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              FUSION<span className="text-cyan">FRAMES</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Transforming ordinary footage into extraordinary stories with cutting-edge video editing technology.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/services" text="Services" />
              <FooterLink href="/contact" text="Contact" />
              <FooterLink href="/" text="Projects" />
              <FooterLink href="/" text="About Us" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300 hover:text-cyan">
                <Mail size={16} className="mr-2 text-cyan" />
                <a href="mailto:info@fusionframes.com">info@fusionframes.com</a>
              </li>
              <li className="flex items-center text-gray-300 hover:text-cyan">
                <PhoneCall size={16} className="mr-2 text-cyan" />
                <a href="tel:+1234567890">(123) 456-7890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-cyan/10">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Fusion Frames. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="/" className="w-8 h-8 rounded-full bg-midnight border border-cyan/30 flex items-center justify-center text-white hover:text-cyan hover:border-cyan transition-colors duration-300">
    {icon}
  </a>
);

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Link 
      to={href}
      className="text-gray-300 hover:text-cyan transition-colors duration-200"
    >
      {text}
    </Link>
  </li>
);

export default Footer;
