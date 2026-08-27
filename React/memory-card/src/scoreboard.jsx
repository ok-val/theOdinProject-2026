import { useState } from 'react';

export default function Score({ score }) {
  const [highScore, setHighScore] = useState(score);

  if (score > highScore) {
    setHighScore(score);
  }

  return (
    <section>
      <p>Score: {score}</p>
      <p>High score: {highScore}</p>
    </section>
  );
}
