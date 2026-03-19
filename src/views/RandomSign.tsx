import { useState, useCallback } from 'react';
import { SIGNS } from '../signs';

function getRandomSign() {
  return SIGNS[Math.floor(Math.random() * SIGNS.length)];
}

export function RandomSign() {
  const [sign, setSign] = useState(() => getRandomSign());
  const [revealed, setRevealed] = useState(false);
  const [animateReveal, setAnimateReveal] = useState(false);

  const next = useCallback(() => {
    setSign(getRandomSign());
    setRevealed(false);
    setAnimateReveal(false);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm text-center shadow-sm">
        <div className="h-40 mb-4 flex items-center justify-center">
          <img
            src={sign.img}
            alt="Znak drogowy"
            className="max-w-40 max-h-40 object-contain"
          />
        </div>
        <div className="text-xs font-bold text-gray-400 mb-1">{sign.code}</div>

        <div className="relative mb-5">
          <h3 className={`text-lg font-bold mb-2 h-12 flex items-center justify-center ${animateReveal ? 'transition-all duration-300' : ''} ${revealed ? '' : 'blur-md select-none'}`}>
            {sign.name}
          </h3>
          <p className={`text-sm text-gray-500 leading-relaxed h-[4.5rem] overflow-y-auto ${animateReveal ? 'transition-all duration-300' : ''} ${revealed ? '' : 'blur-md select-none'}`}>
            {sign.description}
          </p>
          {!revealed && (
            <button
              onClick={() => { setRevealed(true); setAnimateReveal(true); }}
              className="absolute inset-0 flex items-center justify-center bg-white/40 rounded-lg cursor-pointer"
            >
              <span className="px-5 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium shadow-md hover:bg-slate-800 transition-colors">
                Pokaż odpowiedź
              </span>
            </button>
          )}
        </div>

        <button
          onClick={next}
          className="px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          Losuj kolejny
        </button>
      </div>
    </div>
  );
}
