/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '../ui/AnimatedBackground';

const EyesFollowingCursor = () => {
  const [leftEyePosition, setLeftEyePosition] = useState({ x: 50, y: 50 });
  const [rightEyePosition, setRightEyePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const eyeSize = 60;
  const pupilSize = 20;
  const faceSize = 300;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Face center coordinates
      const faceCenterX = rect.width / 2;
      const faceCenterY = rect.height / 2;
      
      // Eye center coordinates (left and right)
      const leftEyeCenterX = faceCenterX - 50;
      const leftEyeCenterY = faceCenterY - 30;
      const rightEyeCenterX = faceCenterX + 50;
      const rightEyeCenterY = faceCenterY - 30;
      
      // Cursor position relative to container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate angle and position for left eye
      const leftAngle = Math.atan2(y - leftEyeCenterY, x - leftEyeCenterX);
      const leftMaxDistance = (eyeSize - pupilSize) / 2;
      const leftPupilX = leftEyeCenterX + Math.cos(leftAngle) * leftMaxDistance - pupilSize / 2;
      const leftPupilY = leftEyeCenterY + Math.sin(leftAngle) * leftMaxDistance - pupilSize / 2;
      
      // Calculate angle and position for right eye
      const rightAngle = Math.atan2(y - rightEyeCenterY, x - rightEyeCenterX);
      const rightMaxDistance = (eyeSize - pupilSize) / 2;
      const rightPupilX = rightEyeCenterX + Math.cos(rightAngle) * rightMaxDistance - pupilSize / 2;
      const rightPupilY = rightEyeCenterY + Math.sin(rightAngle) * rightMaxDistance - pupilSize / 2;
      
      setLeftEyePosition({ x: leftPupilX, y: leftPupilY });
      setRightEyePosition({ x: rightPupilX, y: rightPupilY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Interactive Eyes
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
              Move your cursor around the face below and watch its eyes follow your every move!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center cursor-none"
            style={{ width: `${faceSize}px`, height: `${faceSize}px` }}
            ref={containerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Face */}
            <motion.div 
              className={`absolute w-full h-full rounded-full bg-amber-200 dark:bg-amber-300 shadow-2xl border-8 border-amber-300 dark:border-amber-400 transition-all duration-300 ${
                isHovering ? 'scale-105' : 'scale-100'
              }`}
              whileHover={{ rotate: 5 }}
            ></motion.div>
            
            {/* Left Eye */}
            <div 
              className="absolute left-1/4 top-1/3 w-14 h-14 rounded-full bg-white dark:bg-gray-100 flex items-center justify-center shadow-inner"
              style={{ width: `${eyeSize}px`, height: `${eyeSize}px` }}
            >
              <div 
                className="rounded-full bg-gray-800 dark:bg-gray-900 transition-all duration-100 ease-out"
                style={{
                  width: `${pupilSize}px`,
                  height: `${pupilSize}px`,
                  transform: `translate(${leftEyePosition.x - (faceSize/2 - 50 - pupilSize/2)}px, ${leftEyePosition.y - (faceSize/2 - 30 - pupilSize/2)}px)`,
                  boxShadow: '0 0 8px rgba(0,0,0,0.3)'
                }}
              ></div>
            </div>
            
            {/* Right Eye */}
            <div 
              className="absolute right-1/4 top-1/3 w-14 h-14 rounded-full bg-white dark:bg-gray-100 flex items-center justify-center shadow-inner"
              style={{ width: `${eyeSize}px`, height: `${eyeSize}px` }}
            >
              <div 
                className="rounded-full bg-gray-800 dark:bg-gray-900 transition-all duration-100 ease-out"
                style={{
                  width: `${pupilSize}px`,
                  height: `${pupilSize}px`,
                  transform: `translate(${rightEyePosition.x - (faceSize/2 + 50 - pupilSize/2)}px, ${rightEyePosition.y - (faceSize/2 - 30 - pupilSize/2)}px)`,
                  boxShadow: '0 0 8px rgba(0,0,0,0.3)'
                }}
              ></div>
            </div>
            
            {/* Smile */}
            <motion.div 
              className={`absolute bottom-1/3 w-1/2 h-1/4 rounded-full transition-all duration-300 ${
                isHovering ? 'h-1/5' : 'h-1/6'
              }`}
              style={{
                backgroundColor: 'transparent',
                borderBottom: '6px solid #4b5563',
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                height: '30px',
                width: '120px',
                borderRadius: '0 0 60px 60px'
              }}
              animate={isHovering ? { scale: 1.1 } : { scale: 1 }}
            ></motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">Try moving your cursor in circles!</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">The eyes will track your movement with precision</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EyesFollowingCursor;