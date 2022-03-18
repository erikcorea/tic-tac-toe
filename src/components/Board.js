import React, { useState } from 'react'
import '../styling/board.css'

export default function Board() {
    const [text, setText] = useState();
    const [turn, setTurn] = useState("p1");

    function ClickHandler(){
        text == "O" ? setText("x") : setText("O")
    }

  return (
    <>
        <div className='board-container'>
            <button className='square tr' onClick={ClickHandler}>{text}</button>
            <button className='square tm' onClick={ClickHandler}>{text}</button>
            <button className='square tl' onClick={ClickHandler}>{text}</button>
            <button className='square mr' onClick={ClickHandler}>{text}</button>
            <button className='square mm' onClick={ClickHandler}>{text}</button>
            <button className='square ml' onClick={ClickHandler}>{text}</button>
            <button className='square bl' onClick={ClickHandler}>{text}</button>
            <button className='square bm' onClick={ClickHandler}>{text}</button>
            <button className='square br' onClick={ClickHandler}>{text}</button>
        </div>
    </>
  )
}
