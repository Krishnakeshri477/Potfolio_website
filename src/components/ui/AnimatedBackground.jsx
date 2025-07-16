/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const AnimatedBackground = ({ opacity = 10, darkOpacity = 5, color = 'blue', darkColor = 'purple' }) => {
  return (
    <motion.div 
      className={`absolute inset-0 overflow-hidden opacity-${opacity} dark:opacity-${darkOpacity}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: opacity / 100 }}
      transition={{ duration: 2 }}
    >
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-${color}-400 dark:bg-${darkColor}-500`}
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </motion.div>
  );
};

export default AnimatedBackground;