import { useEffect, useRef, useCallback } from 'react';
import type { Sign } from '../signs';

interface SignModalProps {
  sign: Sign;
  onClose: () => void;
  onPrev: (() => void) | null;
  onNext: (() => void) | null;
}

export function SignModal({ sign, onClose, onPrev, onNext }: SignModalProps) {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handlePrev = useCallback(() => { onPrev?.(); }, [onPrev]);
  const handleNext = useCallback(() => { onNext?.(); }, [onNext]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose, handlePrev, handleNext]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;

    // Only trigger if horizontal swipe is dominant and long enough
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx > 0) handlePrev();
      else handleNext();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Prev button */}
      {onPrev && (
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-slate-700 flex items-center justify-center shadow-lg hover:bg-white transition-colors text-xl font-bold z-10"
          aria-label="Poprzedni znak"
        >
          ‹
        </button>
      )}

      {/* Next button */}
      {onNext && (
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-slate-700 flex items-center justify-center shadow-lg hover:bg-white transition-colors text-xl font-bold z-10"
          aria-label="Następny znak"
        >
          ›
        </button>
      )}

      <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center">
        <div className="h-36 mb-4 flex items-center justify-center">
          <img
            src={sign.img}
            alt={sign.name}
            className="max-w-36 max-h-36 object-contain"
          />
        </div>
        <div className="text-xs font-bold text-gray-400 mb-1">{sign.code}</div>
        <h3 className="text-lg font-bold mb-2 h-12 flex items-center justify-center">{sign.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-5 h-[4.5rem] overflow-y-auto">{sign.description}</p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          Zamknij
        </button>
      </div>
    </div>
  );
}