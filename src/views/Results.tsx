interface ResultsProps {
  score: number;
  total: number;
  onRetry: () => void;
  onHome: () => void;
}

export function Results({ score, total, onRetry, onHome }: ResultsProps) {
  const pct = Math.round((score / total) * 100);
  const colorClass = pct >= 80 ? 'text-green-500' : pct >= 50 ? 'text-yellow-500' : 'text-red-500';
  const label =
    pct >= 80
      ? 'Świetny wynik!'
      : pct >= 50
        ? 'Niezły wynik, ale poćwicz jeszcze!'
        : 'Musisz się jeszcze pouczyć!';

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
      <h2 className="text-lg font-bold mb-2">Wynik quizu</h2>
      <div className={`text-5xl font-extrabold my-4 ${colorClass}`}>
        {score} / {total}
      </div>
      <p className="text-gray-500 mb-8">{label}</p>
      <div className="flex justify-center gap-3 flex-wrap">
        <button
          onClick={onRetry}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
        >
          Spróbuj ponownie
        </button>
        <button
          onClick={onHome}
          className="px-6 py-2.5 bg-gray-200 text-slate-900 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
        >
          Powrót do menu
        </button>
      </div>
    </div>
  );
}
