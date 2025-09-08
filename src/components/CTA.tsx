"use client";
import React from "react";

export default function CTA() {
  return (
    <section className="rounded-2xl p-8 border text-center grid gap-3">
      <h2 className="text-3xl font-bold">Birlikte Üretelim</h2>
      <p className="text-gray-600">Directive Interactive — yazılım ve oyun projeleri.</p>
      <a
        href="#contact"
        className="inline-block px-5 py-3 rounded-xl border font-medium hover:bg-accent-100"
      >
        İletişime Geç
      </a>
    </section>
  );
}
