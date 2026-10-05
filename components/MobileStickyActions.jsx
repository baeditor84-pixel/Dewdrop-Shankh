'use client';

import { Phone, MessageSquare } from 'lucide-react';
import contentData from '@/content/content.json';

export default function MobileStickyActions() {
  const { hotelInfo } = contentData;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-3 bg-canvas/95 backdrop-blur-lg border-t border-sand-dark shadow-soft-lg">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={`tel:${hotelInfo.phonePrimary}`}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-ink bg-white border border-ink/15 shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-gold-600" />
          <span>Call Hotel</span>
        </a>
        <a
          href={`https://wa.me/${hotelInfo.whatsapp}?text=Hello%20Dewdrop%20Shankh,%20I%20would%20like%20to%20enquire%20about%20room%20availability.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gold-600 shadow-sm active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
