import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

function Checkout() {
  const { cart, subtotal } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showWarning, setShowWarning] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(900);
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: 'Maiduguri' });

  const deliveryFee = subtotal >= 30000 || subtotal === 0 ? 0 : 2500;
  const total = subtotal + deliveryFee;

  const orderText = useMemo(() => {
    const itemList = cart.map((item) => `${item.quantity}x ${item.name} (${item.variant})`).join('%0A');
    return encodeURIComponent(`Hi Timeless by Emjay, I just placed an order and made payment.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AAddress: ${form.address}, ${form.city}%0A%0AOrder:%0A${itemList}%0A%0ATotal Paid: ₦${total}`);
  }, [cart, form, total]);

  useEffect(() => {
    setShowWarning(true);
  }, []);

  useEffect(() => {
    if (!showPayment) return undefined;
    if (secondsLeft <= 0) return undefined;
    const timerId = setInterval(() => setSecondsLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timerId);
  }, [showPayment, secondsLeft]);

  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.phone || !form.address) return;
    setStep(2);
  };

  const handleConfirm = () => {
    setShowPayment(true);
    setStep(3);
  };

  const handlePaid = () => {
    window.open(`https://wa.me/2348166394988?text=${orderText}`, '_blank');
    setConfirmed(true);
  };

  if (cart.length === 0 && !confirmed) {
    return (
      <section className="bg-white px-5 py-20 text-center text-[#0A0A0A]">
        <div className="mx-auto max-w-3xl border border-white/20 bg-white p-10">
          <p className="text-lg uppercase tracking-[0.35em] text-[#C9A84C]">Your cart is empty</p>
          <button onClick={() => navigate('/shop')} className="mt-6 rounded-none border border-[#C9A84C] px-6 py-3 text-sm uppercase tracking-[0.35em] text-[#C9A84C] transition hover:bg-[#C9A84C] hover:text-black">
            Browse collection
          </button>
        </div>
      </section>
    );
  }

  return (
    <div className="relative bg-white px-5 py-16 text-[#0A0A0A]">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-6 border-b border-white/20 pb-8">
          <div className="text-xs uppercase tracking-[0.35em] text-[#C9A84C]">Checkout</div>
          <h1 className="mt-3 text-4xl font-serif text-[#0A0A0A]">Complete your order</h1>
          {showWarning && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 130 }}
              className="rounded-none border-l-4 border-[#C9A84C] bg-[#F9F1D0] p-4 text-sm text-[#0A0A0A]"
            >
              <strong className="uppercase tracking-[0.35em] text-[#C9A84C]">Warning</strong>
              <p className="mt-2 leading-6">
                Check your delivery details before confirming. Once payment is made, orders are final.
              </p>
            </motion.div>
          )}
        </div>

        {confirmed ? (
          <div className="rounded-none border border-[#C9A84C22] bg-[#111] p-12 text-center">
            <div className="mx-auto mb-6 h-16 w-16 rounded-full border border-[#C9A84C] text-[#C9A84C]">✓</div>
            <h2 className="text-3xl font-serif text-[#F5F0E8]">Order Sent!</h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-[#F5F0E8]/80">
              We'll confirm your order within 30 minutes. Thank you for choosing Timeless by Emjay.
            </p>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              {step === 1 && (
                <form onSubmit={handleSubmit} className="space-y-6 rounded-none border border-white/20 bg-white p-8">
                  <div className="text-sm uppercase tracking-[0.35em] text-[#C9A84C]">Step 1: Customer details</div>
                  <label className="block text-sm uppercase tracking-[0.2em] text-[#0A0A0A]">
                    Full name
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-2 w-full border border-[#C9A84C] bg-white px-4 py-3 text-[#0A0A0A] outline-none"
                    />
                  </label>
                  <label className="block text-sm uppercase tracking-[0.2em] text-[#0A0A0A]">
                    Phone number
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-2 w-full border border-[#C9A84C] bg-white px-4 py-3 text-[#0A0A0A] outline-none"
                    />
                  </label>
                  <label className="block text-sm uppercase tracking-[0.2em] text-[#0A0A0A]">
                    Delivery address
                    <textarea
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      rows="3"
                      className="mt-2 w-full border border-[#C9A84C] bg-white px-4 py-3 text-[#0A0A0A] outline-none"
                    />
                  </label>
                  <label className="block text-sm uppercase tracking-[0.2em] text-[#0A0A0A]">
                    City
                    <input
                      value={form.city}
                      readOnly
                      className="mt-2 w-full border border-[#C9A84C] bg-white px-4 py-3 text-[#0A0A0A] outline-none"
                    />
                  </label>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button type="button" onClick={() => navigate('/shop')} className="rounded-none border border-[#C9A84C] px-6 py-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C] transition hover:bg-[#f5df8a] hover:text-black">
                      Cancel order
                    </button>
                    <button type="submit" className="rounded-none bg-[#C9A84C] px-6 py-4 text-sm uppercase tracking-[0.35em] text-black transition hover:bg-[#f5df8a]">
                      Continue to summary
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <div className="rounded-none border border-white/20 bg-white p-8">
                  <div className="text-sm uppercase tracking-[0.35em] text-[#C9A84C]">Step 2: Order summary</div>
                  <div className="mt-6 space-y-4">
                    {cart.map((item) => (
                      <div key={`${item.id}-${item.variant}`} className="flex items-center justify-between border-b border-white/20 pb-4">
                        <div>
                          <div className="text-sm uppercase tracking-[0.2em] text-[#0A0A0A]">{item.name}</div>
                          <div className="text-xs text-[#0A0A0A]/80">{item.variant} · Qty {item.quantity}</div>
                        </div>
                        <div className="text-sm uppercase tracking-[0.2em] text-[#C9A84C]">₦{item.price * item.quantity}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 space-y-2 text-sm uppercase tracking-[0.2em] text-[#0A0A0A]">
                    <div className="flex justify-between border-b border-white/20 pb-3">
                      <span>Subtotal</span>
                      <span>₦{subtotal}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-3">
                      <span>Delivery fee</span>
                      <span>{deliveryFee === 0 ? 'Free' : `₦${deliveryFee}`}</span>
                    </div>
                    <div className="flex justify-between pt-4 text-xl text-[#f5df8a]">
                      <strong>Total</strong>
                      <strong>₦{total}</strong>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={() => navigate('/shop')}
                      className="rounded-none border border-[#C9A84C] px-6 py-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C] transition hover:bg-[#f5df8a] hover:text-black"
                    >
                      Cancel order
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirm}
                      className="rounded-none bg-[#C9A84C] px-6 py-4 text-sm uppercase tracking-[0.35em] text-black transition hover:bg-[#f5df8a]"
                    >
                      Confirm &amp; See Payment Details
                    </button>
                  </div>
                </div>
              )}
            </div>
            <aside className="space-y-6">
              <div className="rounded-none border border-white/20 bg-white p-6">
                <div className="text-sm uppercase tracking-[0.35em] text-[#C9A84C]">Delivery details</div>
                <p className="mt-4 text-sm leading-7 text-[#0A0A0A]/80">
                  Free delivery applies above ₦30,000. Orders under the threshold have a delivery fee of ₦2,500.
                </p>
              </div>
              <div className="rounded-none border border-white/20 bg-white p-6">
                <div className="text-sm uppercase tracking-[0.35em] text-[#C9A84C]">Customer</div>
                <div className="mt-4 space-y-2 text-sm text-[#0A0A0A]/80">
                  <div>{form.name || 'Name not set'}</div>
                  <div>{form.phone || 'Phone not set'}</div>
                  <div>{form.address || 'Address not set'}</div>
                  <div>{form.city}</div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>

      {showPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111]/70 px-5 py-10">
          <div className="w-full max-w-3xl border border-[#C9A84C] bg-white p-10">
            <div className="text-xs uppercase tracking-[0.35em] text-[#C9A84C]">Complete Your Payment</div>
            <h2 className="mt-4 text-4xl font-serif text-[#0A0A0A]">Complete Your Payment</h2>
            <div className="mt-8 space-y-4 text-sm text-[#0A0A0A]/80">
              <div className="flex justify-between border-b border-[#C9A84C22] pb-3">
                <span>Bank</span>
                <span>Moniepoint</span>
              </div>
              <div className="flex justify-between border-b border-[#C9A84C22] pb-3">
                <span>Account Number</span>
                <span>8166394988</span>
              </div>
              <div className="flex justify-between border-b border-[#C9A84C22] pb-3">
                <span>Account Name</span>
                <span>Timeless by Emjay</span>
              </div>
              <div className="flex justify-between pt-4 text-lg uppercase tracking-[0.2em] text-[#f5df8a]">
                <span>Amount to pay</span>
                <span>₦{total}</span>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-[#0A0A0A]/80">
              Send the exact amount and use your name as the payment reference.
            </p>
            <div className="mt-6 flex items-center justify-between rounded-none border border-[#C9A84C] px-5 py-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">
              <span>This order is reserved for</span>
              <span>{formatTime(secondsLeft)}</span>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
              <button
                type="button"
                onClick={() => navigate('/shop')}
                className="rounded-none border border-[#C9A84C] px-6 py-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C] transition hover:bg-[#f5df8a] hover:text-black"
              >
                Cancel and return
              </button>
              <button
                type="button"
                onClick={handlePaid}
                className="rounded-none bg-[#C9A84C] px-6 py-4 text-sm uppercase tracking-[0.35em] text-black transition hover:bg-[#f5df8a]"
              >
                I Have Paid — Confirm My Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
