'use client'
import Link from "next/link";
import { useState, useEffect, useRef } from "react";


const header = () => {
  const [physic, setPhysic] = useState(false);
  const [computation, setComputation] = useState(false);
  const headerRef = useRef(null);

  function showPhysic() {
    setPhysic(!physic);
    setComputation(false);
  }

  function showComputation(){
    setComputation(!computation);
    setPhysic(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setPhysic(false);
        setComputation(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full fixed top-0 font-bold" ref={headerRef}>
      <header className="  flex justify-between items-center py-1.5 bg-verde-600 xl:px-[10%] lg:px-[5%] px-[3%] border-b-2 border-coal ">
        <Link href={'/'} className=" font-bold font-titillium-web cursor-pointer hover:shadow-md rounded-2xl p-2 "><span className="md:text-2xl text-xl ">Mundo Quântico</span></Link>
        <div className="  md:space-x-5 z-10  ">
          <button onClick={showPhysic} className=" p-2 cursor-pointer hover:shadow-md rounded-2xl " > Física </button>
          <button onClick={showComputation} className=" p-2 cursor-pointer hover:shadow-md rounded-2xl" > Computação </button>
        </div>
      </header>
      
      
        <div  className={`transition-transform duration-500 overflow-hidden origin-top transform 
          ${physic ? 'opacity-100 scale-y-100 max-h-[800px] pointer-events-auto' : ' scale-y-0 max-h-0 pointer-events-none'}
          flex justify-evenly bg-verde-900 items-center text-white flex-col`}> 
          <Link href={'/experimento/radiacao'} onClick={() => setPhysic(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4" >Radiação de Corpo Negro</Link>
          <Link href={'/experimento/dualidade'} onClick={() => setPhysic(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Dualidade Onda-Partícula</Link>
          <Link href={'/experimento/fotoeletrico'} onClick={() => setPhysic(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Efeito Fotoelétrico</Link>
          <Link href={'/experimento/saltos'} onClick={() => setPhysic(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Saltos Quânticos com Bolinhas</Link>
          <Link href={'/experimento/interferencia'} onClick={() => setPhysic(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Interferência com Laser e CD</Link>
          <Link href={'/experimento/incerteza'} onClick={() => setPhysic(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4"> Princípio da Incerteza com Caixa e Moeda</Link>
          <Link href={'/experimento/radioativo'} onClick={() => setPhysic(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4"> Decaimento Radioativo com Dados </Link>
        </div> 

        <div className={`transition-transform duration-500 overflow-hidden origin-top transform 
          ${computation ? 'opacity-100 scale-y-100 max-h-[800px] pointer-events-auto' : ' scale-y-0 max-h-0 pointer-events-none'}
          flex justify-evenly bg-verde-900 items-center text-white flex-col`} > 
          <Link href={'/experimento/qubit'} onClick={() => setComputation(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Superposição e Medição com Cartões</Link>
          <Link href={'/experimento/cartas'} onClick={() => setComputation(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Emaranhamento com Cartas Iguais</Link>
          <Link href={'/experimento/portas'} onClick={() => setComputation(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Portas Lógicas Quânticas com Alunos</Link>
          <Link href={'/experimento/caminhos'} onClick={() => setComputation(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Interferência com Caminhos de Papel</Link>
          <Link href={'/experimento/busca'} onClick={() => setComputation(false)} className=" hover:bg-green-300/50 transition-normal duration-[650ms] w-full text-center py-4">Busca com Oráculo (Grover Simplificado)</Link>
        </div> 
      
    </div>
  );
};

export default header;