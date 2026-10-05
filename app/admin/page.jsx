'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Upload, Save, RefreshCw, CheckCircle2, AlertCircle, Image as ImageIcon, 
  Bed, Award, MapPin, Info, Lock, Eye, Trash2, Plus 
} from 'lucide-react';

export default function AdminPage() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingSlot, setUploadingSlot] = useState(null);
  const [activeTab, setActiveTab] = useState('hero');
  const [notification, setNotification] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  const DEFAULT_PIN = '1234';

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/content');
      const data = await res.json();
      setContent(data);
    } catch (err) {
      showNotification('Failed to load content', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pinInput === DEFAULT_PIN || pinInput === 'admin') {
      setAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const showNotification = (msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      const data = await res.json();
      if (data.success) {
        showNotification('All image changes saved successfully! Site updated live.');
      } else {
        showNotification('Failed to save changes.', 'error');
      }
    } catch (err) {
      showNotification('Error saving content.', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Upload file helper
  const handleFileUpload = async (e, callback) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingSlot(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.url) {
        callback(data.url);
        showNotification('Image uploaded successfully!');
      } else {
        showNotification(data.error || 'Upload failed', 'error');
      }
    } catch (err) {
      showNotification('Error uploading file', 'error');
    } finally {
      setUploadingSlot(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="flex items-center gap-3 text-drop font-semibold">
          <RefreshCw className="w-6 h-6 animate-spin text-drop" />
          <span>Loading Admin Panel...</span>
        </div>
      </div>
    );
  }

  // Passcode Lock Screen
  if (!authenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-sand-dark shadow-soft-lg max-w-md w-full text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-drop-light text-drop border border-drop-border flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8" />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold text-ink">
              Dewdrop Hotel Admin Panel
            </h1>
            <p className="text-xs text-ink-muted mt-1">
              Enter your passcode to manage website images & content.
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Enter PIN (Default: 1234)"
                className="w-full px-4 py-3 rounded-xl border border-sand-dark text-center font-bold text-lg tracking-widest outline-none focus:border-drop focus:ring-1 focus:ring-drop"
                autoFocus
              />
              {pinError && (
                <p className="text-xs text-dew font-semibold mt-2">
                  Incorrect PIN! Try default PIN: 1234
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-drop hover:bg-drop-hover text-white font-semibold text-sm shadow-soft transition-colors"
            >
              Access Admin Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Notification Banner */}
      {notification && (
        <div
          className={`fixed top-24 right-4 sm:right-8 z-50 p-4 rounded-2xl shadow-soft-lg border text-sm font-semibold flex items-center gap-3 animate-in slide-in-from-top-4 ${
            notification.type === 'error'
              ? 'bg-dew-light text-dew border-dew-border'
              : 'bg-emerald-50 text-emerald-800 border-emerald-200'
          }`}
        >
          {notification.type === 'error' ? (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600" />
          )}
          <span>{notification.msg}</span>
        </div>
      )}

      {/* Admin Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-sand-dark shadow-soft">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-drop bg-drop-light px-3 py-1 rounded-full border border-drop-border">
              Admin Portal
            </span>
            <span className="text-xs text-ink/50">Dewdrop Shankh Amritsar</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-2">
            Website Image & Content Manager
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchContent}
            className="p-3 rounded-xl bg-sand hover:bg-sand-dark text-ink font-semibold text-xs border border-sand-dark transition-colors flex items-center gap-2"
            title="Reload content"
          >
            <RefreshCw className="w-4 h-4 text-drop" />
            <span className="hidden sm:inline">Reset</span>
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-drop hover:bg-drop-hover text-white font-semibold text-xs sm:text-sm shadow-soft flex items-center gap-2 transition-all"
          >
            {saving ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            <span>{saving ? 'Saving...' : 'Save All Changes'}</span>
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-sand-dark overflow-x-auto no-scrollbar pb-2">
        <button
          onClick={() => setActiveTab('hero')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'hero'
              ? 'bg-drop text-white shadow-sm'
              : 'bg-white border border-sand-dark text-ink/70 hover:bg-sand'
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          <span>Hero & About Banners</span>
        </button>

        <button
          onClick={() => setActiveTab('rooms')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'rooms'
              ? 'bg-drop text-white shadow-sm'
              : 'bg-white border border-sand-dark text-ink/70 hover:bg-sand'
          }`}
        >
          <Bed className="w-4 h-4" />
          <span>Room Category Photos</span>
        </button>

        <button
          onClick={() => setActiveTab('certificates')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'certificates'
              ? 'bg-drop text-white shadow-sm'
              : 'bg-white border border-sand-dark text-ink/70 hover:bg-sand'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Certificates & Badges</span>
        </button>

        <button
          onClick={() => setActiveTab('attractions')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'attractions'
              ? 'bg-drop text-white shadow-sm'
              : 'bg-white border border-sand-dark text-ink/70 hover:bg-sand'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>Nearby Places</span>
        </button>

        <button
          onClick={() => setActiveTab('info')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'info'
              ? 'bg-drop text-white shadow-sm'
              : 'bg-white border border-sand-dark text-ink/70 hover:bg-sand'
          }`}
        >
          <Info className="w-4 h-4" />
          <span>Hotel Phone & Details</span>
        </button>
      </div>

      {/* TAB 1: HERO & ABOUT BANNERS */}
      {activeTab === 'hero' && content && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hero Image Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-dark shadow-soft space-y-4">
            <h3 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-drop" />
              <span>Main Hero Section Image</span>
            </h3>
            <p className="text-xs text-ink-muted">
              Displayed as full-screen background banner on the homepage.
            </p>

            {/* Preview */}
            <div className="relative h-56 w-full rounded-2xl overflow-hidden bg-sand border border-sand-dark">
              <Image
                src={content.hero.heroImage}
                alt="Hero Banner"
                fill
                className="object-cover"
              />
            </div>

            {/* Inputs */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-semibold text-ink/70">
                Image Path / URL:
              </label>
              <input
                type="text"
                value={content.hero.heroImage}
                onChange={(e) =>
                  setContent({
                    ...content,
                    hero: { ...content.hero, heroImage: e.target.value },
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-sand-dark text-xs text-ink outline-none focus:border-drop"
              />

              <div className="flex items-center gap-3 pt-2">
                <label className="flex-1 py-2.5 px-4 rounded-xl bg-sand hover:bg-sand-dark text-ink text-xs font-semibold border border-sand-dark text-center cursor-pointer flex items-center justify-center gap-2 transition-colors">
                  <Upload className="w-4 h-4 text-drop" />
                  <span>Upload New Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      handleFileUpload(e, (url) =>
                        setContent({
                          ...content,
                          hero: { ...content.hero, heroImage: url },
                        })
                      )
                    }
                  />
                </label>
              </div>
            </div>
          </div>

          {/* About Image Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-dark shadow-soft space-y-4">
            <h3 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-drop" />
              <span>About Section Hotel Image</span>
            </h3>
            <p className="text-xs text-ink-muted">
              Displayed on the Homepage & About page (Hotel lobby / reception photo).
            </p>

            {/* Preview */}
            <div className="relative h-56 w-full rounded-2xl overflow-hidden bg-sand border border-sand-dark">
              <Image
                src={content.about.image}
                alt="About Hotel Image"
                fill
                className="object-cover"
              />
            </div>

            {/* Inputs */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-semibold text-ink/70">
                Image Path / URL:
              </label>
              <input
                type="text"
                value={content.about.image}
                onChange={(e) =>
                  setContent({
                    ...content,
                    about: { ...content.about, image: e.target.value },
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-sand-dark text-xs text-ink outline-none focus:border-drop"
              />

              <div className="flex items-center gap-3 pt-2">
                <label className="flex-1 py-2.5 px-4 rounded-xl bg-sand hover:bg-sand-dark text-ink text-xs font-semibold border border-sand-dark text-center cursor-pointer flex items-center justify-center gap-2 transition-colors">
                  <Upload className="w-4 h-4 text-drop" />
                  <span>Upload New Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      handleFileUpload(e, (url) =>
                        setContent({
                          ...content,
                          about: { ...content.about, image: url },
                        })
                      )
                    }
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ROOM CATEGORY PHOTOS */}
      {activeTab === 'rooms' && content && (
        <div className="space-y-8">
          {content.rooms.map((room, roomIdx) => (
            <div
              key={room.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-dark shadow-soft space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sand-dark pb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-ink">
                    {room.title}
                  </h3>
                  <p className="text-xs text-drop font-medium">{room.tagline}</p>
                </div>
                <span className="text-xs font-semibold text-dew bg-dew-light px-3 py-1 rounded-full border border-dew-border self-start sm:self-auto">
                  {room.occupancy}
                </span>
              </div>

              {/* Room Image Carousel Slots */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/60">
                  Room Photos ({room.images.length} Image Slots):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {room.images.map((imgUrl, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="bg-sand/50 p-3 rounded-2xl border border-sand-dark space-y-3 flex flex-col justify-between"
                    >
                      <div className="relative h-40 w-full rounded-xl overflow-hidden bg-sand border border-sand-dark">
                        <Image
                          src={imgUrl}
                          alt={`${room.title} ${imgIdx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="space-y-2">
                        <input
                          type="text"
                          value={imgUrl}
                          onChange={(e) => {
                            const newImages = [...room.images];
                            newImages[imgIdx] = e.target.value;
                            const newRooms = [...content.rooms];
                            newRooms[roomIdx].images = newImages;
                            setContent({ ...content, rooms: newRooms });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-sand-dark text-[11px] text-ink outline-none focus:border-drop"
                        />

                        <div className="flex items-center justify-between gap-2">
                          <label className="flex-1 py-1.5 px-2 rounded-lg bg-white hover:bg-sand text-ink text-[11px] font-semibold border border-sand-dark text-center cursor-pointer flex items-center justify-center gap-1">
                            <Upload className="w-3 h-3 text-drop" />
                            <span>Replace</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) =>
                                handleFileUpload(e, (url) => {
                                  const newImages = [...room.images];
                                  newImages[imgIdx] = url;
                                  const newRooms = [...content.rooms];
                                  newRooms[roomIdx].images = newImages;
                                  setContent({ ...content, rooms: newRooms });
                                })
                              }
                            />
                          </label>

                          <button
                            onClick={() => {
                              const newImages = room.images.filter((_, idx) => idx !== imgIdx);
                              const newRooms = [...content.rooms];
                              newRooms[roomIdx].images = newImages;
                              setContent({ ...content, rooms: newRooms });
                            }}
                            className="p-1.5 rounded-lg bg-dew-light text-dew hover:bg-dew-light/80 border border-dew-border"
                            title="Remove image slot"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Add Slot Button */}
                  <label className="h-full min-h-[220px] rounded-2xl border-2 border-dashed border-sand-dark hover:border-drop flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-colors group">
                    <Plus className="w-8 h-8 text-drop group-hover:scale-110 transition-transform mb-2" />
                    <span className="text-xs font-semibold text-ink">Add Photo to {room.title}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleFileUpload(e, (url) => {
                          const newImages = [...room.images, url];
                          const newRooms = [...content.rooms];
                          newRooms[roomIdx].images = newImages;
                          setContent({ ...content, rooms: newRooms });
                        })
                      }
                    />
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: CERTIFICATES & BADGES */}
      {activeTab === 'certificates' && content && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.certificates.map((cert, certIdx) => (
            <div
              key={cert.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-dark shadow-soft space-y-4"
            >
              <div className="border-b border-sand-dark pb-3">
                <h3 className="font-serif text-lg font-bold text-ink">
                  {cert.title}
                </h3>
                <p className="text-xs text-drop font-semibold">{cert.authority}</p>
              </div>

              {/* Preview */}
              <div className="relative h-52 w-full rounded-2xl overflow-hidden bg-sand border border-sand-dark p-2">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Inputs */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-semibold text-ink/70">
                  Certificate Image Path:
                </label>
                <input
                  type="text"
                  value={cert.image}
                  onChange={(e) => {
                    const newCerts = [...content.certificates];
                    newCerts[certIdx].image = e.target.value;
                    newCerts[certIdx].fullImage = e.target.value;
                    setContent({ ...content, certificates: newCerts });
                  }}
                  className="w-full px-4 py-2 rounded-xl border border-sand-dark text-xs text-ink outline-none focus:border-drop"
                />

                <div className="flex items-center gap-3 pt-2">
                  <label className="flex-1 py-2.5 px-4 rounded-xl bg-sand hover:bg-sand-dark text-ink text-xs font-semibold border border-sand-dark text-center cursor-pointer flex items-center justify-center gap-2 transition-colors">
                    <Upload className="w-4 h-4 text-drop" />
                    <span>Upload New Certificate Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleFileUpload(e, (url) => {
                          const newCerts = [...content.certificates];
                          newCerts[certIdx].image = url;
                          newCerts[certIdx].fullImage = url;
                          setContent({ ...content, certificates: newCerts });
                        })
                      }
                    />
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: NEARBY ATTRACTIONS */}
      {activeTab === 'attractions' && content && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.nearbyAttractions.map((place, placeIdx) => (
            <div
              key={placeIdx}
              className="bg-white p-6 rounded-3xl border border-sand-dark shadow-soft space-y-4 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-lg font-bold text-ink mb-1">
                  {place.name}
                </h3>
                <p className="text-xs text-drop font-semibold mb-3">
                  {place.distance} • {place.time}
                </p>

                {/* Preview */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-sand border border-sand-dark mb-3">
                  <Image
                    src={place.image || '/images/imgi_36_place01.jpg'}
                    alt={place.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Inputs */}
              <div className="space-y-3">
                <input
                  type="text"
                  value={place.image || ''}
                  onChange={(e) => {
                    const newPlaces = [...content.nearbyAttractions];
                    newPlaces[placeIdx].image = e.target.value;
                    setContent({ ...content, nearbyAttractions: newPlaces });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg border border-sand-dark text-[11px] text-ink outline-none focus:border-drop"
                />

                <label className="w-full py-2 px-3 rounded-xl bg-sand hover:bg-sand-dark text-ink text-xs font-semibold border border-sand-dark text-center cursor-pointer flex items-center justify-center gap-1.5 transition-colors">
                  <Upload className="w-3.5 h-3.5 text-drop" />
                  <span>Change Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      handleFileUpload(e, (url) => {
                        const newPlaces = [...content.nearbyAttractions];
                        newPlaces[placeIdx].image = url;
                        setContent({ ...content, nearbyAttractions: newPlaces });
                      })
                    }
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 5: HOTEL CONTACT DETAILS */}
      {activeTab === 'info' && content && (
        <div className="bg-white p-8 rounded-3xl border border-sand-dark shadow-soft space-y-6 max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-ink border-b border-sand-dark pb-3">
            Update Hotel Contact Info
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-ink/70 mb-1">
                Primary Phone Helpline:
              </label>
              <input
                type="text"
                value={content.hotelInfo.phonePrimary}
                onChange={(e) =>
                  setContent({
                    ...content,
                    hotelInfo: { ...content.hotelInfo, phonePrimary: e.target.value },
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-sand-dark text-sm text-ink outline-none focus:border-drop"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink/70 mb-1">
                Secondary Phone Helpline:
              </label>
              <input
                type="text"
                value={content.hotelInfo.phoneSecondary}
                onChange={(e) =>
                  setContent({
                    ...content,
                    hotelInfo: { ...content.hotelInfo, phoneSecondary: e.target.value },
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-sand-dark text-sm text-ink outline-none focus:border-drop"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-ink/70 mb-1">
                WhatsApp Number (No spaces/plus):
              </label>
              <input
                type="text"
                value={content.hotelInfo.whatsapp}
                onChange={(e) =>
                  setContent({
                    ...content,
                    hotelInfo: { ...content.hotelInfo, whatsapp: e.target.value },
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-sand-dark text-sm text-ink outline-none focus:border-drop"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink/70 mb-1">
                General Manager Email:
              </label>
              <input
                type="email"
                value={content.hotelInfo.email}
                onChange={(e) =>
                  setContent({
                    ...content,
                    hotelInfo: { ...content.hotelInfo, email: e.target.value },
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-sand-dark text-sm text-ink outline-none focus:border-drop"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink/70 mb-1">
              Physical Hotel Address:
            </label>
            <input
              type="text"
              value={content.hotelInfo.address}
              onChange={(e) =>
                setContent({
                  ...content,
                  hotelInfo: { ...content.hotelInfo, address: e.target.value },
                })
              }
              className="w-full px-4 py-2.5 rounded-xl border border-sand-dark text-sm text-ink outline-none focus:border-drop"
            />
          </div>

          <div className="pt-4 border-t border-sand-dark">
            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full py-3.5 rounded-xl bg-drop hover:bg-drop-hover text-white font-semibold text-sm shadow-soft flex items-center justify-center gap-2 transition-all"
            >
              {saving ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              <span>{saving ? 'Saving...' : 'Save All Hotel Contact Info'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
