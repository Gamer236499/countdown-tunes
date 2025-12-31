import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

// Fun upbeat New Year celebration music
const MUSIC_URL = 'https://www.bensound.com/bensound-music/bensound-funkyelement.mp3';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element on mount
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = volume / 100;
    audio.preload = 'auto';
    
    audio.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
    });
    
    audio.addEventListener('error', (e) => {
      console.error('Audio load error:', e);
    });
    
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Playback error:', error);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-gradient-card backdrop-blur-xl border border-border/50 rounded-full px-6 py-3 shadow-xl">
        <div className="flex items-center gap-2 text-primary">
          <Music className="w-4 h-4 animate-pulse" />
          <span className="text-sm font-medium hidden sm:inline">
            {isLoaded ? 'Party Music' : 'Loading...'}
          </span>
        </div>
        
        <div className="h-6 w-px bg-border" />
        
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlay}
          disabled={!isLoaded}
          className="h-10 w-10 rounded-full bg-primary/20 hover:bg-primary/30 text-primary disabled:opacity-50"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
          className="h-8 w-8 rounded-full hover:bg-secondary text-foreground"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
        
        <div className="w-20 hidden sm:block">
          <Slider
            value={[volume]}
            onValueChange={(value) => setVolume(value[0])}
            max={100}
            step={1}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
