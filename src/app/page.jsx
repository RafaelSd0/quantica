import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function page() {
  return (
    <main className="bg-verde-600" >
      <section id="Hero" className=" flex items-center justify-between h-[80vh] px-[10%] rounded-b-4xl bg-branco ">
        <div className="w-2/3">
          <h1>Aprenda <span className=" text-verde-900 ">Física Quântica e Computação Quântica</span> com Projetos</h1>
          <p>Explore conceitos fascinantes e aprenda na prática com projetos interativos.</p>
        </div>
        <Image src={"/quântica.svg"} width={100} height={100} alt="quântica"  />
      </section>
      <section id="About" className="text-center space-y-5 h-[70vh] flex flex-col items-center justify-center px-[10%] ">
        <h2>O que é Quântica?</h2>
        <p className="w-2/5 mx-auto">A quântica que rege a Computação e a Física se refere à Mecânica Quântica, uma teoria fundamental da física que descreve o comportamento da matéria e da energia em escalas extremamente pequenas, como átomos e partículas subatômicas.</p>
        <div className="flex justify-around ">
          <div className="w-1/3 space-y-5 p-5 bg-verde-900 text-branco rounded-2xl">
            <h3>Mecânica Quântica</h3>
            <p className="text-left">Ramo da física que estuda o comportamento de partículas subatômicas. Principais conceitos: superposição, dualidade onda-partícula, princípio da incerteza e emaranhamento quântico. Explica fenômenos que a física clássica não consegue descrever.</p>
          </div>
          <div className="w-1/3 space-y-5 p-5 bg-verde-900 text-branco rounded-2xl">
            <h3>Computação Quântica</h3>
            <p className="text-left">Área da computação que usa princípios da mecânica quântica para processar informações de forma diferente dos computadores clássicos. Usa qubits, que podem estar em superposição e entrelaçamento, permitindo resolver problemas complexos de forma mais eficiente.</p>
          </div>
        </div>
      </section>
      <section className="bg-branco">
        <h2>Projetos Física Quântica</h2>
        <div>

        </div>
        <h2>Projetos Computação Quântica</h2>
        <div>
          <div>
            <h3>Superposição e Medição com Cartões</h3>
            <p>Este experimento mostra que um qubit pode estar em um estado de superposição, sendo 0 e 1 ao mesmo tempo até que uma medição seja feita.</p>
            <Link href={"/"}>
              <GoArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}