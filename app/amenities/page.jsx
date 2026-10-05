import contentData from '@/content/content.json';
import { 
  Wifi, Car, Utensils, Clock, Zap, ShieldCheck, Wind, Sparkles, 
  Tv, Coffee, PhoneCall, CheckCircle 
} from 'lucide-react';

export const metadata = {
  title: 'Amenities & Services',
  description: 'Discover all facilities at Dewdrop Shankh Hotel including high speed Wi-Fi, spacious parking, 24/7 room service, power backup, and dining.',
};

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

export default function AmenitiesPage() {
  const { amenities } = contentData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-gold-600 block">
          Hotel Facilities
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink">
          Amenities & Services
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
          At Dewdrop Shankh, every convenience is thoughtfully provided so you can focus on enjoying your trip to Amritsar.
        </p>
      </div>

      {/* Main Amenities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {amenities.map((item, idx) => {
          const IconComponent = iconMap[item.icon] || Sparkles;
          return (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-sand-dark/60 shadow-soft hover:shadow-soft-lg transition-all duration-300 space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold-50 border border-gold-200/80 flex items-center justify-center text-gold-600">
                <IconComponent className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* In-Room Facilities List */}
      <div className="bg-sand/50 rounded-3xl p-8 sm:p-12 border border-sand-dark space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-wider font-semibold text-gold-600 block mb-2">
            In-Room Convenience
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            Standard In-Room Amenities Included in Every Stay
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 text-sm text-ink font-medium">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-gold-600" />
            <span>High Speed Wi-Fi Access</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-gold-600" />
            <span>Individual Air Conditioning</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-gold-600" />
            <span>24/7 Hot & Cold Running Water</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-gold-600" />
            <span>Flat Screen Cable TV</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-gold-600" />
            <span>Tea / Coffee Electric Kettle</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-gold-600" />
            <span>Fresh Sanitized Linens & Towels</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-gold-600" />
            <span>Intercom & Room Service Dialing</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-gold-600" />
            <span>Writing Desk & Chair</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-gold-600" />
            <span>Daily Housekeeping & Mineral Water</span>
          </div>
        </div>
      </div>
    </div>
  );
}
