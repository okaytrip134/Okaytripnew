"use client";
import { useState } from "react";
import {
  Plus,
  X,
  Plane,
  MapPin,
  Building2,
  Hotel,
  Car,
  Home,
  Ticket,
} from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How do I make a reservation on your website",
    answer:
      "Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process. Mention any special features or tools that can help users find the best deals.",
  },
  {
    id: 2,
    question: "What documents do I need for my trip, and how do I obtain them?",
    answer:
      "Specify which documents are necessary such as passports, visas, or travel insurance. Offer guidance on how to obtain them if users are unsure.",
  },
  {
    id: 3,
    question:
      "In the event that I need to modify or cancel my reservation, what are the policies in place?",
    answer:
      "Outline your cancellation and modification policy, including any fees, deadlines, or conditions for refunds.",
  },
  {
    id: 4,
    question:
      "Can you specify the types of credit/debit cards, digital wallets, or other online payment methods accepted?",
    answer:
      "List all accepted payment methods clearly — including major cards, online wallets, or other regional options.",
  },
  {
    id: 5,
    question:
      "What are the working hours, and what can I expect in terms of response times?",
    answer:
      "Indicate customer service hours and average response times for emails, chats, or phone support.",
  },
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-5 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A143E] mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mb-10">
          You need to come at least once in your life
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { name: "Tours Booking", icon: Plane },
            { name: "Activities", icon: MapPin },
            { name: "Destinations", icon: Building2 },
            { name: "Hotels Booking", icon: Hotel },
            { name: "Rental Car", icon: Car },
            { name: "Property", icon: Home },
            { name: "Tickets Booking", icon: Ticket },
          ].map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white border rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm transition"
            >
              <item.icon className="w-4 h-4 text-[#F97316]" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="text-left bg-gray-50 rounded-3xl shadow-sm overflow-hidden">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className={`border-b border-gray-200 ${
                openFAQ === faq.id ? "bg-gray-100" : "bg-white"
              } transition-all`}
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                className="flex items-center justify-between w-full px-6 py-5 text-left"
              >
                <div className="flex items-start gap-5">
                  <span className="text-2xl font-bold text-[#0A143E] w-[30px]">
                    {faq.id < 10 ? `0${faq.id}` : faq.id}
                  </span>
                  <span className="text-[#0A143E] font-semibold text-base leading-snug">
                    {faq.question}
                  </span>
                </div>
                <div className="shrink-0">
                  {openFAQ === faq.id ? (
                    <X className="w-5 h-5 text-gray-700" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-700" />
                  )}
                </div>
              </button>

              {openFAQ === faq.id && (
                <div className="pl-[68px] pr-6 pb-5 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
