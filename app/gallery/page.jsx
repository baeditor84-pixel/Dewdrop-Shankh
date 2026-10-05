'use client';

import { useState } from 'react';
import Image from 'next/image';
import LightboxModal from '@/components/LightboxModal';
import { ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Executive Suite Master Bedroom',
    category: 'Rooms',
    src: '/images/imgi_32_DSC09497-2048x1365.jpg',
  },
  {
    id: 2,
    title: 'Family Quad Room Double Bed Setup',
    category: 'Rooms',
    src: '/images/imgi_30_DSC09392-2-2048x1365.jpg',
  },
  {
    id: 3,
    title: 'Family Quad Room Spacious Layout',
    category: 'Rooms',
    src: '/images/imgi_31_DSC09456-2-2048x1365.jpg',
  },
  {
    id: 4,
    title: 'Executive Suite Seating & Bedding',
    category: 'Rooms',
    src: '/images/imgi_33_DSC09450-2-2048x1365.jpg',
  },
  {
    id: 5,
    title: 'Twin Bed Deluxe Room Setup',
    category: 'Rooms',
    src: '/images/imgi_34_DSC09408-2-2048x1365.jpg',
  },
  {
    id: 6,
    title: 'Twin Bed Room View 2',
    category: 'Rooms',
    src: '/images/imgi_35_DSC09481-2048x1365.jpg',
  },
  {
    id: 7,
    title: 'Classic Deluxe King Room',
    category: 'Rooms',
    src: '/images/imgi_25_DSC01615-scaled.jpg',
  },
  {
    id: 8,
    title: 'Classic Deluxe Room Ambience',
    category: 'Rooms',
    src: '/images/imgi_27_DSC01483-scaled.jpg',
  },
  {
    id: 9,
    title: 'Classic Deluxe Room Seating',
    category: 'Rooms',
    src: '/images/imgi_28_DSC01451-scaled.jpg',
  },
  {
    id: 10,
    title: 'Luxury Bedroom Detail View',
    category: 'Rooms',
    src: '/images/imgi_37_Copy-of-H44A2063-2048x1365.jpg',
  },
  {
    id: 11,
    title: 'Deluxe Suite Vertical Perspective',
    category: 'Rooms',
    src: '/images/imgi_78_DSC09453-2-1365x2048.jpg',
  },
  {
    id: 12,
    title: 'Deluxe Room Cozy Corner',
    category: 'Rooms',
    src: '/images/imgi_115_H44A2153-1024x683.jpg',
  },
  {
    id: 13,
    title: 'Modern Attached Bathroom View 1',
    category: 'Bathrooms',
    src: '/images/imgi_36_2-bathroom-2048x1707.jpg',
  },
  {
    id: 14,
    title: 'Clean Sanitation & Vanity View 2',
    category: 'Bathrooms',
    src: '/images/imgi_100_3-bathroom-300x200.jpg',
  },
  {
    id: 15,
    title: 'Hotel Reception Desk & Front Desk',
    category: 'Reception & Lobby',
    src: '/images/imgi_120_rec-1024x683.jpg',
  },
  {
    id: 16,
    title: 'Lobby Lounge & Hospitality Area',
    category: 'Reception & Lobby',
    src: '/images/imgi_5_gallery_04.jpg',
  },
  {
    id: 17,
    title: 'Guest Lounge Seating',
    category: 'Reception & Lobby',
    src: '/images/imgi_6_galley_05.jpg',
  },
  {
    id: 18,
    title: 'Hotel Interior Gallery View',
    category: 'Reception & Lobby',
    src: '/images/imgi_2_gallery_01.jpg',
  },
  {
    id: 19,
    title: 'Interior Decor Accent',
    category: 'Reception & Lobby',
    src: '/images/imgi_8_gallery_07.jpg',
  },
  {
    id: 20,
    title: 'FSSAI Food Safety License Certificate',
    category: 'Certificates',
    src: '/images/cert_fssai_badge.svg',
  },
  {
    id: 21,
    title: 'GST Tax Registration Badge',
    category: 'Certificates',
    src: '/images/cert_gst_badge.svg',
  },
  {
    id: 22,
    title: 'Punjab Tourism License Badge',
    category: 'Certificates',
    src: '/images/cert_tourism_badge.svg',
  },
  {
    id: 23,
    title: 'TripAdvisor & MakeMyTrip Excellence Badge',
    category: 'Certificates',
    src: '/images/imgi_124_IMG-4691-225x300.jpg',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Rooms', 'Bathrooms', 'Reception & Lobby', 'Certificates'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-gold-600 block">
          Visual Tour
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink">
          Photo Gallery ({galleryItems.length} Photos)
        </h1>
        <p className="text-base sm:text-lg text-ink-muted">
          Explore all high-resolution photographs of our property including rooms, suites, bathrooms, reception lounge, and official accreditation.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-drop text-white shadow-sm'
                : 'bg-white border border-sand-dark text-ink/70 hover:text-ink hover:bg-sand'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-sand border border-sand-dark/60 shadow-soft cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] uppercase tracking-wider text-gold-300 font-semibold mb-1">
                {item.category}
              </span>
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-sm sm:text-base leading-tight">
                  {item.title}
                </h3>
                <ZoomIn className="w-5 h-5 text-gold-400 flex-shrink-0 ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={!!activeImage}
        onClose={() => setActiveImage(null)}
        imageSrc={activeImage?.src}
        title={activeImage?.title}
        description={`Dewdrop Shankh Amritsar • ${activeImage?.category}`}
      />
    </div>
  );
}
