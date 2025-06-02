import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { ContactFormData } from '../types';
import { MapPin, Phone, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const handleSubmitContact = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    // In a real app, you would send this data to your backend
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            О нас
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Узнайте больше о нашей пиццерии и свяжитесь с нами
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg" 
                alt="О нашей пиццерии" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-heading font-bold mb-6">Наша история</h2>
              <p className="text-gray-600 mb-4">
                ИссыкПицца была основана в 2018 году с целью предложить жителям и гостям Иссык-Куля настоящую итальянскую пиццу, приготовленную по традиционным рецептам из свежих и качественных ингредиентов.
              </p>
              <p className="text-gray-600 mb-4">
                Наши шеф-повара прошли обучение в лучших пиццериях Италии и привезли с собой секреты приготовления идеального теста и соусов.
              </p>
              <p className="text-gray-600 mb-4">
                Мы гордимся тем, что за эти годы стали любимым местом для многих семей и туристов, посещающих прекрасный Иссык-Куль.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Мы делаем всё возможное, чтобы каждый кусочек нашей пиццы приносил вам удовольствие
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Качественные ингредиенты</h3>
              <p className="text-gray-600">
                Мы используем только свежие и качественные ингредиенты, чтобы гарантировать отличный вкус каждой пиццы.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Традиционные рецепты</h3>
              <p className="text-gray-600">
                Наши пиццы готовятся по традиционным итальянским рецептам, которые прошли проверку временем.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Быстрая доставка</h3>
              <p className="text-gray-600">
                Мы доставляем пиццу по всему Иссык-Кулю быстро и в специальных термосумках, чтобы она оставалась горячей.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Контакты</h2>

          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-gray-50 p-8 rounded-lg h-full">
                <h3 className="text-2xl font-heading font-semibold mb-6">Наш адрес</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-primary mr-4 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-gray-600">
                        г. Чолпон-Ата, Иссык-Кульская область, Кыргызстан
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-primary mr-4 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-gray-600">
                        +996 700 123 456
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-primary mr-4 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Время работы</h4>
                      <p className="text-gray-600">
                        Ежедневно с 10:00 до 22:00
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Мы на карте</h4>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">Карта Чолпон-Аты</p>
                    {/* In a real app, you would integrate a map here */}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ContactForm onSubmit={handleSubmitContact} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;