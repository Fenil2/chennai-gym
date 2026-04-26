"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export const OPEN_LEAD_POPUP_EVENT = "open-lead-popup";

const initialForm = {
  name: "",
  phone: "",
  goal: "",
  time: "",
};

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    const openPopup = () => setOpen(true);
    window.addEventListener(OPEN_LEAD_POPUP_EVENT, openPopup);
    return () => window.removeEventListener(OPEN_LEAD_POPUP_EVENT, openPopup);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closePopup = () => {
    setOpen(false);
    setSubmitted(false);
    setForm(initialForm);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hi! I want to book a 3 days trial.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Fitness Goal: ${form.goal}`,
      `Preferred Time: ${form.time}`,
    ].join("\n");

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-6">
      <div
        className="absolute inset-0"
        onClick={closePopup}
        aria-hidden="true"
      />
      <div className="relative z-10 my-8 w-full max-w-lg rounded-[1.75rem] border border-white/10 bg-[#101010] p-5 text-white shadow-2xl sm:my-0 sm:rounded-[2rem] sm:p-8">
        <button
          type="button"
          onClick={closePopup}
          className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-gray-400 transition-colors hover:text-white"
          aria-label="Close popup"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-5 sm:mb-6">
              <span className="mb-4 inline-block rounded-full border border-[#FF2E2E]/30 bg-[#FF2E2E]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF2E2E] sm:px-4 sm:text-xs sm:tracking-widest">
                Start Your Trial
              </span>
              <h3 className="mb-3 text-2xl font-black leading-tight sm:text-3xl">
                Book Your 3 Days Trial
              </h3>
              <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                Fill in your details and we will connect with you on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                value={form.name}
                onChange={(event) =>
                  setForm((current) => ({ ...current, name: event.target.value }))
                }
                placeholder="Your Name"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#FF2E2E]/40"
              />
              <input
                value={form.phone}
                onChange={(event) =>
                  setForm((current) => ({ ...current, phone: event.target.value }))
                }
                placeholder="Phone Number"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#FF2E2E]/40"
              />
              <input
                value={form.goal}
                onChange={(event) =>
                  setForm((current) => ({ ...current, goal: event.target.value }))
                }
                placeholder="Your Goal"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#FF2E2E]/40"
              />
              <input
                value={form.time}
                onChange={(event) =>
                  setForm((current) => ({ ...current, time: event.target.value }))
                }
                placeholder="Preferred Time"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#FF2E2E]/40"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-[#FF2E2E] px-6 py-3.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#CC1A1A]"
              >
                Submit on WhatsApp
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mb-4 text-3xl font-black text-[#FF2E2E]">Done</div>
            <p className="mx-auto max-w-sm text-sm leading-relaxed text-gray-400 sm:text-base">
              Your WhatsApp draft has been opened. Send the message and we will
              get back to you shortly.
            </p>
            <button
              type="button"
              onClick={closePopup}
              className="mt-6 rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
