'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <a
              href="/darovat"
              className="inline-block bg-[#6B4E71] text-white text-2xl px-12 py-4 
              rounded-md shadow-lg hover:bg-[#563E5A] transform hover:-translate-y-1 
              transition-all duration-200 font-bold"
            >
              Darovať
            </a>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
            VAŠE 2 % ZACHRAŇUJÚ ŽIVOTY
          </h1>

          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Aj vaše 2 % pomáhajú pacientom žiť dôstojný život s ochorením, šíriť osvetu 
            o rakovine, bojovať za práva pacientov a podporovať naše ďalšie aktivity.
          </p>
        </div>
      </section>

      {/* Main Image Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <img
            src="/images/2025-02-05-my-sme-nie-rakovine.jpg"
            alt="My sme NIE RAKOVINE - pomáhame s láskou"
            className="w-full rounded-lg shadow-lg mb-12"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">
                V organizácii NIE RAKOVINE
              </h2>
              <div className="prose prose-lg">
                <p className="mb-4">
                  Poskytujeme pomoc onkologickým pacientkam, pacientom a ich rodinám. 
                  V Pacientskych poradniach podávame pomocnú ruku vo chvíľach, ktoré sú 
                  v živote človeka tie najťažšie.
                </p>
                <p className="mb-4">
                  Vzdelávame po celom Slovensku a hovoríme o prevencii, aby ste mali možnosť 
                  prežiť čo najviac času so svojimi najmilšími.
                </p>
                <p>
                  Chránime práva onkologických pacientov a poskytujeme im psychosociálnu pomoc.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">
                Údaje na poukázanie 2 % z dane
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-2"><strong>Obchodné meno:</strong> NIE RAKOVINE</p>
                <p className="mb-2"><strong>Adresa:</strong> Cukrová 14, 81101 Bratislava</p>
                <p className="mb-2"><strong>Právna forma:</strong> Občianske združenie</p>
                <p className="mb-2"><strong>IČO:</strong> 50654896</p>
                <p className="mt-4">
                  <a 
                    href="https://www.notar.sk/poberatel/?actId=66f156dde631cd74bf2d6d1e"
                    className="text-[#6B4E71] hover:text-[#563E5A] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Overiť v Notárskom centrálnom registri
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Impact Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Náš dopad</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-[#6B4E71] mb-2">79</div>
              <p>vyškolených poradcov</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-[#6B4E71] mb-2">1000+</div>
              <p>pacientov ročne v poradniach</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-[#6B4E71] mb-2">500k+</div>
              <p>návštevníkov webu ročne</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">
            AKO NÁM EŠTE MÔŽETE POMÔCŤ?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#6B4E71] mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Navštívte našu facebookovú stránku a zdieľajte ju s priateľmi.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#6B4E71] mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sledujte náš profil na Instagrame s názvom @nie_rakovine</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#6B4E71] mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Stiahnite si náš leták a umiestnite ho vo vašej firme.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-4">Kontaktujte nás</h3>
              <p className="mb-4">
                Ak viete o firme, ktorá by mohla venovať 2% z dane, napíšte nám na:
              </p>
              <a 
                href="mailto:office@nierakovine.sk"
                className="text-[#6B4E71] hover:text-[#563E5A] font-semibold"
              >
                office@nierakovine.sk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-8 text-center">
            Venujte nám 2% z dane
          </h2>
          <div className="flex flex-col gap-4">
            <a
              href="/postup-zamestnanci"
              className="bg-white text-gray-800 px-8 py-4 rounded-md 
              border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400
              transition-all duration-200 text-lg font-semibold shadow-sm text-center"
            >
              Postup pre ZAMESTNANCOV
            </a>
            <a
              href="/postup-fyzicke-osoby"
              className="bg-white text-gray-800 px-8 py-4 rounded-md 
              border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400
              transition-all duration-200 text-lg font-semibold shadow-sm text-center"
            >
              Postup pre FYZICKÉ OSOBY
            </a>
            <a
              href="/postup-pravnicke-osoby"
              className="bg-white text-gray-800 px-8 py-4 rounded-md 
              border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400
              transition-all duration-200 text-lg font-semibold shadow-sm text-center"
            >
              Postup pre PRÁVNICKÉ OSOBY
            </a>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-8">
            ĎAKUJEME, ŽE STE S NAMI!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Štedrosť našich darcov, partnerov a spolupracovníkov je prejavom solidarity 
            a nádeje pre tých, ktorí bojujú o svoj život. Vaša pomoc je nielen hodnotná, 
            ale aj životne dôležitá.
          </p>
        </div>
      </section>
    </div>
  );
}
