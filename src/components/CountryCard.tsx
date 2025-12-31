import { useCountdown } from '@/hooks/useCountdown';
import { Country } from '@/data/countries';
import { Sparkles } from 'lucide-react';

interface CountryCardProps {
  country: Country;
}

export function CountryCard({ country }: CountryCardProps) {
  const timeLeft = useCountdown(country.offset);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (timeLeft.isCelebrating) {
    return (
      <div className="relative overflow-hidden rounded-xl bg-gradient-card border border-primary/30 p-4 glow-gold animate-pulse-glow">
        <div className="absolute inset-0 animate-shimmer" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{country.flag}</span>
            <div>
              <h3 className="font-display text-lg font-semibold text-primary">{country.name}</h3>
              <p className="text-xs text-muted-foreground">UTC{country.offset >= 0 ? '+' : ''}{country.offset}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-primary">
            <Sparkles className="w-5 h-5 animate-float" />
            <span className="font-display text-xl font-bold">Happy New Year!</span>
            <Sparkles className="w-5 h-5 animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-card border border-border/50 p-4 hover:border-primary/30 transition-all duration-300 hover:glow-gold group">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl group-hover:scale-110 transition-transform">{country.flag}</span>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{country.name}</h3>
          <p className="text-xs text-muted-foreground">UTC{country.offset >= 0 ? '+' : ''}{country.offset}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-secondary/50 rounded-lg p-2">
          <div className="font-body text-2xl font-bold text-foreground">{formatNumber(timeLeft.days)}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Days</div>
        </div>
        <div className="bg-secondary/50 rounded-lg p-2">
          <div className="font-body text-2xl font-bold text-foreground">{formatNumber(timeLeft.hours)}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Hrs</div>
        </div>
        <div className="bg-secondary/50 rounded-lg p-2">
          <div className="font-body text-2xl font-bold text-foreground">{formatNumber(timeLeft.minutes)}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Min</div>
        </div>
        <div className="bg-secondary/50 rounded-lg p-2">
          <div className="font-body text-2xl font-bold text-primary">{formatNumber(timeLeft.seconds)}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Sec</div>
        </div>
      </div>
    </div>
  );
}
