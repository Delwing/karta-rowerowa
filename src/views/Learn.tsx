import { useState } from 'react';
import { SIGNS, CATEGORIES, type Category, type Sign } from '../signs';
import { SignModal } from '../components/SignModal';

const CATEGORY_COLORS: Record<Category, string> = {
  ostrzegawcze: 'border-yellow-400 bg-yellow-400 text-slate-900',
  zakazu: 'border-red-500 bg-red-500 text-white',
  nakazu: 'border-blue-500 bg-blue-500 text-white',
  informacyjne: 'border-green-500 bg-green-500 text-white',
  kierunku: 'border-indigo-500 bg-indigo-500 text-white',
  uzupelniajace: 'border-orange-500 bg-orange-500 text-white',
  kolejowe: 'border-red-800 bg-red-800 text-white',
  poziome: 'border-slate-500 bg-slate-500 text-white',
  szlaki_rowerowe: 'border-purple-500 bg-purple-500 text-white',
  tabliczki: 'border-stone-500 bg-stone-500 text-white',
};

const CATEGORY_BORDER: Record<Category, string> = {
  ostrzegawcze: 'border-yellow-400',
  zakazu: 'border-red-500',
  nakazu: 'border-blue-500',
  informacyjne: 'border-green-500',
  kierunku: 'border-indigo-500',
  uzupelniajace: 'border-orange-500',
  kolejowe: 'border-red-800',
  poziome: 'border-slate-500',
  szlaki_rowerowe: 'border-purple-500',
  tabliczki: 'border-stone-500',
};

export function Learn() {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [selectedSign, setSelectedSign] = useState<Sign | null>(null);

  const filtered = filter === 'all' ? SIGNS : SIGNS.filter((s) => s.category === filter);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-5">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold border-2 transition-colors ${
            filter === 'all'
              ? 'bg-slate-900 text-white border-slate-900'
              : 'bg-white text-slate-700 border-gray-300 hover:border-gray-400'
          }`}
        >
          Wszystkie
        </button>
        {(Object.entries(CATEGORIES) as [Category, typeof CATEGORIES[Category]][]).map(
          ([key, cat]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border-2 transition-colors ${
                filter === key
                  ? CATEGORY_COLORS[key]
                  : `bg-white text-slate-700 ${CATEGORY_BORDER[key]} hover:opacity-80`
              }`}
            >
              {cat.name}
            </button>
          ),
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filtered.map((sign) => (
          <button
            key={sign.code}
            onClick={() => setSelectedSign(sign)}
            className="bg-white rounded-xl p-3 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <img
              src={sign.img}
              alt={sign.name}
              className="w-20 h-20 mx-auto mb-2 object-contain"
              loading="lazy"
            />
            <div className="text-xs font-bold text-gray-400">{sign.code}</div>
            <div className="text-xs font-semibold mt-0.5 leading-tight">{sign.name}</div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedSign && (
        <SignModal
          sign={selectedSign}
          onClose={() => setSelectedSign(null)}
          onPrev={
            filtered.indexOf(selectedSign) > 0
              ? () => setSelectedSign(filtered[filtered.indexOf(selectedSign) - 1])
              : null
          }
          onNext={
            filtered.indexOf(selectedSign) < filtered.length - 1
              ? () => setSelectedSign(filtered[filtered.indexOf(selectedSign) + 1])
              : null
          }
        />
      )}
    </>
  );
}
