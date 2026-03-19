import { useState } from 'react';
import { Home } from './views/Home';
import { Learn } from './views/Learn';
import { QuizSetup } from './views/QuizSetup';
import { Quiz } from './views/Quiz';
import { Results } from './views/Results';
import { RandomSign } from './views/RandomSign';
import type { Category } from './signs';

type View = 'home' | 'learn' | 'random' | 'quiz-setup' | 'quiz' | 'results';

const NAV_ITEMS: { view: View; label: string }[] = [
  { view: 'home', label: 'Start' },
  { view: 'learn', label: 'Nauka' },
  { view: 'random', label: 'Losuj znak' },
  { view: 'quiz-setup', label: 'Quiz' },
];

export function App() {
  const [view, setView] = useState<View>('home');
  const [quizCategories, setQuizCategories] = useState<Category[]>([]);
  const [quizScore, setQuizScore] = useState(0);
  const [quizTotal, setQuizTotal] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
        <div className="max-w-3xl mx-auto px-4 py-3 text-center">
          <h1 className="text-xl font-bold tracking-tight">Karta Rowerowa</h1>
          <p className="text-xs text-slate-400 mt-0.5">Nauka znaków drogowych</p>
          <nav className="flex justify-center gap-2 mt-3">
            {NAV_ITEMS.map(({ view: v, label }) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  (view === v || (v === 'quiz-setup' && (view === 'quiz' || view === 'results')))
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        {view === 'home' && (
          <Home onLearn={() => setView('learn')} onRandom={() => setView('random')} onQuiz={() => setView('quiz-setup')} />
        )}
        {view === 'learn' && <Learn />}
        {view === 'random' && <RandomSign />}
        {view === 'quiz-setup' && (
          <QuizSetup
            selected={quizCategories}
            onChangeSelected={setQuizCategories}
            onStart={() => setView('quiz')}
          />
        )}
        {view === 'quiz' && (
          <Quiz
            categories={quizCategories}
            onFinish={(score, total) => {
              setQuizScore(score);
              setQuizTotal(total);
              setView('results');
            }}
          />
        )}
        {view === 'results' && (
          <Results
            score={quizScore}
            total={quizTotal}
            onRetry={() => setView('quiz')}
            onHome={() => setView('home')}
          />
        )}

      </main>
    </div>
  );
}
