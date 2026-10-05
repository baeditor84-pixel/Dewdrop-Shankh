'use client';

import { useState } from 'react';
import { Calendar, Users, BedDouble, Search, ChevronRight } from 'lucide-react';
import contentData from '@/content/content.json';

export default function AvailabilityBar() {
  const { hotelInfo, rooms } = contentData;

  // Default dates: tomorrow check-in, +1 day check-out
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 2);

  const formatDate = (d) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [guests, setGuests] = useState('2');
  const [selectedRoom, setSelectedRoom] = useState('any');

  const handleSearch = (e) => {
    e.preventDefault();
    const roomName = selectedRoom === 'any' ? 'Any Room Category' : rooms.find(r => r.id === selectedRoom)?.title || selectedRoom;
    const msg = `Hello Dewdrop Shankh,%0A%0AI would like to check room availability:%0A• Check-in: ${checkIn}%0A• Check-out: ${checkOut}%0A• Guests: ${guests}%0A• Preferred Room: ${encodeURIComponent(roomName)}%0A%0APlease share available rates and booking details.`;
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 -mt-10 sm:-mt-12 relative z-30">
      <form
        onSubmit={handleSearch}
        className="bg-white rounded-2xl sm:rounded-full p-4 sm:p-3 shadow-soft-lg border border-sand-dark/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center"
      >
        {/* Check-In */}
        <div className="flex items-center gap-3 px-3 py-2 border-b sm:border-b-0 sm:border-r border-sand-dark">
          <Calendar className="w-5 h-5 text-drop flex-shrink-0" />
          <div className="w-full">
            <label className="block text-[10px] uppercase tracking-wider font-semibold text-ink/50">
              Check-In Date
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-xs sm:text-sm font-semibold text-ink bg-transparent focus:outline-none cursor-pointer"
              required
            />
          </div>
        </div>

        {/* Check-Out */}
        <div className="flex items-center gap-3 px-3 py-2 border-b sm:border-b-0 lg:border-r border-sand-dark">
          <Calendar className="w-5 h-5 text-drop flex-shrink-0" />
          <div className="w-full">
            <label className="block text-[10px] uppercase tracking-wider font-semibold text-ink/50">
              Check-Out Date
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-xs sm:text-sm font-semibold text-ink bg-transparent focus:outline-none cursor-pointer"
              required
            />
          </div>
        </div>

        {/* Guests & Room */}
        <div className="flex items-center gap-3 px-3 py-2 border-b sm:border-b-0 sm:border-r border-sand-dark">
          <Users className="w-5 h-5 text-drop flex-shrink-0" />
          <div className="w-full">
            <label className="block text-[10px] uppercase tracking-wider font-semibold text-ink/50">
              Guests & Room
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full text-xs sm:text-sm font-semibold text-ink bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests (Family)</option>
              <option value="5+">5+ Group Booking</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="p-1">
          <button
            type="submit"
            className="w-full py-3 sm:py-3.5 px-6 rounded-xl sm:rounded-full bg-drop hover:bg-drop-hover text-white font-semibold text-xs sm:text-sm shadow-soft flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-md active:scale-98"
          >
            <Search className="w-4 h-4" />
            <span>Check Availability</span>
          </button>
        </div>
      </form>
    </div>
  );
}
