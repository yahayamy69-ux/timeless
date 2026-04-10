import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('timeless-cart');
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch (error) {
        setCart([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('timeless-cart', JSON.stringify(cart));
  }, [cart]);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [cart]
  );

  const addItem = (product, variant) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id && item.variant === variant);
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { ...product, quantity: 1, variant }];
    });
    setIsOpen(true);
  };

  const removeItem = (id, variant) => {
    setCart((current) => current.filter((item) => !(item.id === id && item.variant === variant)));
  };

  const updateQuantity = (id, variant, quantity) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id && item.variant === variant ? { ...item, quantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleCart = () => setIsOpen((open) => !open);
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{ cart, cartCount, subtotal, isOpen, addItem, removeItem, updateQuantity, toggleCart, closeCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
