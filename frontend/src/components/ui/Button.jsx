/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiExternalLink } from 'react-icons/fi';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon = null,
  iconPosition = 'right',
  className = '',
  disabled = false,
  ...props
}) => {
  // Variant styles
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
    secondary: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-blue-400 dark:border-blue-400',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-green-600 text-white hover:bg-green-700'
  };

  // Size styles
  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-5 py-2.5 text-base',
    large: 'px-6 py-3 text-lg'
  };

  // Icon mapping
  const icons = {
    arrow: <FiArrowRight className="ml-2" />,
    download: <FiDownload className="ml-2" />,
    external: <FiExternalLink className="ml-2" />,
    // Add more icons as needed
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`
        rounded-lg font-medium transition-all duration-200
        flex items-center justify-center
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2">
          {typeof icon === 'string' ? icons[icon] : icon}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">
          {typeof icon === 'string' ? icons[icon] : icon}
        </span>
      )}
    </motion.button>
  );
};

export default Button;