'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            VAŠE 2 % ZACHRAŇUJÚ ŽIVOTY
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Aj vaše 2 % pomáhajú pacientom žiť dôstojný život s ochorením, šíriť osvetu 
            o rakovine, bojovať za práva pacientov a podporovať naše ďalšie aktivity.
          </p>

          <div className="mb-8">
            <a
              href="/darovat"
              className="inline-block bg-gradient-to-r from-[#8B5E88] to-[#6B4E71] 
              text-white text-2xl px-16 py-5 rounded-xl shadow-[0_4px_20px_rgba(107,78,113,0.3)] 
              hover:shadow-[0_8px_25px_rgba(107,78,113,0.45)] transform hover:-translate-y-1 
              transition-all duration-300 font-bold relative overflow-hidden group"
            >
              <span className="relative z-10">Darovať</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B4E71] to-[#8B5E88] 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <img
            src="/images/2025-02-05-my-sme-nie-rakovine.jpg"
            alt="My sme NIE RAKOVINE - pomáhame s láskou"
            className="w-full rounded-lg shadow-lg mb-8"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                V organizácii NIE RAKOVINE
              </h2>
              <div className="prose prose-lg">
                <p className="mb-3">
                  Poskytujeme pomoc onkologickým pacientkam, pacientom a ich rodinám. 
                  V Pacientskych poradniach podávame pomocnú ruku vo chvíľach, ktoré sú 
                  v živote človeka tie najťažšie.
                </p>
                <p className="mb-3">
                  Vzdelávame po celom Slovensku a hovoríme o prevencii, aby ste mali možnosť 
                  prežiť čo najviac času so svojimi najmilšími.
                </p>
                <p>
                  Chránime práva onkologických pacientov a poskytujeme im psychosociálnu pomoc.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Údaje na poukázanie 2 % z dane
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-2"><strong>Obchodné meno:</strong> NIE RAKOVINE</p>
                <p className="mb-2"><strong>Adresa:</strong> Cukrová 14, 81101 Bratislava</p>
                <p className="mb-2"><strong>Právna forma:</strong> Občianske združenie</p>
                <p className="mb-2"><strong>IČO:</strong> 50654896</p>
                <p className="mt-3">
                  <a 
                    href="https://www.notar.sk/poberatel/?actId=66f156dde631cd74bf2d6d1e"
                    className="text-[#6B4E71] hover:text-[#8B5E88] underline"
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

      {/* Stats Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Náš dopad</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-[#6B4E71] mb-2">79</div>
              <p>vyškolených poradcov</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-[#6B4E71] mb-2">1000+</div>
              <p>pacientov ročne v poradniach</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-[#6B4E71] mb-2">500k+</div>
              <p>návštevníkov webu ročne</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">
            AKO NÁM EŠTE MÔŽETE POMÔCŤ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3">
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
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">Kontaktujte nás</h3>
              <p className="mb-3">
                Ak viete o firme, ktorá by mohla venovať 2% z dane, napíšte nám na:
              </p>
              <a 
                href="mailto:office@nierakovine.sk"
                className="text-[#6B4E71] hover:text-[#8B5E88] font-semibold"
              >
                office@nierakovine.sk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Venujte nám 2% z dane
          </h2>
          <div className="flex flex-col gap-3">
            <a
              href="/postup-zamestnanci"
              className="bg-white text-gray-800 px-8 py-4 rounded-md 
              border-2 border-gray-300 hover:bg-gray-50 hover:border-[#6B4E71]
              transition-all duration-200 text-lg font-semibold shadow-sm text-center"
            >
              Postup pre ZAMESTNANCOV
            </a>
            <a
              href="/postup-fyzicke-osoby"
              className="bg-white text-gray-800 px-8 py-4 rounded-md 
              border-2 border-gray-300 hover:bg-gray-50 hover:border-[#6B4E71]
              transition-all duration-200 text-lg font-semibold shadow-sm text-center"
            >
              Postup pre FYZICKÉ OSOBY
            </a>
            <a
              href="/postup-pravnicke-osoby"
              className="bg-white text-gray-800 px-8 py-4 rounded-md 
              border-2 border-gray-300 hover:bg-gray-50 hover:border-[#6B4E71]
              transition-all duration-200 text-lg font-semibold shadow-sm text-center"
            >
              Postup pre PRÁVNICKÉ OSOBY
            </a>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            ĎAKUJEME, ŽE STE S NAMI!
          </h2>
          <p className="text-lg text-gray-700">
            Štedrosť našich darcov, partnerov a spolupracovníkov je prejavom solidarity 
            a nádeje pre tých, ktorí bojujú o svoj život. Vaša pomoc je nielen hodnotná, 
            ale aj životne dôležitá.
          </p>
        </div>
      </section>
    </div>
  );
}
