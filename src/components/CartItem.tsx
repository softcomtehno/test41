import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItem as CartItemType } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex flex-col sm:flex-row border-b border-gray-200 py-4">
      <div className="w-full sm:w-24 h-24 rounded-md overflow-hidden mb-4 sm:mb-0">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 sm:ml-4 flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <button
              onClick={handleDecrease}
              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="mx-3 font-medium">{item.quantity}</span>
            <button
              onClick={handleIncrease}
              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-lg mr-4">
              {item.price * item.quantity} сом
            </span>
            <button
              onClick={handleRemove}
              className="text-red-500 hover:text-red-700"
              aria-label="Remove item"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;