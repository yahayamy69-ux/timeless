import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { imageMap } from '../data/imageMap.js';

function CartDrawer() {
  const { cart, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className={`fixed inset-y-0 right-0 z-40 w-full max-w-md transform bg-white border-l border-white/20 transition duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex items-center justify-between border-b border-white/20 px-6 py-5">
        <div>
          <div className="text-sm uppercase tracking-[0.35em] text-[#C9A84C]">Your Cart</div>
          <div className="mt-1 text-xs text-[#0A0A0A]/60">Secure checkout in a few steps.</div>
        </div>
        <button onClick={closeCart} className="text-[#0A0A0A] text-sm uppercase tracking-[0.3em]">Close</button>
      </div>
      <div className="space-y-4 px-6 py-5">
        {cart.length === 0 ? (
          <div className="border border-white/20 bg-white p-6 text-sm uppercase tracking-[0.2em] text-[#C9A84C]">
            No items yet.
          </div>
        ) : (
          cart.map((item) => (
            <div key={`${item.id}-${item.variant}`} className="flex gap-4 border border-white/20 bg-white p-4">
              <img src={imageMap[item.image]} alt={item.name} className="h-20 w-20 flex-none object-cover" />
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{item.name}</div>
                  <div className="text-xs text-[#0A0A0A]/80">{item.variant}</div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#0A0A0A]">
                    <button
                      onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                      className="h-8 w-8 border border-[#C9A84C]/20 text-[#C9A84C]"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                      className="h-8 w-8 border border-[#C9A84C]/20 text-[#C9A84C]"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-xs uppercase tracking-[0.2em] text-[#8A7A56]"
                  >
                    Remove
                  </button>
                </div>
                <div className="text-sm uppercase tracking-[0.2em] text-[#C9A84C]">₦{item.price * item.quantity}</div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-auto border-t border-[#C9A84C22] px-6 py-6">
        <div className="flex items-center justify-between text-sm uppercase tracking-[0.25em] text-[#C9A84C]">
          <span>Subtotal</span>
          <span>₦{subtotal}</span>
        </div>
        <button
          onClick={() => {
            closeCart();
            navigate('/checkout');
          }}
          disabled={cart.length === 0}
          className="mt-5 w-full rounded-none bg-[#C9A84C] px-4 py-3 text-sm uppercase tracking-[0.35em] text-black transition hover:bg-[#f5df8a] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartDrawer;
