'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--dark-purple)] mb-6">
            Spolu proti rakovine
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12">
            Pomáhame pacientom a ich rodinám v boji s rakovinou. Poskytujeme podporu,
            informácie a nádej pre lepšiu budúcnosť.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/podporte-nas" 
              className="bg-[var(--primary-purple)] text-white px-8 py-3 rounded-md 
              hover:bg-[var(--dark-purple)] transition-colors duration-200 text-lg font-semibold">
              Podporiť nás
            </a>
            <a href="/pomoc-pacientom" 
              className="bg-white text-[var(--primary-purple)] px-8 py-3 rounded-md 
              border-2 border-[var(--primary-purple)] hover:bg-[var(--primary-purple)] 
              hover:text-white transition-colors duration-200 text-lg font-semibold">
              Potrebujem pomoc
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--dark-purple)] mb-12">
            Ako pomáhame
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[var(--light-purple)] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--dark-purple)] mb-3 text-center">
                Poradenstvo
              </h3>
              <p className="text-gray-600 text-center">
                Poskytujeme odborné poradenstvo a podporu pacientom a ich rodinám.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[var(--light-purple)] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--dark-purple)] mb-3 text-center">
                Podporné skupiny
              </h3>
              <p className="text-gray-600 text-center">
                Organizujeme stretnutia podporných skupín pre pacientov a ich blízkych.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[var(--light-purple)] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--dark-purple)] mb-3 text-center">
                Vzdelávanie
              </h3>
              <p className="text-gray-600 text-center">
                Poskytujeme aktuálne informácie o prevencii a liečbe rakoviny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-purple)] mb-6">
            Staňte sa súčasťou zmeny
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Vaša podpora nám pomáha poskytovať lepšiu starostlivosť a podporu pacientom s rakovinou.
            Pridajte sa k nám v boji proti rakovine.
          </p>
          <a href="/podporte-nas" 
            className="inline-block bg-[var(--primary-purple)] text-white px-8 py-3 rounded-md 
            hover:bg-[var(--dark-purple)] transition-colors duration-200 text-lg font-semibold">
            Chcem pomôcť
          </a>
        </div>
      </section>
    </div>
  );
}
