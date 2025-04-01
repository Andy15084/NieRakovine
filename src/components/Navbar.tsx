'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo-nierakovine.png"
              alt="NIE RAKOVINE Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-[#6B4E71] font-medium transition-colors duration-200">
              Domov
            </Link>
            <Link href="/aktuality" className="text-gray-700 hover:text-[#6B4E71] font-medium transition-colors duration-200">
              Aktuality
            </Link>
            <Link href="/kto-sme" className="text-gray-700 hover:text-[#6B4E71] font-medium transition-colors duration-200">
              Kto sme
            </Link>
            
            {/* Pomoc pacientom Dropdown */}
            <div className="relative group">
              <Link href="/pomoc-pacientom" className="text-gray-700 hover:text-[#6B4E71] font-medium transition-colors duration-200">
                Pomoc pacientom
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/pomoc-pacientom/online-poradna" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Online poradňa
                </Link>
                <Link href="/pomoc-pacientom/pacientske-poradne" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Pacientske poradne
                </Link>
                <Link href="/pomoc-pacientom/bezplatna-infolinka" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Bezplatná infolinka
                </Link>
                <Link href="/pomoc-pacientom/pacientske-prirucky" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Pacientske príručky
                </Link>
                <Link href="/pomoc-pacientom/mapa-pomoci" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Mapa pomoci
                </Link>
                <Link href="/pomoc-pacientom/klinicke-skusania" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Klinické skúšania
                </Link>
              </div>
            </div>

            <Link href="/obchod" className="text-gray-700 hover:text-[#6B4E71] font-medium transition-colors duration-200">
              Obchod
            </Link>

            {/* Diagnózy Dropdown */}
            <div className="relative group">
              <Link href="/diagnozy" className="text-gray-700 hover:text-[#6B4E71] font-medium transition-colors duration-200">
                Diagnózy
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/diagnozy/rakovina-prsnika" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Rakovina prsníka
                </Link>
                <Link href="/diagnozy/rakovina-hrubeho-creva" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Rakovina hrubého čreva
                </Link>
                <Link href="/diagnozy/rakovina-pankreasu" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Rakovina pankreasu
                </Link>
                <Link href="/diagnozy/rakovina-prostaty-a-semennikov" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Rakovina prostaty a semenníkov
                </Link>
                <Link href="/diagnozy/rakovina-krcka-maternice" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Rakovina krčka maternice
                </Link>
                <Link href="/diagnozy/neuroendokrinicke-tumory" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Neuroendokrinické tumory
                </Link>
                <Link href="/diagnozy/rakovina-pluc" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Rakovina pľúc
                </Link>
                <Link href="/diagnozy/rakovina-mocoveho-mechura" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Rakovina močového mechúra
                </Link>
                <Link href="/diagnozy/rakovina-koze" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6B4E71]">
                  Rakovina kože
                </Link>
              </div>
            </div>

            <Link href="/podporte-nas" className="text-gray-700 hover:text-[#6B4E71] font-medium transition-colors duration-200">
              Podporte nás
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-[#6B4E71] font-medium transition-colors duration-200">
              Prihlásiť sa
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-[#6B4E71] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link href="/" className="block py-2 text-gray-700 hover:text-[#6B4E71]">Domov</Link>
          <Link href="/aktuality" className="block py-2 text-gray-700 hover:text-[#6B4E71]">Aktuality</Link>
          <Link href="/kto-sme" className="block py-2 text-gray-700 hover:text-[#6B4E71]">Kto sme</Link>
          <Link href="/pomoc-pacientom" className="block py-2 text-gray-700 hover:text-[#6B4E71]">Pomoc pacientom</Link>
          <Link href="/obchod" className="block py-2 text-gray-700 hover:text-[#6B4E71]">Obchod</Link>
          <Link href="/diagnozy" className="block py-2 text-gray-700 hover:text-[#6B4E71]">Diagnózy</Link>
          <Link href="/podporte-nas" className="block py-2 text-gray-700 hover:text-[#6B4E71]">Podporte nás</Link>
          <Link href="/login" className="block py-2 text-gray-700 hover:text-[#6B4E71]">Prihlásiť sa</Link>
        </div>
      </div>
    </nav>
  );
} 