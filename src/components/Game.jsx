import { useState } from 'react';
import Board from './Board';
import calculateWinner from './calculateWinner';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
        description = 'Go to move #' + move;
        } else {
        description = 'Go to game start';
        }
        return (
        <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
        );
    });

    const winner = calculateWinner(currentSquares);
    let status;
    if (winner) {
    status = 'Winner: ' + winner;
    } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    
    function resetGame() {
        setHistory([Array(9).fill(null)]);  // Reset history
        setCurrentMove(0);  // Reset the current move to the start
    }

    return (
        <div className="game">
        <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
            <ol>{history.map((squares, move) => {
                const description = move > 0 ? 'Go to move #' + move : 'Go to game start';
                return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{description}</button>
                </li>
                );
            })}</ol>
            
            {/* Reset button available after the first move */}
            {currentMove > 0 && (
                <button className="reset-btn" onClick={resetGame}>Reset Game</button>
            )}
            </div>
        </div>
    );
}
