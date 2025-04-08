'use client'
import Link from "next/link";
import { useState } from "react";


const header = () => {
  const [physic, setPhysic] = useState(false);
  const [computation, setComputation] = useState(false);

  function showPhysic() {
    setPhysic(!physic);
    setComputation(false);
  }

  function showComputation(){
    setComputation(!computation);
    setPhysic(false);
  }

  return (
    <div className="w-full fixed top-0 text-lg font-bold">
      <header className="  flex justify-between items-center py-5 bg-verde-600 xl:px-[10%] lg:px-[5%] px-[3%] ">
        <Link href={'/'} className=" font-bold font-titillium-web">Mundo Quântica</Link>
        <div className=" space-x-5">
          <button onClick={showPhysic} > Física </button>
          <button onClick={showComputation} > Computação </button>
        </div>
      </header>
      {
        physic  ? 
        <div className=" flex justify-evenly bg-verde-900 items-center text-white py-3 flex-col space-y-5" > 
          <Link href={'/experimento/radiacao'} onClick={() => setPhysic(false)}>Radiação de Corpo Negro</Link>
          <Link href={'/experimento/dualidade'} onClick={() => setPhysic(false)}>Dualidade Onda-Partícula</Link>
          <Link href={'/experimento/fotoeletrico'} onClick={() => setPhysic(false)}>Efeito Fotoelétrico</Link>
          <Link href={'/experimento/saltos'} onClick={() => setPhysic(false)}>Saltos Quânticos com Bolinhas</Link>
          <Link href={'/experimento/interferencia'} onClick={() => setPhysic(false)}>Interferência com Laser e CD</Link>
          <Link href={'/experimento/incerteza'} onClick={() => setPhysic(false)}> Princípio da Incerteza com Caixa e Moeda</Link>
          <Link href={'/experimento/radioativo'} onClick={() => setPhysic(false)}> Decaimento Radioativo com Dados </Link>
        </div> : <div>  </div>
      }
      {
        computation ? 
        <div className=" flex justify-evenly bg-verde-900 items-center text-white py-3  flex-col  space-y-5" > 
          <Link href={'/experimento/qubit'} onClick={() => setComputation(false)}>Superposição e Medição com Cartões</Link>
          <Link href={'/experimento/cartas'} onClick={() => setComputation(false)}>Emaranhamento com Cartas Iguais</Link>
          <Link href={'/experimento/portas'} onClick={() => setComputation(false)}>Portas Lógicas Quânticas com Alunos</Link>
          <Link href={'/experimento/caminhos'} onClick={() => setComputation(false)}>Interferência com Caminhos de Papel</Link>
          <Link href={'/experimento/busca'} onClick={() => setComputation(false)}>Busca com Oráculo (Grover Simplificado)</Link>
        </div> : <div>  </div>
      }
    </div>
  );
};

export default header;