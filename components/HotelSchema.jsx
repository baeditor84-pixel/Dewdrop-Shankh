import contentData from '@/content/content.json';

export default function HotelSchema() {
  const { hotelInfo, rooms } = contentData;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": hotelInfo.name,
    "description": hotelInfo.taglineSub,
    "url": "https://dewdrophotels.co.in/",
    "logo": "https://dewdrophotels.co.in/public/images/imgi_1_Dewdrop_Hotel_logo.jpg",
    "telephone": hotelInfo.phonePrimary,
    "email": hotelInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ram Talai Chownk, Opp. Golden Temple Parking Flyover, G.T Road",
      "addressLocality": "Amritsar",
      "addressRegion": "Punjab",
      "postalCode": "143001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.6200",
      "longitude": "74.8760"
    },
    "checkinTime": hotelInfo.checkInTime,
    "checkoutTime": hotelInfo.checkOutTime,
    "priceRange": "₹₹",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.8"
    },
    "containsPlace": rooms.map((room) => ({
      "@type": "HotelRoom",
      "name": room.title,
      "description": room.description,
      "occupancy": room.occupancy,
      "bed": room.bedType
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
