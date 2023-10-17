import React, { useState, useEffect } from 'react';
import './ClickerGame.css'

function ClickerGame() {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [highScores, setHighScores] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  const handleIncrementScore = () => {
    if (!gameStarted) {
      // Démarrez le jeu lorsque l'utilisateur appuie sur "Clique!"
      setGameStarted(true);
      setScore(0);
      setTimer(10);
      setGameOver(false);
      setPlayerName('');
    } else if (!gameOver) {
      setScore(score + 1);
    }
  };

  useEffect(() => {
    if (timer > 0 && !gameOver) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0) {
      setGameOver(true);
    }
  }, [timer, gameOver]);

  const handleRestart = () => {
    setScore(0);
    setTimer(10);
    setGameOver(false);
    setPlayerName('');
    setGameStarted(false); // Réinitialisez l'état du jeu lorsque vous redémarrez
  };

  const handleSaveScore = () => {
    if (playerName && score > 0) {
      const newHighScore = { name: playerName, score };
      setHighScores([...highScores, newHighScore]);
    }
  };

  return (
    <div className="clicker-game">
      <h2>Clicker Game</h2>
      <p>Score: {score}</p>
      <p>Temps restant: {timer} secondes</p>
      {!gameOver ? (
        <button onClick={handleIncrementScore}>Clique !</button>
      ) : (
        <div>
          <p>Bien joué!</p>
          <input
            type="text"
            placeholder="Entrez votre nom"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button onClick={handleSaveScore}>Sauvegarder</button>
          <button onClick={handleRestart}>Recommencer</button>
        </div>
      )}
      <h3>Meilleur score:</h3>
      <ul>
        {highScores.map((hs, index) => (
          <li key={index}>
            {hs.name}: {hs.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClickerGame;
