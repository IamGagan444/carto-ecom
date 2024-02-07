// PageNotFound.js
import React from 'react';
import { motion } from 'framer-motion';

const PageNotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center h-screen bg-gray-100"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <p className="text-gray-500">The page you are looking for might be in another universe.</p>
      </div>
    </motion.div>
  );
};

export default PageNotFound;
