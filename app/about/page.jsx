import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import contentData from '@/content/content.json';

export const metadata = {
  title: 'About Dewdrop Shankh Hotel Amritsar',
  description: 'Learn about Dewdrop Shankh Hotel in Amritsar, located at Ram Talai Chownk near Golden Temple Parking Flyover, offering modern luxury, spacious parking, and Punjabi hospitality.',
};

export default function AboutPage() {
  const { hotelInfo, about } = contentData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-gold-600 block">
          Our Heritage & Hospitality
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink">
          About Dewdrop Shankh
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
          {about.subtitle}
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-soft-lg border border-sand-dark">
          <Image
            src={about.image}
            alt="Dewdrop Shankh Hotel"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-ink">
            A Haven of Tranquility & Modern Luxury
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            Dewdrop Shankh is a newly constructed, state-of-the-art hotel property situated on Grand Trunk (G.T.) Road in Amritsar. Designed with clean modern architectural aesthetics, warm lighting, and luxury furnishings, we cater to families, spiritual pilgrims, corporate travelers, and vacationers.
          </p>
          <p className="text-base text-ink-muted leading-relaxed">
            Our prime location directly opposite the Golden Temple Parking Flyover at Ram Talai Chownk offers unparalleled convenience—allowing guests to easily access the Golden Temple, Jallianwala Bagh, and Partition Museum within 5 minutes, while avoiding inner city traffic jams.
          </p>

          <div className="space-y-3 pt-2">
            {about.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <span className="text-sm font-semibold text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-sand-dark/60 shadow-soft space-y-3">
          <MapPin className="w-8 h-8 text-gold-600" />
          <h3 className="font-serif text-xl font-bold text-ink">Prime Strategic Location</h3>
          <p className="text-sm text-ink-muted leading-relaxed">
            Situated on main G.T. Road with direct flyover connectivity to Golden Temple parking, making arrival and departure seamless.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-sand-dark/60 shadow-soft space-y-3">
          <HeartHandshake className="w-8 h-8 text-gold-600" />
          <h3 className="font-serif text-xl font-bold text-ink">Warm Punjabi Hospitality</h3>
          <p className="text-sm text-ink-muted leading-relaxed">
            Our attentive hotel staff is dedicated to ensuring you feel welcomed, comfortable, and thoroughly pampered throughout your stay.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-sand-dark/60 shadow-soft space-y-3">
          <ShieldCheck className="w-8 h-8 text-gold-600" />
          <h3 className="font-serif text-xl font-bold text-ink">Safety & Hygiene Standards</h3>
          <p className="text-sm text-ink-muted leading-relaxed">
            Strict sanitization protocols, 24/7 CCTV surveillance, FSSAI certified kitchen, and verified staff for complete peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
}
