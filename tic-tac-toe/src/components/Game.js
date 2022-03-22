import React, {useState} from 'react';
import Board from './Board'; 
import {calculateWinner} from '../winningLogic'; 


function Game() {
    // history is 2D array, meant to store array of squares for every valid move. 
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setxIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";  

    const handleClick = (i) => {
        // slice history up until and including current stepNumber
        const historyPoint = history.slice(0, stepNumber+1);
        // get current steps array, and copy it into squares variable
        const current = historyPoint[stepNumber]; 
        const squares = [...current]; 

        // return if winner is already declared, or squares[i] has existing character
        if(winner || squares[i]) return; 

        // update squares array, and add new array to history
        squares[i] = xO; 
        setHistory([...historyPoint, squares]); 
        setStepNumber(historyPoint.length); 
        setxIsNext(!xIsNext); 
    }

    const jumpTo = (step) => {
        setStepNumber(step); 
        setxIsNext(step%2 === 0); 
    }

    const renderMoves = () =>
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : "Go to Start";
            return (
              <li key={move}>
                <button onClick={() => jumpTo(move)}>{destination}</button>
              </li>
            );
          });


    return ( 
        <>
        <h1>Tic Tac Toe</h1>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div className="info-wrapper">
          <div>
            <h3>History</h3>
            {renderMoves()}
          </div>
          <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        </div>
      </>
     );
}; 

export default Game;