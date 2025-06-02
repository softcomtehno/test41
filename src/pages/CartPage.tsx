import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import OrderForm from '../components/OrderForm';
import { useCart } from '../context/CartContext';
import { OrderFormData } from '../types';
import { ShoppingCart, ArrowLeft, Check } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cartItems, clearCart, totalPrice } = useCart();
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleSubmitOrder = (data: OrderFormData) => {
    console.log('Order submitted:', { items: cartItems, customer: data, total: totalPrice });
    setOrderSubmitted(true);
    clearCart();
    
    // In a real app, you would send this data to your backend
  };

  if (orderSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-heading font-bold mb-4">Заказ успешно оформлен!</h1>
          <p className="text-gray-600 mb-8">
            Спасибо за ваш заказ. Наш оператор свяжется с вами в ближайшее время для подтверждения.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Вернуться на главную
          </Link>
        </motion.div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ShoppingCart size={64} className="text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-heading font-bold mb-4">Корзина пуста</h1>
          <p className="text-gray-600 mb-8">
            В вашей корзине пока нет товаров. Перейдите в меню, чтобы выбрать пиццу.
          </p>
          <Link to="/menu" className="btn-primary inline-block">
            Перейти в меню
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link to="/menu" className="text-gray-600 hover:text-primary flex items-center">
          <ArrowLeft size={18} className="mr-2" />
          <span>Вернуться в меню</span>
        </Link>
      </div>

      <motion.h1 
        className="text-3xl md:text-4xl font-heading font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Корзина
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div 
          className="lg:w-2/3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-heading font-bold mb-6">Ваш заказ</h2>
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button 
                onClick={clearCart}
                className="text-gray-500 hover:text-red-500 font-medium"
              >
                Очистить корзину
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-1/3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <OrderForm onSubmit={handleSubmitOrder} totalPrice={totalPrice} />
        </motion.div>
      </div>
    </div>
  );
};

export default CartPage;