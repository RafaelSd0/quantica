'use client'
import Link from "next/link";
import { useState } from "react";


const header = () => {
  const [physic, setPhysic] = useState(false);
  const [computation, setComputation] = useState(false);

  function showPhysic() {
    setPhysic(!physic);
  }

  function showComputation(){
    setComputation(!computation);
  }

  return (
    <div className="text-lg font-bold ">
      <header className=" flex justify-between items-center py-5 bg-verde-600 xl:px-[10%] lg:px-[5%] px-[3%] ">
        <Link href={'/'}>Home</Link>
        <div className=" space-x-5">
          <button onClick={showPhysic}> Física </button>
          <button onClick={showComputation}> Computação </button>
        </div>
      </header>
      {
        physic  ? 
        <div className=" flex justify-evenly bg-verde-900 items-center text-white py-3 md:flex-col space-y-5  "> 

          <Link href={'/experimento/radiacao'} >Radiação de Corpo Negro</Link>
          <Link href={'/experimento/dualidade'} >Dualidade Onda-Partícula</Link>
          <Link href={'/experimento/fotoeletrico'} >Efeito Fotoelétrico</Link>
          <Link href={'/experimento/saltos'} >Saltos Quânticos com Bolinhas</Link>
          <Link href={'/experimento/interferencia'} >Interferência com Laser e CD</Link>
          <Link href={'/experimento/incerteza'} > Princípio da Incerteza com Caixa e Moeda</Link>
          <Link href={'/experimento/radioativo'} > Decaimento Radioativo com Dados </Link>

        </div> : <div>  </div>
      }
      {
        computation ? 
        <div className=" flex justify-evenly bg-verde-900 items-center text-white py-3 md:flex-col space-y-5  "> 

          <Link href={'/experimento/qubit'} >Superposição e Medição com Cartões</Link>
          <Link href={'/experimento/cartas'} >Emaranhamento com Cartas Iguais</Link>
          <Link href={'/experimento/portas'} >Portas Lógicas Quânticas com Alunos</Link>
          <Link href={'/experimento/caminhos'} >Interferência com Caminhos de Papel</Link>
          <Link href={'/experimento/busca'} >Busca com Oráculo (Grover Simplificado)</Link>

        </div> : <div>  </div>
      }
    </div>
  );
};

export default header;