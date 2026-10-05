'use client';

import { useState } from 'react';
import Image from 'next/image';
import LightboxModal from '@/components/LightboxModal';
import { ShieldCheck, Award, ZoomIn, FileCheck } from 'lucide-react';
import contentData from '@/content/content.json';

export default function CertificatesPage() {
  const { certificates, hotelInfo } = contentData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Verified Government & Hospitality Accreditation</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink">
          Certificates & Licenses
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
          We adhere strictly to all government regulations, food safety protocols, and tax compliances to ensure a trustworthy stay for our guests.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="group bg-white rounded-2xl p-5 border border-sand-dark/80 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Certificate Image Frame */}
              <div className="relative h-64 w-full rounded-xl overflow-hidden bg-sand border border-sand-dark/60 mb-5 p-2">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white gap-2 font-medium text-xs">
                  <ZoomIn className="w-5 h-5 text-gold-300" />
                  <span>Click to view full size</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-ink group-hover:text-gold-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-gold-600">
                  {cert.authority}
                </p>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-sand-dark flex items-center justify-between text-xs font-semibold text-gold-600">
              <span className="flex items-center gap-1">
                <FileCheck className="w-3.5 h-3.5" />
                Verified Active
              </span>
              <span className="group-hover:translate-x-1 transition-transform">
                Enlarge →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Guarantee Box */}
      <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 border border-white/10 text-center space-y-4 max-w-4xl mx-auto">
        <Award className="w-10 h-10 text-gold-400 mx-auto" />
        <h2 className="font-serif text-2xl sm:text-3xl font-bold">
          Official GST & Corporate Tax Billing Available
        </h2>
        <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Visiting Amritsar for business or corporate travel? We provide valid GST tax invoices for company reimbursements promptly upon check-out.
        </p>
        <div className="pt-2">
          <a
            href={`mailto:${hotelInfo.email}?subject=GST%20Invoice%20%2F%20B2B%20Corporate%20Inquiry`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-600 hover:bg-gold-500 text-white font-semibold text-xs sm:text-sm transition-colors"
          >
            <span>Email Corporate Desk ({hotelInfo.email})</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        imageSrc={selectedCert?.fullImage || selectedCert?.image}
        title={selectedCert?.title}
        description={selectedCert?.authority}
      />
    </div>
  );
}
