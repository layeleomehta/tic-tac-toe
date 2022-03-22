import React from "react";
import Square from './Square'; 

function Board(props) {
    return ( 
        <div className="board">
            {props.squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => props.onClick(i)}></Square>
            ))}
        </div>
     );
}

export default Board;