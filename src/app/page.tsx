'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Primary CTA Button */}
          <div className="mb-16">
            <a
              href="/darovat"
              className="inline-block bg-[var(--primary-purple)] text-white text-2xl px-12 py-4 
              rounded-lg shadow-lg hover:bg-[var(--dark-purple)] transform hover:-translate-y-1 
              transition-all duration-200 font-bold"
            >
              Darovať
            </a>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--dark-purple)] mb-8">
            VAŠE 2 % ZACHRAŇUJÚ ŽIVOTY
          </h1>

          {/* Secondary CTA */}
          <a
            href="/darovat"
            className="inline-block text-2xl font-semibold text-[var(--primary-purple)] 
            hover:text-[var(--dark-purple)] mb-8 transition-colors duration-200"
          >
            Darujte
          </a>

          {/* Description */}
          <p className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
            Aj vaše 2 % pomáhajú pacientom žiť dôstojný život s ochorením, šíriť osvetu 
            o rakovine, bojovať za práva pacientov a podporovať naše ďalšie aktivity.
          </p>

          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--dark-purple)] mb-12">
            Venujte nám 2% z dane
          </h2>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 max-w-lg mx-auto">
            <a
              href="/postup-zamestnanci"
              className="bg-white text-[var(--primary-purple)] px-8 py-4 rounded-lg 
              border-2 border-[var(--primary-purple)] hover:bg-[var(--light-purple)] 
              hover:text-white hover:border-[var(--light-purple)] transition-all 
              duration-200 text-lg font-semibold shadow-md"
            >
              Postup pre ZAMESTNANCOV
            </a>
            <a
              href="/postup-fyzicke-osoby"
              className="bg-white text-[var(--primary-purple)] px-8 py-4 rounded-lg 
              border-2 border-[var(--primary-purple)] hover:bg-[var(--light-purple)] 
              hover:text-white hover:border-[var(--light-purple)] transition-all 
              duration-200 text-lg font-semibold shadow-md"
            >
              Postup pre FYZICKÉ OSOBY
            </a>
            <a
              href="/postup-pravnicke-osoby"
              className="bg-white text-[var(--primary-purple)] px-8 py-4 rounded-lg 
              border-2 border-[var(--primary-purple)] hover:bg-[var(--light-purple)] 
              hover:text-white hover:border-[var(--light-purple)] transition-all 
              duration-200 text-lg font-semibold shadow-md"
            >
              Postup pre PRÁVNICKÉ OSOBY
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
