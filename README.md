# Dewdrop Shankh Hotel — Website Redesign

A modern, minimalist, luxury hotel website for **Dewdrop Shankh** (Dewdrop Hotels), Amritsar. Built with **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Lucide React Icons**, featuring a content-driven architecture powered by `content/content.json`.

---

## Key Features & Improvements

- **Modern Minimalist Calm Luxury Design:** Off-white canvas (`#FAFAF8`), dark typography (`#1A1A1A`), warm gold logo accent (`#CF9D6C`), clean borders, and smooth hover micro-animations.
- **Content-Driven Architecture:** All text, room categories, amenities, certificates, nearby places, and contact numbers are driven directly by `content/content.json`.
- **Complete Content Preservation:** Audited and preserved 100% of authentic hotel facts, original room categories, contact details (`+91 9417127963`, `+91 9877186350`), email (`gm.shankh@dewdrophotels.co.in`), and verified certificates (FSSAI, GST, Punjab Tourism, TripAdvisor).
- **Interactive Availability Bar:** Guests can select check-in date, check-out date, and guest count to trigger direct WhatsApp booking inquiries.
- **Mobile-First Experience:** Sticky floating action bar on mobile for 1-tap direct calls and WhatsApp chat.
- **Dedicated Certificates Page:** Showcase of original license images with full-screen Lightbox zoom.
- **Full SEO & Schema Markup:** Next.js Metadata API, OpenGraph social tags, sitemap.xml, robots.txt, and JSON-LD `Hotel` structured schema.

---

## Project Structure

```
dewdrophotels.co.in/
├── app/
│   ├── layout.jsx            # Root layout with Navbar, Footer, MobileActions & HotelSchema
│   ├── page.jsx              # Home page
│   ├── rooms/page.jsx        # Rooms & Suites page
│   ├── gallery/page.jsx      # Gallery with Lightbox
│   ├── amenities/page.jsx    # Amenities & Services page
│   ├── certificates/page.jsx # Certificates & Accreditation page
│   ├── about/page.jsx        # About hotel page
│   ├── contact/page.jsx      # Contact form, Call CTA & Google Map
│   ├── globals.css           # Custom CSS variables, typography & Tailwind imports
│   ├── sitemap.js            # Dynamic SEO sitemap
│   └── robots.js             # SEO robots.txt
├── components/
│   ├── Navbar.jsx            # Glassmorphic header navigation
│   ├── Footer.jsx            # Multi-column footer with quick links & badges
│   ├── AvailabilityBar.jsx   # Check-in/Check-out search bar
│   ├── RoomCard.jsx          # Room card with photo switcher
│   ├── LightboxModal.jsx     # Lightbox viewer for gallery & certificates
│   ├── MobileStickyActions.jsx# Mobile bottom floating action bar
│   └── HotelSchema.jsx       # JSON-LD Schema.org Hotel markup
├── content/
│   └── content.json          # Master hotel content database
├── public/
│   └── images/               # High quality hotel photos & certificate assets
├── tailwind.config.js        # Theme tokens & custom colors
├── next.config.js            # Next.js configuration
└── package.json              # Project dependencies
```

---

## Local Development Instructions

### Prerequisites
- Node.js `v18.x` or higher
- npm or yarn

### Steps to Run Locally

1. Clone or open the repository folder:
   ```bash
   cd "c:/Users/ASUS/Desktop/all works/all website design/dewdrophotels.co.in"
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)

---

## Production Build & Deployment to Vercel

### Build Verification
Run the production build command locally to verify zero build issues:
```bash
npm run build
```

### Deploy to Vercel (Recommended)

#### Option A: Deploy via Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Deploy directly from your workspace:
   ```bash
   vercel
   ```

#### Option B: Deploy via GitHub & Vercel Dashboard
1. Push this repository to GitHub/GitLab/Bitbucket.
2. Log into [Vercel Dashboard](https://vercel.com).
3. Click **"Add New Project"** -> Select your repository.
4. Keep framework preset as **Next.js** and click **Deploy**.

---

## Recommendations / Items You May Provide

While the current site is fully functional with 100% of original photos, certificates, and details, you may consider providing the following for future enhancement:

1. **Higher-Resolution Photos:** High-resolution professional architectural photos of the exterior, lobby, and dining area if higher DPI images become available.
2. **Third-Party Booking Engine Link:** If Dewdrop Hotels adopts an online engine (e.g. Staah, AxisRooms, Booking.com Engine), the WhatsApp links in `content/content.json` can be updated to point to the engine URL.
3. **Custom Domain Setup:** Pointing your DNS A/CNAME records for `dewdrophotels.co.in` to Vercel (`76.76.21.21`).
