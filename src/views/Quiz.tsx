import { useState, useMemo, useCallback } from 'react';
import { SIGNS, type Category, type Sign } from '../signs';

interface QuizProps {
  categories: Category[];
  onFinish: (score: number, total: number) => void;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateOptions(correct: Sign): Sign[] {
  // Pick wrong answers from the same category first
  const sameCategory = SIGNS.filter(
    (s) => s.category === correct.category && s.code !== correct.code,
  );
  const otherSigns = SIGNS.filter(
    (s) => s.category !== correct.category && s.code !== correct.code,
  );

  const shuffledSame = shuffle(sameCategory);
  const shuffledOther = shuffle(otherSigns);

  // Use same-category signs first, fill with others if needed
  const wrong = [...shuffledSame, ...shuffledOther].slice(0, 3);

  return shuffle([correct, ...wrong]);
}

export function Quiz({ categories, onFinish }: QuizProps) {
  const questions = useMemo(() => {
    const pool = SIGNS.filter((s) => categories.includes(s.category));
    return shuffle(pool).slice(0, 10);
  }, [categories]);

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const current = questions[index];
  const options = useMemo(() => generateOptions(current), [current]);
  const isCorrect = selected === current.code;
  const answered = selected !== null;

  const handleSelect = useCallback(
    (sign: Sign) => {
      if (answered) return;
      setSelected(sign.code);
      if (sign.code === current.code) setScore((s) => s + 1);
    },
    [answered, current],
  );

  const handleNext = () => {
    if (index >= questions.length - 1) {
      onFinish(score, questions.length);
      return;
    }
    setSelected(null);
    setIndex((i) => i + 1);
  };

  const progress = ((index) / questions.length) * 100;

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
          {index + 1} / {questions.length}
        </span>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
        <img
          src={current.img}
          alt="Znak drogowy"
          className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 object-contain"
        />
        <div className="text-xs text-gray-300 font-bold mb-2">{current.code}</div>
        <h3 className="text-base font-bold mb-5">Jaki to znak?</h3>

        {/* Options */}
        <div className="flex flex-col gap-2">
          {options.map((opt) => {
            let cls =
              'p-3 rounded-xl border-2 text-left text-sm transition-all ';
            if (!answered) {
              cls += 'border-gray-200 hover:border-blue-500 hover:bg-blue-50 cursor-pointer';
            } else if (opt.code === current.code) {
              cls += 'border-green-500 bg-green-50 font-semibold';
            } else if (opt.code === selected) {
              cls += 'border-red-500 bg-red-50';
            } else {
              cls += 'border-gray-200 opacity-50';
            }

            return (
              <button
                key={opt.code}
                onClick={() => handleSelect(opt)}
                disabled={answered}
                className={cls}
              >
                {opt.name}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {answered && (
          <div
            className={`mt-4 p-3 rounded-lg text-sm font-semibold ${
              isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {isCorrect ? 'Dobrze!' : `Źle! Poprawna odpowiedź: ${current.name}`}
          </div>
        )}

        {/* Next */}
        {answered && (
          <button
            onClick={handleNext}
            className="mt-5 px-6 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            {index >= questions.length - 1 ? 'Zobacz wynik' : 'Następne pytanie'}
          </button>
        )}
      </div>
    </div>
  );
}
