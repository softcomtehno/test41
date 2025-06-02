import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/pizzas';

interface PizzaFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const PizzaFilter: React.FC<PizzaFilterProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-heading font-bold mb-4">Категории</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default PizzaFilter;