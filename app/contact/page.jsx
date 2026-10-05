'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, Clock } from 'lucide-react';
import contentData from '@/content/content.json';

export default function ContactPage() {
  const { hotelInfo } = contentData;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    guests: '2',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open WhatsApp with form query prefilled
    const msg = `Hello Dewdrop Shankh,%0A%0AInquiry from Web Form:%0A• Name: ${encodeURIComponent(formData.name)}%0A• Phone: ${encodeURIComponent(formData.phone)}%0A• Email: ${encodeURIComponent(formData.email)}%0A• Check-in: ${formData.checkIn || 'Not specified'}%0A• Guests: ${formData.guests}%0A• Note: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-gold-600 block">
          Direct Hotel Contact
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink">
          Get in Touch With Us
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
          Have questions about room availability, group packages, or directions? Reach out to our 24/7 front desk team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Col */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-sand-dark/80 shadow-soft space-y-6">
            <h3 className="font-serif text-2xl font-bold text-ink border-b border-sand-dark pb-4">
              Contact Information
            </h3>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gold-50 text-gold-600 border border-gold-200 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-ink">Hotel Address</h4>
                  <p className="text-ink-muted mt-1 leading-relaxed">
                    {hotelInfo.address}
                  </p>
                  <span className="text-xs text-gold-600 font-semibold mt-1 block">
                    Landmark: {hotelInfo.landmark}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gold-50 text-gold-600 border border-gold-200 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-ink">Direct Booking Helpline</h4>
                  <a
                    href={`tel:${hotelInfo.phonePrimary}`}
                    className="text-gold-600 font-semibold text-base hover:underline block mt-1"
                  >
                    {hotelInfo.phonePrimary}
                  </a>
                  <a
                    href={`tel:${hotelInfo.phoneSecondary}`}
                    className="text-gold-600 font-semibold text-base hover:underline block"
                  >
                    {hotelInfo.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gold-50 text-gold-600 border border-gold-200 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-ink">Email Inquiries</h4>
                  <a
                    href={`mailto:${hotelInfo.email}`}
                    className="text-ink-muted hover:text-gold-600 block mt-1 break-all"
                  >
                    {hotelInfo.email}
                  </a>
                  <span className="text-xs text-ink/50 block mt-0.5">
                    For direct guest & B2B corporate emails
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gold-50 text-gold-600 border border-gold-200 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-ink">Check-In / Check-Out Hours</h4>
                  <p className="text-ink-muted mt-1">
                    Check-In: {hotelInfo.checkInTime} | Check-Out: {hotelInfo.checkOutTime}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action buttons */}
            <div className="pt-4 border-t border-sand-dark flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${hotelInfo.phonePrimary}`}
                className="flex-1 py-3 px-4 rounded-xl bg-ink hover:bg-black text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Desk</span>
              </a>
              <a
                href={`https://wa.me/${hotelInfo.whatsapp}?text=Hello%20Dewdrop%20Shankh,%20I%20would%20like%20to%20enquire%20about%20room%20availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-gold-600 hover:bg-gold-500 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form Col */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-sand-dark/80 shadow-soft">
            <h3 className="font-serif text-2xl font-bold text-ink mb-2">
              Send an Online Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted mb-6">
              Fill out the form below to connect directly with our reservation manager.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-gold-50 border border-gold-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-gold-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-ink">
                  Inquiry Dispatched!
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted">
                  Thank you! Your inquiry details have been forwarded to our WhatsApp reservation desk. We will respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full bg-gold-600 text-white text-xs font-semibold hover:bg-gold-500 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-ink/70 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-sand-dark focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm text-ink bg-canvas/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink/70 mb-1">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 rounded-xl border border-sand-dark focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm text-ink bg-canvas/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-ink/70 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-sand-dark focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm text-ink bg-canvas/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink/70 mb-1">
                      Tentative Check-In Date
                    </label>
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-sand-dark focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm text-ink bg-canvas/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink/70 mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-sand-dark focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm text-ink bg-canvas/30"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests (Family)</option>
                    <option value="5+">5+ Group Booking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink/70 mb-1">
                    Message / Special Requests
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention preferred room type or extra requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-sand-dark focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm text-ink bg-canvas/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gold-600 hover:bg-gold-500 text-white font-semibold text-sm shadow-soft flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Embedded Google Map Section */}
      <div className="space-y-4">
        <h3 className="font-serif text-2xl font-bold text-ink">
          Interactive Hotel Location Map
        </h3>
        <div className="w-full h-96 rounded-3xl overflow-hidden shadow-soft border border-sand-dark">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0423190875646!2d74.8760!3d31.6200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919630000000001%3A0x0!2zMzHCsDM3JzEyLjAiTiA3NMKwNTInMzMuNiJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dewdrop Shankh Hotel Location Map"
          />
        </div>
      </div>
    </div>
  );
}
