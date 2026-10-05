'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, imageSrc, title, description }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal Content */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center bg-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[60vh] sm:h-[75vh] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={imageSrc}
            alt={title || 'Enlarged View'}
            fill
            className="object-contain"
            priority
          />
        </div>
        {(title || description) && (
          <div className="mt-4 text-center max-w-xl text-white px-4">
            {title && <h3 className="font-serif text-lg sm:text-xl font-semibold">{title}</h3>}
            {description && <p className="text-xs sm:text-sm text-gray-300 mt-1">{description}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
