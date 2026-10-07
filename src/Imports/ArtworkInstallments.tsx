"use client";

import React, { useState } from "react";
import { installmentPlans, InstallmentPlan, TOTAL_ARTWORK_PRICE } from "@/constants/installments";
import { cnnReporters } from "@/constants/cnnReporters";

const ArtworkInstallments: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<InstallmentPlan>(installmentPlans[0]);
  const [selectedArtwork, setSelectedArtwork] = useState<string>(
    "General Pet Bottle School Expansion Fund"
  );
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorMessage, setDonorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorEmail) return;
    setSubmitted(true);
  };

  return (
    <section id="artwork-acquisition" className="w-full bg-[#fff9f7] py-20 sm:py-28 text-[#211812] border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] uppercase tracking-[0.14em] text-[#211812]/60 mb-3 font-medium">
            ACQUIRE ARTWORK & SPONSOR A SCHOOL
          </p>
          <h2 className="text-[32px] sm:text-[38px] font-medium text-[#211812] tracking-tight">
            Original Artwork: ${TOTAL_ARTWORK_PRICE.toLocaleString()}
          </h2>
          <p className="text-[16px] text-[#211812] leading-[32px] font-normal mt-3">
            Each artwork is created from recycled materials by children and volunteer artists at Slum
            Art. You can pay immediately or spread your payment over monthly installments.
          </p>
        </div>

        {/* Installment Options Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {installmentPlans.map(plan => {
            const isSelected = selectedPlan.id === plan.id;
            return (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan)}
                className={`p-4 rounded-[8px] border text-left transition-colors cursor-pointer bg-white ${
                  isSelected
                    ? "border-[#e86e4c] ring-1 ring-[#e86e4c]"
                    : "border-[#e5e7eb] hover:border-[#211812]/40"
                }`}
              >
                <div className="text-[12px] uppercase text-[#211812]/60 font-medium mb-1">
                  {plan.durationLabel}
                </div>
                <div className="text-[22px] font-bold text-[#211812]">
                  ${plan.monthlyAmount}
                  <span className="text-[13px] font-normal text-[#211812]/60 ml-1">
                    {plan.months === 1 ? "once" : "/ mo"}
                  </span>
                </div>
                <div className="text-[12px] text-[#211812]/60 mt-2">
                  Total: ${plan.totalAmount}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Plan Details & Pledge Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Summary */}
          <div className="lg:col-span-5 bg-white border border-[#e5e7eb] rounded-[8px] p-6 sm:p-8">
            <h3 className="text-[20px] font-bold text-[#211812] mb-1">
              {selectedPlan.durationLabel}
            </h3>
            <p className="text-[14px] text-[#211812]/70 mb-6">
              Artwork Valuation: <strong className="text-[#211812]">${TOTAL_ARTWORK_PRICE}</strong>
            </p>

            <div className="space-y-3 py-4 border-y border-[#e5e7eb] text-[14px]">
              <div className="flex justify-between">
                <span className="text-[#211812]/70">Frequency:</span>
                <span className="font-medium text-[#211812]">{selectedPlan.frequency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#211812]/70">Amount per month:</span>
                <span className="font-bold text-[#e86e4c]">${selectedPlan.monthlyAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#211812]/70">Duration:</span>
                <span className="font-medium text-[#211812]">{selectedPlan.months} month(s)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#211812]/70">Total commitment:</span>
                <span className="font-bold text-[#211812]">${selectedPlan.totalAmount}</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-[13px] uppercase tracking-wider text-[#211812]/60 font-medium mb-1">
                Where the funds go:
              </h4>
              <p className="text-[14px] text-[#211812] leading-[26px]">
                {selectedPlan.impactDescription}
              </p>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 bg-white border border-[#e5e7eb] rounded-[8px] p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <h3 className="text-[24px] font-bold text-[#211812]">
                  Thank you, {donorName}
                </h3>
                <p className="text-[15px] text-[#211812]/80 leading-relaxed max-w-md mx-auto">
                  Your pledge of <strong>${selectedPlan.monthlyAmount} {selectedPlan.months === 1 ? "one-time" : "per month"}</strong> for the <em>{selectedArtwork}</em> has been registered. Our team at Slum Art Foundation will follow up at <strong>{donorEmail}</strong> with payment confirmation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-[14px] text-[#211812] underline underline-offset-4 cursor-pointer"
                >
                  Make another pledge
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-[20px] font-bold text-[#211812] mb-1">
                    Pledge Your Support
                  </h3>
                  <p className="text-[14px] text-[#211812]/60">
                    Select your preferred artwork and complete your contact information below.
                  </p>
                </div>

                <div>
                  <label className="block text-[13px] text-[#211812] font-medium mb-1.5">
                    Select Artwork
                  </label>
                  <select
                    value={selectedArtwork}
                    onChange={e => setSelectedArtwork(e.target.value)}
                    className="w-full bg-white border border-[#e5e7eb] rounded-[6px] px-3.5 py-2.5 text-[14px] text-[#211812] outline-none focus:border-[#e86e4c]"
                  >
                    <option value="General Pet Bottle School Expansion Fund">
                      General Pet Bottle School Expansion Fund
                    </option>
                    <option disabled>── 147 CNN Reporter Collages ──</option>
                    {cnnReporters.map(r => (
                      <option key={r.id} value={`${r.name} — CNN Reporter Collage`}>
                        {r.name} ({r.role})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] text-[#211812] font-medium mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={donorName}
                      onChange={e => setDonorName(e.target.value)}
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
                      value={donorEmail}
                      onChange={e => setDonorEmail(e.target.value)}
                      className="w-full bg-white border border-[#e5e7eb] rounded-[6px] px-3.5 py-2.5 text-[14px] text-[#211812] outline-none focus:border-[#e86e4c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] text-[#211812] font-medium mb-1.5">
                    Note or Dedication (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Message to be shared with the children and educators..."
                    value={donorMessage}
                    onChange={e => setDonorMessage(e.target.value)}
                    className="w-full bg-white border border-[#e5e7eb] rounded-[6px] px-3.5 py-2.5 text-[14px] text-[#211812] outline-none focus:border-[#e86e4c] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#e86e4c] hover:bg-[#d85d3b] text-[#fff9f7] text-[14px] font-medium px-6 py-2.5 rounded-[6px] min-w-[114px] min-h-[44px] flex items-center justify-center transition-colors cursor-pointer border border-transparent w-full sm:w-auto"
                >
                  Submit Pledge (${selectedPlan.monthlyAmount})
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtworkInstallments;
