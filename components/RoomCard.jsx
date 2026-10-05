'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Users, Maximize2, Bed, Check, MessageSquare, Phone } from 'lucide-react';
import contentData from '@/content/content.json';

export default function RoomCard({ room }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { hotelInfo } = contentData;

  const currentImage = room.images[activeImageIndex] || room.images[0];

  const handleWhatsAppBook = () => {
    const msg = `Hello Dewdrop Shankh,%0A%0AI am interested in booking the *${encodeURIComponent(room.title)}*.%0APlease share availability and room tariff.`;
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-sand-dark/60 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col h-full group">
      {/* Room Image Container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-sand">
        <Image
          src={currentImage}
          alt={room.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

        {/* Thumbnail Selector */}
        {room.images.length > 1 && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-1.5 z-10">
            {room.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeImageIndex === idx
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`View photo ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Category Tag with Logo Blue touch */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-drop tracking-wide border border-drop-border shadow-sm">
          {room.occupancy}
        </div>
      </div>

      {/* Room Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-1 group-hover:text-drop transition-colors">
            {room.title}
          </h3>
          <p className="text-xs text-drop font-medium mb-3">
            {room.tagline}
          </p>
          <p className="text-sm text-ink-muted leading-relaxed mb-4">
            {room.description}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-sand/60 border border-sand-dark/40 mb-4 text-xs font-medium text-ink/80">
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-dew flex-shrink-0" />
              <span>{room.size}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-dew flex-shrink-0" />
              <span>{room.occupancy.split(' ')[0]} Guests</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Bed className="w-3.5 h-3.5 text-dew flex-shrink-0" />
              <span className="truncate">{room.bedType}</span>
            </div>
          </div>

          {/* Room Amenities Badges */}
          <div className="space-y-1.5 mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-ink/50 block">
              Room Amenities:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {room.amenities.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs text-ink/80 bg-sand/40 border border-sand-dark/30"
                >
                  <Check className="w-3 h-3 text-drop" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-4 border-t border-sand-dark/60 flex items-center gap-3">
          <button
            onClick={handleWhatsAppBook}
            className="flex-1 py-3 px-4 rounded-xl bg-drop hover:bg-drop-hover text-white font-semibold text-xs sm:text-sm shadow-soft flex items-center justify-center gap-2 transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book / Enquire</span>
          </button>
          <a
            href={`tel:${hotelInfo.phonePrimary}`}
            className="p-3 rounded-xl bg-dew-light hover:bg-dew-light/80 text-dew font-semibold text-xs border border-dew-border transition-colors"
            title="Call Front Desk"
          >
            <Phone className="w-4 h-4 text-dew" />
          </a>
        </div>
      </div>
    </div>
  );
}
