import { useState } from 'react';
import { motion } from 'framer-motion';

function ClientServices() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <motion.section id="client-services" className="bg-[#f4efe6] border-b border-[#111]/10 text-[#111]">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] items-start">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">Client Services</div>
            <h2 className="mt-6 text-[4rem] font-serif uppercase tracking-[-0.04em] leading-[0.95] sm:text-[5.2rem]">
              A dedicated service line for every inquiry.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-9 text-[#111]/70">
              Our team is available to assist you with questions about the collection and delivery.
            </p>
            <div className="mt-10 space-y-3 text-sm uppercase tracking-[0.35em] text-[#111]/70">
              <div>Secure & confidential inquiries</div>
              <div>Response within 24 hours</div>
              <div>Dedicated client support</div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-6 border-b border-[#111]/10 pb-10">
              <div className="text-sm uppercase tracking-[0.35em] text-[#8A7A56]">Contact</div>
              <div className="space-y-4 text-base leading-7 text-[#111]">
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-[#111]/50">Email</div>
                  <div className="mt-2">timelessbyemjay@gmail.com</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-[#111]/50">Phone</div>
                  <div className="mt-2">0816 639 4988</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-[#111]/50">Location</div>
                  <div className="mt-2">Abuja, Nigeria</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-[#111]/50">Hours</div>
                  <div className="mt-2">Mon–Fri 10:00–18:00</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 text-sm text-[#111]">
              <div>
                <label className="block uppercase tracking-[0.35em] text-[#111]/50" htmlFor="client-name">
                  Name
                </label>
                <input
                  id="client-name"
                  type="text"
                  value={form.name}
                  onChange={handleChange('name')}
                  className="mt-3 w-full border-b border-[#111]/15 bg-transparent px-0 py-3 text-base text-[#111] outline-none focus:border-[#111]"
                  required
                />
              </div>

              <div>
                <label className="block uppercase tracking-[0.35em] text-[#111]/50" htmlFor="client-email">
                  Email
                </label>
                <input
                  id="client-email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  className="mt-3 w-full border-b border-[#111]/15 bg-transparent px-0 py-3 text-base text-[#111] outline-none focus:border-[#111]"
                  required
                />
              </div>

              <div>
                <label className="block uppercase tracking-[0.35em] text-[#111]/50" htmlFor="client-message">
                  Message
                </label>
                <textarea
                  id="client-message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange('message')}
                  className="mt-3 w-full border-b border-[#111]/15 bg-transparent px-0 py-3 text-base text-[#111] outline-none focus:border-[#111]"
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex rounded-none border border-[#111]/20 px-8 py-4 text-sm uppercase tracking-[0.35em] text-[#111] transition hover:border-[#111] hover:bg-[#111]/5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ClientServices;
