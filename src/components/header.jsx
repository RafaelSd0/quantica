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
      <header className="  flex justify-between items-center py-5 bg-verde-600 xl:px-[10%] lg:px-[5%] px-[3%] border-b-2 border-coal">
        <Link href={'/'} className=" font-bold font-titillium-web cursor-pointer">Mundo Quântico</Link>
        <div className=" space-x-5">
          <button onClick={showPhysic} className=" cursor-pointer " > Física </button>
          <button onClick={showComputation} className=" cursor-pointer " > Computação </button>
        </div>
      </header>
      {
        physic  ? 
        <div className=" flex justify-evenly bg-verde-900 items-center text-white  flex-col " > 
          <Link href={'/experimento/radiacao'} onClick={() => setPhysic(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4" >Radiação de Corpo Negro</Link>
          <Link href={'/experimento/dualidade'} onClick={() => setPhysic(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Dualidade Onda-Partícula</Link>
          <Link href={'/experimento/fotoeletrico'} onClick={() => setPhysic(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Efeito Fotoelétrico</Link>
          <Link href={'/experimento/saltos'} onClick={() => setPhysic(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Saltos Quânticos com Bolinhas</Link>
          <Link href={'/experimento/interferencia'} onClick={() => setPhysic(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Interferência com Laser e CD</Link>
          <Link href={'/experimento/incerteza'} onClick={() => setPhysic(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4"> Princípio da Incerteza com Caixa e Moeda</Link>
          <Link href={'/experimento/radioativo'} onClick={() => setPhysic(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4"> Decaimento Radioativo com Dados </Link>
        </div> : <div>  </div>
      }
      {
        computation ? 
        <div className=" flex justify-evenly bg-verde-900 items-center text-white   flex-col  " > 
          <Link href={'/experimento/qubit'} onClick={() => setComputation(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Superposição e Medição com Cartões</Link>
          <Link href={'/experimento/cartas'} onClick={() => setComputation(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Emaranhamento com Cartas Iguais</Link>
          <Link href={'/experimento/portas'} onClick={() => setComputation(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Portas Lógicas Quânticas com Alunos</Link>
          <Link href={'/experimento/caminhos'} onClick={() => setComputation(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Interferência com Caminhos de Papel</Link>
          <Link href={'/experimento/busca'} onClick={() => setComputation(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Busca com Oráculo (Grover Simplificado)</Link>
        </div> : <div>  </div>
      }
    </div>
  );
};

export default header;