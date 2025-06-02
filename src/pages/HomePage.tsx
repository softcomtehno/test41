import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Clock, MapPin, Phone } from 'lucide-react';
import { pizzas } from '../data/pizzas';

const HomePage: React.FC = () => {
  const featuredPizzas = pizzas.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section min-h-[500px] flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Лучшая пицца на Ыссык-Куле
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Свежие ингредиенты, традиционные рецепты и быстрая доставка
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/menu" className="btn-primary text-lg py-3 px-8">
              Посмотреть меню
            </Link>
            <Link to="/menu" className="btn-secondary text-lg py-3 px-8">
              Заказать сейчас
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-sm text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Clock className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-heading font-semibold mb-2">Время работы</h3>
              <p className="text-gray-600">Ежедневно с 10:00 до 22:00</p>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-sm text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-heading font-semibold mb-2">Наш адрес</h3>
              <p className="text-gray-600">г. Чолпон-Ата, Иссык-Кульская область</p>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-sm text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-heading font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600">+996 700 123 456</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Популярные пиццы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Попробуйте наши самые популярные пиццы, которые любят наши клиенты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPizzas.map((pizza) => (
              <motion.div 
                key={pizza.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src={pizza.imageUrl} 
                  alt={pizza.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-heading font-semibold">{pizza.name}</h3>
                    <span className="font-bold text-primary-dark">{pizza.price} сом</span>
                  </div>
                  <p className="text-gray-600 mb-4">{pizza.description}</p>
                  <Link 
                    to="/menu" 
                    className="btn-primary w-full text-center"
                  >
                    Заказать
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="btn-outline inline-flex items-center">
              <ShoppingBag size={18} className="mr-2" />
              <span>Смотреть все пиццы</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg" 
                alt="Наша пиццерия" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-heading font-bold mb-6">О нашей пиццерии</h2>
              <p className="text-gray-600 mb-4">
                Мы – семейная пиццерия, которая уже более 5 лет радует жителей и гостей Иссык-Куля вкусной пиццей из свежих ингредиентов.
              </p>
              <p className="text-gray-600 mb-6">
                Наши повара прошли обучение в Италии и привезли оттуда лучшие рецепты и техники приготовления настоящей итальянской пиццы.
              </p>
              <Link to="/about" className="btn-outline inline-block">
                Узнать больше
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Готовы сделать заказ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Заказывайте вкусную пиццу с доставкой прямо сейчас!
          </p>
          <Link to="/menu" className="btn-secondary text-lg py-3 px-8">
            Заказать пиццу
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;