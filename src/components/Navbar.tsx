'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/logo-nierakovine.png"
              alt="NIE RAKOVINE Logo"
              className="h-10"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/o-nas"
              className="text-gray-700 hover:text-[#6B4E71] font-medium 
              transition-colors duration-200"
            >
              O nás
            </Link>
            <Link
              href="/aktivity"
              className="text-gray-700 hover:text-[#6B4E71] font-medium 
              transition-colors duration-200"
            >
              Aktivity
            </Link>
            <Link
              href="/podporte-nas"
              className="text-gray-700 hover:text-[#6B4E71] font-medium 
              transition-colors duration-200"
            >
              Podporte nás
            </Link>
            <Link
              href="/kontakt"
              className="text-gray-700 hover:text-[#6B4E71] font-medium 
              transition-colors duration-200"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 