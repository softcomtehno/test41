import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Контакты</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <span>+996 700 123 456</span>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                <span>г. Чолпон-Ата, Иссык-Кульская область, Кыргызстан</span>
              </div>
              <div className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-primary" />
                <span>Ежедневно с 10:00 до 22:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Меню сайта</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-primary transition-colors">
                  Меню
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-primary transition-colors">
                  Корзина
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Мы в соцсетях</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} ИссыкПицца. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;