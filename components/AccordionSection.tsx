"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Item {
  title: string;
  desc: React.ReactNode;
}

export default function AccordionSection({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
              isOpen
                ? "border-brand-orange-300 bg-brand-orange-50/50 shadow-sm"
                : "border-slate-100 bg-white"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-200 ${
                    isOpen ? "bg-brand-orange-500" : "bg-emerald-400"
                  }`}
                />
                <span className="font-bold text-slate-900 text-sm leading-snug">
                  {item.title}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-brand-orange-500" : "text-slate-400"
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <p className="px-6 pb-5 pl-11 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                <span className="block pt-4">{item.desc}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
