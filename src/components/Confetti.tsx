import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
}

const colors = [
  'hsl(45, 93%, 58%)',    // gold
  'hsl(45, 100%, 75%)',   // gold-light
  'hsl(40, 70%, 70%)',    // champagne
  'hsl(280, 60%, 65%)',   // accent purple
  'hsl(0, 0%, 100%)',     // white
  'hsl(350, 80%, 60%)',   // red
];

export function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 50; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      });
    }
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            left: `${piece.x}%`,
            backgroundColor: piece.color,
            animation: `confetti-fall ${piece.duration}s linear ${piece.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
