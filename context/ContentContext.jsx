'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import initialContent from '@/content/content.json';

const ContentContext = createContext({
  content: initialContent,
  refreshContent: () => {},
});

export function ContentProvider({ children }) {
  const [content, setContent] = useState(initialContent);

  const refreshContent = async () => {
    try {
      const res = await fetch('/api/content?t=' + Date.now());
      if (res.ok) {
        const data = await res.json();
        if (data && data.hotelInfo) {
          setContent(data);
        }
      }
    } catch (e) {
      console.error('Failed to fetch fresh content', e);
    }
  };

  useEffect(() => {
    refreshContent();
  }, []);

  return (
    <ContentContext.Provider value={{ content, refreshContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}
