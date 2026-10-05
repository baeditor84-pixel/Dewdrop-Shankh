'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import { useContent } from '@/context/ContentContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { content } = useContent();
  const hotelInfo = content?.hotelInfo || {};

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/rooms', label: 'Rooms' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/amenities', label: 'Amenities' },
    { href: '/certificates', label: 'Certificates' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-canvas/98 backdrop-blur-md ${
        scrolled ? 'py-3 shadow-soft border-b border-sand-dark' : 'py-4 border-b border-sand-dark/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden bg-white shadow-sm transition-transform duration-300 group-hover:scale-105 border-2 border-transparent bg-gradient-to-r from-dew to-drop p-[2px]">
              <div className="relative w-full h-full rounded-full bg-white overflow-hidden">
                <Image
                  src={hotelInfo.logo || '/images/imgi_1_Dewdrop_Hotel_logo.jpg'}
                  alt={`${hotelInfo.name || 'Dewdrop Shankh'} Logo`}
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-ink block leading-tight">
                <span className="text-dew">Dew</span><span className="text-drop">drop</span> <span className="text-ink">Shankh</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-drop block">
                Amritsar • Punjab
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-drop bg-drop-light font-semibold shadow-sm border border-drop-border/50'
                      : 'text-ink/80 hover:text-drop hover:bg-sand'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${hotelInfo.phonePrimary}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-ink bg-white border border-sand-dark shadow-sm hover:border-dew hover:text-dew hover:bg-dew-light transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-dew flex-shrink-0" />
              <span className="whitespace-nowrap">{hotelInfo.phonePrimary}</span>
            </a>
            <a
              href={`https://wa.me/${hotelInfo.whatsapp}?text=Hello%20Dewdrop%20Shankh,%20I%20would%20like%20to%20enquire%20about%20room%20availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-drop hover:bg-drop-hover shadow-soft transition-all duration-200 hover:shadow-md whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Book via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${hotelInfo.phonePrimary}`}
              className="p-2 rounded-full text-dew bg-white border border-dew-border shadow-sm"
              aria-label="Call Hotel"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ink bg-white border border-sand-dark hover:bg-sand transition-colors shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-sand-dark shadow-soft-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-drop bg-drop-light font-semibold'
                      : 'text-ink/90 hover:bg-sand'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-sand-dark space-y-2">
              <a
                href={`tel:${hotelInfo.phonePrimary}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-ink border border-sand-dark bg-white shadow-sm"
              >
                <Phone className="w-4 h-4 text-dew" />
                <span>Call {hotelInfo.phonePrimary}</span>
              </a>
              <a
                href={`https://wa.me/${hotelInfo.whatsapp}?text=Hello%20Dewdrop%20Shankh,%20I%20would%20like%20to%20enquire%20about%20room%20availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-drop shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
