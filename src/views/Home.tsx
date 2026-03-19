interface HomeProps {
  onLearn: () => void;
  onRandom: () => void;
  onQuiz: () => void;
}

export function Home({ onLearn, onRandom, onQuiz }: HomeProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <button
        onClick={onLearn}
        className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer"
      >
        <div className="text-5xl mb-3">📖</div>
        <h2 className="text-lg font-bold mb-1">Nauka</h2>
        <p className="text-sm text-gray-500">
          Przeglądaj znaki drogowe i poznaj ich znaczenie
        </p>
      </button>
      <button
        onClick={onRandom}
        className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer"
      >
        <div className="text-5xl mb-3">🎲</div>
        <h2 className="text-lg font-bold mb-1">Losuj znak</h2>
        <p className="text-sm text-gray-500">
          Wylosuj losowy znak i sprawdź czy go znasz
        </p>
      </button>
      <button
        onClick={onQuiz}
        className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer"
      >
        <div className="text-5xl mb-3">✏️</div>
        <h2 className="text-lg font-bold mb-1">Quiz</h2>
        <p className="text-sm text-gray-500">
          Sprawdź swoją wiedzę o znakach drogowych
        </p>
      </button>
    </div>
  );
}
