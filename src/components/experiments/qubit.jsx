'use client';
import { useState } from "react";

const qubit = () => {
  const [card, setCard] = useState("em sobreposição");

  function revel(){
    const num = Math.random() > 0.5 ? '0' : '1'; 
    setCard(num);
  }

  return (
    <div>
      <h1>Experimento: Qubit e Superposição</h1>
      <p>{card}</p>
      <button onClick={revel}>ver</button>
    </div>
  );
};

export default qubit;