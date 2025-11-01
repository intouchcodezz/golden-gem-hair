import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect, useRef } from 'react';

type ImageLightboxContextType = {
  open: (src: string, alt?: string) => void;
  close: () => void;
};

const ImageLightboxContext = createContext<ImageLightboxContextType | null>(null);

export const useImageLightbox = () => {
  const ctx = useContext(ImageLightboxContext);
  if (!ctx) throw new Error('useImageLightbox must be used within ImageLightboxProvider');
  return ctx;
};

export const ImageLightboxProvider = ({ children }: { children: ReactNode }) => {
  const [openSrc, setOpenSrc] = useState<string | null>(null);
  const [openAlt, setOpenAlt] = useState<string | undefined>(undefined);

  const open = useCallback((src: string, alt?: string) => {
    if (!src) return;
    setOpenSrc(src);
    setOpenAlt(alt);
  }, []);

  const close = useCallback(() => {
    setOpenSrc(null);
    setOpenAlt(undefined);
  }, []);

  // expose a global helper for quick integration (set once)
  useEffect(() => {
    (window as any).__openImageLightbox = open;
    return () => {
      try {
        delete (window as any).__openImageLightbox;
      } catch (e) {}
    };
  }, [open]);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // close on Escape and manage body scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    if (openSrc) {
      document.addEventListener('keydown', onKey);
      // lock body scroll
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', onKey);
        document.body.style.overflow = prev;
      };
    }
    return () => {};
  }, [openSrc, close]);

  return (
    <ImageLightboxContext.Provider value={{ open, close }}>
      {children}

      {/* Modal */}
      {openSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onMouseDown={(e) => {
            // close if user clicks on backdrop (not the content)
            if (e.target === e.currentTarget) close();
          }}
        >
          <div ref={containerRef} className="relative max-w-4xl w-full mx-auto flex items-center justify-center">
            <div className="bg-transparent p-2 rounded-md relative flex items-center justify-center">
              <div className="flex items-center justify-center">
                <img
                  src={openSrc}
                  alt={openAlt || 'Image'}
                  className="max-w-full max-h-[70vh] mx-auto rounded-md shadow-2xl object-contain block"
                />
              </div>

              {/* Close button positioned inset over the image, closer to content */}
              <button
                onClick={close}
                aria-label="Close image"
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 text-white bg-black/60 hover:bg-black/70 hover:ring-2 hover:ring-yellow-400 rounded-full p-3 md:p-4 z-30 shadow-lg"
                style={{ transform: 'translate(50%, -50%)' }}
              >
                <span className="text-lg md:text-xl">✕</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </ImageLightboxContext.Provider>
  );
};

export default ImageLightboxProvider;
