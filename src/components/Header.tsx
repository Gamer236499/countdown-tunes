import { Sparkles } from 'lucide-react';

export function Header() {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  return (
    <header className="relative z-10 text-center py-12 px-4">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Sparkles className="w-8 h-8 text-primary animate-float" />
        <h1 className="font-display text-5xl md:text-7xl font-bold text-gradient-gold">
          {nextYear}
        </h1>
        <Sparkles className="w-8 h-8 text-primary animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <p className="text-xl md:text-2xl text-foreground/80 font-body font-light">
        New Year Countdown
      </p>
      <p className="text-sm text-muted-foreground mt-2">
        Watch as countries around the world celebrate the New Year
      </p>
    </header>
  );
}
