'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Wifi, Car, Utensils, Clock, Zap, ShieldCheck, Wind, Sparkles, 
  MapPin, Star, ArrowRight, Phone, MessageSquare, Award, CheckCircle2 
} from 'lucide-react';

import { useContent } from '@/context/ContentContext';
import AvailabilityBar from '@/components/AvailabilityBar';
import RoomCard from '@/components/RoomCard';
import LightboxModal from '@/components/LightboxModal';
import FadeIn from '@/components/FadeIn';

// Icon Map helper
const iconMap = {
  Wifi: Wifi,
  Car: Car,
  Utensils: Utensils,
  Clock: Clock,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Wind: Wind,
  Sparkles: Sparkles,
};

export default function HomePage() {
  const { content } = useContent();
  const { hotelInfo, hero, about, rooms, amenities, certificates, nearbyAttractions, testimonials } = content;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center -mt-24 pt-24 overflow-hidden bg-ink">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.heroImage}
            alt={hero.title}
            fill
            className="object-cover object-center scale-105 transition-transform duration-1000 ease-out hover:scale-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-gold-300 tracking-wide uppercase shadow-sm"
          >
            <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
            <span>{hotelInfo.tagline}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-balance text-white"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href={hero.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-drop hover:bg-drop-hover text-white font-semibold text-sm sm:text-base shadow-soft-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{hero.ctaText}</span>
            </a>
            <a
              href={`tel:${hotelInfo.phonePrimary}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            >
              <Phone className="w-4 h-4 text-dew" />
              <span>Call: {hotelInfo.phonePrimary}</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: AVAILABILITY BAR */}
      <FadeIn delay={0.1}>
        <AvailabilityBar />
      </FadeIn>

      {/* SECTION 3: HOTEL OVERVIEW / ABOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <FadeIn direction="right">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-drop-light border border-drop-border text-drop text-xs font-semibold tracking-wider uppercase">
                About Hotel
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink leading-tight">
                {about.title}
              </h2>
              <p className="text-lg font-medium text-drop">
                {about.subtitle}
              </p>
              <p className="text-base text-ink-muted leading-relaxed">
                {about.description}
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-dew flex-shrink-0" />
                    <span className="text-sm font-medium text-ink">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-drop hover:text-drop-hover group"
                >
                  <span>Read more about our property</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Image Grid */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-soft-lg border border-sand-dark group">
                <Image
                  src={about.image}
                  alt="Dewdrop Shankh Reception & Hotel Exterior"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-soft-lg border border-sand-dark max-w-xs hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-dew" />
                  <span className="font-serif font-bold text-ink">Prime Location</span>
                </div>
                <p className="text-xs text-ink-muted">
                  Directly opposite Golden Temple Parking Flyover, Ram Talai Chownk, G.T. Road.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4: FEATURED ROOMS */}
      <section className="bg-sand/40 py-20 border-y border-sand-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-drop block mb-2">
                  Accommodations
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink">
                  Featured Rooms & Suites
                </h2>
              </div>
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-sand-dark text-sm font-semibold text-ink hover:text-drop hover:border-drop-border transition-all shadow-sm group"
              >
                <span>View All 4 Room Categories</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.slice(0, 3).map((room, idx) => (
              <FadeIn key={room.id} delay={idx * 0.15}>
                <RoomCard room={room} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: AMENITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-drop block">
              Guest Comfort
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink">
              Premium Amenities & Services
            </h2>
            <p className="text-base text-ink-muted">
              Designed to ensure complete peace of mind, high hygiene standards, and ultimate convenience.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <FadeIn key={index} delay={index * 0.08}>
                <div className="bg-white p-6 rounded-2xl border border-sand-dark/60 shadow-soft hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-drop-light border border-drop-border/60 flex items-center justify-center text-drop mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-ink mb-2 group-hover:text-drop transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: CERTIFICATES & TRUST STRIP */}
      <section className="bg-ink text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 pb-8 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4" />
                  <span>Verified Trust & Accreditation</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold">
                  Government Recognized & FSSAI Certified
                </h2>
              </div>
              <Link
                href="/certificates"
                className="px-6 py-3 rounded-full bg-drop hover:bg-drop-hover text-white font-semibold text-xs sm:text-sm transition-all hover:scale-105 whitespace-nowrap"
              >
                View Original Certificates & Badges
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certificates.map((cert, idx) => (
              <FadeIn key={cert.id} delay={idx * 0.1}>
                <div
                  onClick={() => setSelectedImage(cert)}
                  className="group relative bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-gold-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
                >
                  <div className="relative w-full h-36 mb-3 rounded-lg overflow-hidden bg-white/10 p-2">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-white group-hover:text-gold-300 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-1">
                    {cert.authority}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: NEARBY ATTRACTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-drop block">
              Location Guide
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink">
              Nearby Attractions in Amritsar
            </h2>
            <p className="text-base text-ink-muted">
              Dewdrop Shankh is conveniently positioned for quick access to sacred sites, historic landmarks, and shopping.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyAttractions.map((place, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                className="bg-white rounded-2xl overflow-hidden border border-sand-dark/60 shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col group h-full"
              >
                {place.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-sand">
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-drop text-xs font-semibold border border-drop-border shadow-sm">
                      {place.distance}
                    </div>
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ink group-hover:text-drop transition-colors">
                      {place.name}
                    </h3>
                    <p className="text-xs font-medium text-dew mt-1">
                      {place.time}
                    </p>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-2">
                      {place.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section className="bg-sand/50 py-20 border-t border-sand-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-drop block">
                Guest Feedback
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                What Guest Travelers Say
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <FadeIn key={idx} delay={idx * 0.12}>
                <div
                  className="bg-white p-6 rounded-2xl border border-sand-dark/60 shadow-soft hover:shadow-soft-lg transition-all duration-300 space-y-4 flex flex-col justify-between h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-gold-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                    <p className="text-sm text-ink-muted italic leading-relaxed">
                      "{t.comment}"
                    </p>
                  </div>
                  <div className="pt-3 border-t border-sand-dark">
                    <h4 className="font-bold text-sm text-ink">{t.name}</h4>
                    <p className="text-xs text-ink/50">{t.location}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <LightboxModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.fullImage || selectedImage?.image}
        title={selectedImage?.title}
        description={selectedImage?.description}
      />
    </div>
  );
}
