"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[#fff9f7] py-20 sm:py-28 text-[#211812] border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] uppercase tracking-[0.14em] text-[#211812]/60 mb-3 font-medium">
            GET IN TOUCH
          </p>
          <h2 className="text-[32px] sm:text-[38px] font-medium text-[#211812] tracking-tight">
            Partner with Slum Art Foundation
          </h2>
          <p className="text-[16px] text-[#211812] leading-[36px] font-normal mt-3">
            Interested in supporting our PET bottle school expansion across Africa, acquiring original
            artwork, or visiting our creative center in Ijora Badia? Connect with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 bg-white border border-[#e5e7eb] rounded-[8px]">
              <div className="flex items-center gap-3 mb-2 text-[#e86e4c]">
                <Phone className="w-5 h-5" />
                <span className="text-[14px] font-semibold text-[#211812]">Direct Line & WhatsApp</span>
              </div>
              <a
                href="tel:+2348059994834"
                className="text-[16px] text-[#211812] hover:text-[#e86e4c] transition-colors font-medium pl-8 block"
              >
                +234 805 999 4834
              </a>
            </div>

            <div className="p-6 bg-white border border-[#e5e7eb] rounded-[8px]">
              <div className="flex items-center gap-3 mb-2 text-[#e86e4c]">
                <Mail className="w-5 h-5" />
                <span className="text-[14px] font-semibold text-[#211812]">Email Inquiries</span>
              </div>
              <a
                href="mailto:Adetunwase@slumart.org"
                className="text-[16px] text-[#211812] hover:text-[#e86e4c] transition-colors font-medium pl-8 block"
              >
                Adetunwase@slumart.org
              </a>
            </div>

            <div className="p-6 bg-white border border-[#e5e7eb] rounded-[8px]">
              <div className="flex items-center gap-3 mb-2 text-[#e86e4c]">
                <MapPin className="w-5 h-5" />
                <span className="text-[14px] font-semibold text-[#211812]">Community Center</span>
              </div>
              <p className="text-[15px] text-[#211812]/80 leading-relaxed pl-8">
                Slum Art Pet Bottle School, Ijora Badia, Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white border border-[#e5e7eb] rounded-[8px] p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <h3 className="text-[22px] font-bold text-[#211812]">
                  Message Received
                </h3>
                <p className="text-[15px] text-[#211812]/80">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-[14px] text-[#211812] underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[13px] text-[#211812] font-medium mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full bg-white border border-[#e5e7eb] rounded-[6px] px-3.5 py-2.5 text-[14px] text-[#211812] outline-none focus:border-[#e86e4c]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] text-[#211812] font-medium mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#e5e7eb] rounded-[6px] px-3.5 py-2.5 text-[14px] text-[#211812] outline-none focus:border-[#e86e4c]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] text-[#211812] font-medium mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How would you like to partner or support?"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full bg-white border border-[#e5e7eb] rounded-[6px] px-3.5 py-2.5 text-[14px] text-[#211812] outline-none focus:border-[#e86e4c] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#e86e4c] hover:bg-[#d85d3b] text-[#fff9f7] text-[14px] font-medium px-6 py-2.5 rounded-[6px] min-w-[114px] min-h-[44px] flex items-center justify-center transition-colors cursor-pointer border border-transparent"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
