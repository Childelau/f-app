import React, { useState } from 'react';
import './style.css'


function Square({value, onSquareClick}) {
    return (
        <button className='square' onClick={onSquareClick}>{value}</button>
    )
}


function Board(){
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setxIsNext] = useState(true)

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return
        }
        //复制一个squares，不要直接改变原数据
        const nextSquares = squares.slice()
        //根据xIsNext判断下一个点击输出
        xIsNext? nextSquares[i] = 'X': nextSquares[i] = 'O'
        setSquares(nextSquares)
        setxIsNext(!xIsNext)
    }
    const winner = calculateWinner(squares)
    let status
    if (winner) {
        status = 'Winner:' + winner
    } else {
        status = 'Next player:' + (xIsNext? 'X': 'O')    
    }

    return (
        <>
            <div className='status'>{status}</div>
            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className='board-row'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null  
}



export default Board