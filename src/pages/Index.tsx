import { useState } from 'react';
import { sortedCountries } from '@/data/countries';
import { CountryCard } from '@/components/CountryCard';
import { MusicPlayer } from '@/components/MusicPlayer';
import { Confetti } from '@/components/Confetti';
import { StarryBackground } from '@/components/StarryBackground';
import { Header } from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = sortedCountries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-night relative overflow-x-hidden">
      <StarryBackground />
      <Confetti />
      
      <div className="relative z-10 container mx-auto px-4 pb-32">
        <Header />
        
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 bg-secondary/50 border-border/50 focus:border-primary/50 rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCountries.map((country) => (
            <CountryCard key={country.timezone} country={country} />
          ))}
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No countries found matching "{searchQuery}"</p>
          </div>
        )}
      </div>

      <MusicPlayer />
    </div>
  );
};

export default Index;
