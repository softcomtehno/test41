import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const CartIcon: React.FC = () => {
  const { totalItems } = useCart();
  const [animate, setAnimate] = useState(false);
  const [prevCount, setPrevCount] = useState(totalItems);

  useEffect(() => {
    if (totalItems > prevCount) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    }
    setPrevCount(totalItems);
  }, [totalItems, prevCount]);

  if (totalItems === 0) {
    return null;
  }

  return (
    <Link to="/cart">
      <motion.div
        className="fixed bottom-6 right-6 z-50 bg-primary rounded-full p-3 shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        animate={animate ? { scale: [1, 1.2, 1] } : {}}
      >
        <ShoppingCart className="text-white" size={24} />
        <AnimatePresence>
          {totalItems > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-2 -right-2 bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
            >
              {totalItems}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default CartIcon;