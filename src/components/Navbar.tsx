import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Pizza } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Pizza className="text-primary-dark" size={32} />
            <span className="text-xl font-heading font-bold text-primary-dark">
              ЫссыкПицца
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-primary-dark' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Главная
            </Link>
            <Link
              to="/menu"
              className={`font-medium transition-colors ${
                isActive('/menu') ? 'text-primary-dark' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Меню
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-primary-dark' : 'text-gray-700 hover:text-primary'
              }`}
            >
              О нас
            </Link>
            <Link
              to="/cart"
              className="btn-primary flex items-center"
            >
              Корзина
              {totalItems > 0 && (
                <span className="ml-2 bg-white text-primary-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-16 shadow-lg p-4 z-50">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium py-2 transition-colors ${
                  isActive('/') ? 'text-primary-dark' : 'text-gray-700'
                }`}
                onClick={closeMenu}
              >
                Главная
              </Link>
              <Link
                to="/menu"
                className={`font-medium py-2 transition-colors ${
                  isActive('/menu') ? 'text-primary-dark' : 'text-gray-700'
                }`}
                onClick={closeMenu}
              >
                Меню
              </Link>
              <Link
                to="/about"
                className={`font-medium py-2 transition-colors ${
                  isActive('/about') ? 'text-primary-dark' : 'text-gray-700'
                }`}
                onClick={closeMenu}
              >
                О нас
              </Link>
              <Link
                to="/cart"
                className="btn-primary py-2 text-center"
                onClick={closeMenu}
              >
                Корзина {totalItems > 0 && `(${totalItems})`}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;