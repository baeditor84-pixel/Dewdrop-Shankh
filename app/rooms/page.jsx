import RoomCard from '@/components/RoomCard';
import contentData from '@/content/content.json';
import { Phone, MessageSquare, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Luxury Rooms & Suites',
  description: 'Explore our spacious Family Quad rooms, Suit Rooms, Twin Bed Deluxe, and Classic King rooms at Dewdrop Shankh Hotel Amritsar.',
};

export default function RoomsPage() {
  const { rooms, hotelInfo } = contentData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-gold-600 block">
          Dewdrop Shankh Accommodations
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink">
          Rooms & Executive Suites
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
          Newly constructed, air-conditioned luxury rooms equipped with high-speed Wi-Fi, premium bathrooms, and 24/7 dedicated room service.
        </p>
      </div>

      {/* Room Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      {/* Direct Booking Helpline Box */}
      <div className="bg-sand/60 rounded-3xl p-8 border border-sand-dark/80 text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="font-serif text-2xl font-bold text-ink">
          Need Special Corporate or Group Booking Assistance?
        </h3>
        <p className="text-sm text-ink-muted">
          Contact our General Manager directly for custom packages, tour bus group bookings, or B2B invoicing with GST.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={`tel:${hotelInfo.phonePrimary}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-semibold text-sm hover:bg-black transition-colors"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Call: {hotelInfo.phonePrimary}</span>
          </a>
          <a
            href={`https://wa.me/${hotelInfo.whatsapp}?text=Hello%20Dewdrop%20Shankh,%20I%20have%20a%20group/B2B%20enquiry.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gold-600 text-white font-semibold text-sm hover:bg-gold-500 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
}
