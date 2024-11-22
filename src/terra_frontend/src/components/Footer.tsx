import React from 'react';
import { motion } from 'framer-motion';
import { SocialLinks } from './SocialLinks';
import { TerraPulseLogo } from '../utils/icons';
import { pulseHover } from '../utils/animations';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial="initial"
              whileHover="hover"
              variants={pulseHover}
              className="flex items-center mb-4"
            >
              <TerraPulseLogo size={40} className="mr-2" />
              <span className="text-2xl font-bold">TerraPulse</span>
            </motion.div>
            <p className="text-gray-300 mb-4">
              Connecting the World to Conservation through innovative blockchain technology
              and gamified experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Marketplace', 'NFT Tokens', 'About Us', 'Contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <SocialLinks className="flex flex-col space-y-2" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TerraPulse. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a
                whileHover={{ y: -2 }}
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;