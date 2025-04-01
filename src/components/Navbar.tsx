'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              {/* Replace with your actual logo */}
              <div className="w-40 h-12 relative">
                <Image
                  src="/logo.png"
                  alt="Nie Rakovine Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="nav-link">Domov</Link>
            <Link href="/aktuality" className="nav-link">Aktuality</Link>
            <Link href="/kto-sme" className="nav-link">Kto sme</Link>
            
            {/* Pomoc pacientom Dropdown */}
            <div className="relative group">
              <Link href="/pomoc-pacientom" className="nav-link">
                Pomoc pacientom
              </Link>
              <div className="dropdown">
                <Link href="/pomoc-pacientom/online-poradna" className="dropdown-item">
                  Online poradňa
                </Link>
                <Link href="/pomoc-pacientom/pacientske-poradne" className="dropdown-item">
                  Pacientske poradne
                </Link>
                <Link href="/pomoc-pacientom/bezplatna-infolinka" className="dropdown-item">
                  Bezplatná infolinka
                </Link>
                <Link href="/pomoc-pacientom/pacientske-prirucky" className="dropdown-item">
                  Pacientske príručky
                </Link>
                <Link href="/pomoc-pacientom/mapa-pomoci" className="dropdown-item">
                  Mapa pomoci
                </Link>
                <Link href="/pomoc-pacientom/klinicke-skusania" className="dropdown-item">
                  Klinické skúšania
                </Link>
              </div>
            </div>

            <Link href="/obchod" className="nav-link">Obchod</Link>

            {/* Diagnózy Dropdown */}
            <div className="relative group">
              <Link href="/diagnozy" className="nav-link">
                Diagnózy
              </Link>
              <div className="dropdown">
                <Link href="/diagnozy/rakovina-prsnika" className="dropdown-item">
                  Rakovina prsníka
                </Link>
                <Link href="/diagnozy/rakovina-hrubeho-creva" className="dropdown-item">
                  Rakovina hrubého čreva
                </Link>
                <Link href="/diagnozy/rakovina-pankreasu" className="dropdown-item">
                  Rakovina pankreasu
                </Link>
                <Link href="/diagnozy/rakovina-prostaty-a-semennikov" className="dropdown-item">
                  Rakovina prostaty a semenníkov
                </Link>
                <Link href="/diagnozy/rakovina-krcka-maternice" className="dropdown-item">
                  Rakovina krčka maternice
                </Link>
                <Link href="/diagnozy/neuroendokrinicke-tumory" className="dropdown-item">
                  Neuroendokrinické tumory
                </Link>
                <Link href="/diagnozy/rakovina-pluc" className="dropdown-item">
                  Rakovina pľúc
                </Link>
                <Link href="/diagnozy/rakovina-mocoveho-mechura" className="dropdown-item">
                  Rakovina močového mechúra
                </Link>
                <Link href="/diagnozy/rakovina-koze" className="dropdown-item">
                  Rakovina kože
                </Link>
              </div>
            </div>

            <Link href="/podporte-nas" className="nav-link">Podporte nás</Link>
            <Link href="/login" className="nav-link">Prihlásiť sa</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-purple hover:text-light-purple focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block px-3 py-2 text-primary-purple hover:text-light-purple">Domov</Link>
          <Link href="/aktuality" className="block px-3 py-2 text-primary-purple hover:text-light-purple">Aktuality</Link>
          <Link href="/kto-sme" className="block px-3 py-2 text-primary-purple hover:text-light-purple">Kto sme</Link>
          <Link href="/pomoc-pacientom" className="block px-3 py-2 text-primary-purple hover:text-light-purple">Pomoc pacientom</Link>
          <Link href="/obchod" className="block px-3 py-2 text-primary-purple hover:text-light-purple">Obchod</Link>
          <Link href="/diagnozy" className="block px-3 py-2 text-primary-purple hover:text-light-purple">Diagnózy</Link>
          <Link href="/podporte-nas" className="block px-3 py-2 text-primary-purple hover:text-light-purple">Podporte nás</Link>
          <Link href="/login" className="block px-3 py-2 text-primary-purple hover:text-light-purple">Prihlásiť sa</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 