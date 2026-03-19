import { SIGNS, CATEGORIES, type Category } from '../signs';

interface QuizSetupProps {
  selected: Category[];
  onChangeSelected: (cats: Category[]) => void;
  onStart: () => void;
}

const DOT_COLORS: Record<Category, string> = {
  ostrzegawcze: 'bg-yellow-400',
  zakazu: 'bg-red-500',
  nakazu: 'bg-blue-500',
  informacyjne: 'bg-green-500',
  kierunku: 'bg-indigo-500',
  uzupelniajace: 'bg-orange-500',
  kolejowe: 'bg-red-800',
  poziome: 'bg-slate-500',
  szlaki_rowerowe: 'bg-purple-500',
  tabliczki: 'bg-stone-500',
};

export function QuizSetup({ selected, onChangeSelected, onStart }: QuizSetupProps) {
  const toggle = (cat: Category) => {
    onChangeSelected(
      selected.includes(cat) ? selected.filter((c) => c !== cat) : [...selected, cat],
    );
  };

  const totalSigns = SIGNS.filter((s) => selected.includes(s.category)).length;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-bold mb-1">Ustawienia quizu</h2>
      <p className="text-sm text-gray-500 mb-5">
        Wybierz kategorie znaków, z których chcesz być pytany:
      </p>

      <div className="flex flex-col gap-3 mb-5">
        {(Object.entries(CATEGORIES) as [Category, typeof CATEGORIES[Category]][]).map(
          ([key, cat]) => {
            const count = SIGNS.filter((s) => s.category === key).length;
            const isSelected = selected.includes(key);

            return (
              <label
                key={key}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggle(key)}
                  className="w-5 h-5 accent-blue-600 shrink-0"
                />
                <div className={`w-3 h-3 rounded-full shrink-0 ${DOT_COLORS[key]}`} />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm">{cat.name}</div>
                  <div className="text-xs text-gray-400">{cat.description}</div>
                </div>
                <div className="text-xs text-gray-400 font-semibold shrink-0">
                  {count} znaków
                </div>
              </label>
            );
          },
        )}
      </div>

      <button
        onClick={onStart}
        disabled={selected.length === 0}
        className="w-full py-3 rounded-xl text-white font-semibold transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700"
      >
        {selected.length === 0
          ? 'Wybierz kategorie'
          : `Rozpocznij quiz (${Math.min(totalSigns, 10)} pytań)`}
      </button>
    </div>
  );
}
