import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PizzaCard from '../components/PizzaCard';
import PizzaFilter from '../components/PizzaFilter';
import { pizzas } from '../data/pizzas';
import { Pizza as PizzaType } from '../types';

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredPizzas, setFilteredPizzas] = useState<PizzaType[]>(pizzas);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredPizzas(pizzas);
    } else {
      setFilteredPizzas(pizzas.filter(pizza => pizza.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Меню пиццы</h1>
        <p className="text-gray-600 mb-8">
          Выберите из нашей коллекции вкуснейших пицц, приготовленных из свежих ингредиентов
        </p>
      </motion.div>

      <PizzaFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredPizzas.map(pizza => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredPizzas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            В данной категории пока нет пицц. Пожалуйста, выберите другую категорию.
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuPage;