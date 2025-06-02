import React from 'react';
import { Pizza } from '../types';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus } from 'lucide-react';

interface PizzaCardProps {
  pizza: Pizza;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(pizza);
  };

  return (
    <motion.div 
      className="card card-hover"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={pizza.imageUrl} 
          alt={pizza.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
          <span className="text-sm font-bold text-primary-dark">
            {pizza.price} сом
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-heading font-semibold mb-2">{pizza.name}</h3>
        <p className="text-gray-600 text-sm mb-4 h-12 overflow-hidden">
          {pizza.description}
        </p>
        <button 
          onClick={handleAddToCart}
          className="btn-primary w-full flex items-center justify-center"
        >
          <ShoppingCart size={16} className="mr-2" />
          <span>В корзину</span>
        </button>
      </div>
    </motion.div>
  );
};

export default PizzaCard;