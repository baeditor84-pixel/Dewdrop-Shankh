import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, MessageSquare, ExternalLink, ShieldCheck, Lock } from 'lucide-react';
import contentData from '@/content/content.json';

export default function Footer() {
  const { hotelInfo, certificates } = contentData;

  return (
    <footer className="bg-[#141414] text-white pt-16 pb-24 md:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Col 1: About & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold-400 bg-white p-0.5">
                <Image
                  src={hotelInfo.logo}
                  alt={hotelInfo.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-tight text-white">
                  {hotelInfo.name}
                </h3>
                <p className="text-xs text-gold-400 uppercase tracking-widest">
                  Amritsar • Punjab
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {hotelInfo.taglineSub} Located right near the Golden Temple Parking Flyover on G.T. Road.
            </p>
            <div className="flex items-center gap-3 text-xs text-gold-400 pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Government Recognized & FSSAI Certified</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 border-b border-gold-500/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-gold-400 transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-400 transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-gold-400 transition-colors">
                  Amenities & Facilities
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="hover:text-gold-400 transition-colors">
                  Licenses & Trust Badges
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  About Hotel
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/admin" className="inline-flex items-center gap-1.5 text-xs font-semibold text-drop hover:text-white transition-colors">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Admin Image Manager</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 border-b border-gold-500/30 pb-2">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{hotelInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`tel:${hotelInfo.phonePrimary}`} className="hover:text-gold-400 transition-colors">
                  {hotelInfo.phonePrimary} / {hotelInfo.phoneSecondary}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${hotelInfo.email}`} className="hover:text-gold-400 transition-colors break-all">
                  {hotelInfo.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={hotelInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Licenses Strip */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 border-b border-gold-500/30 pb-2">
              Certifications
            </h4>
            <p className="text-xs text-gray-400 mb-3">
              Official recognized hospitality partner in Amritsar.
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {certificates.map((cert) => (
                <Link
                  key={cert.id}
                  href="/certificates"
                  className="group relative h-16 rounded-lg overflow-hidden bg-white/5 border border-white/10 p-1 hover:border-gold-400 transition-colors"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} {hotelInfo.name} ({hotelInfo.brand}). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Hotel Terms
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Direct Booking
            </Link>
            <Link href="/admin" className="text-gold-400 hover:underline flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" />
              <span>Admin Panel</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
