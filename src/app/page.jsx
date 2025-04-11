import Image from "next/image";
import Card from "@/components/card";

export default function page() {
  return (
    <main className="bg-verde-600 pt-15" >
      <section id="Hero" className=" flex flex-col-reverse xl:flex-row items-center justify-center xl:justify-between h-[800px] xl:px-[10%] lg:px-[5%]  px-[3%] md:rounded-b-[150px] rounded-b-[60px] bg-branco ">
        <div className="xl:text-left text-center md:w-4/5">
          <h1>Aprenda <span className=" text-verde-900 ">Física Quântica e Computação Quântica</span> com Projetos</h1>
          <p className="pt-3">Explore conceitos fascinantes sobre a quântica.</p>
        </div>
        <Image src={"/quântica.svg"} width={300} height={300} alt="quântica" className=" 2xl:min-w-[500px] xl:min-w-[400px] lg:min-w-[600px] md:min-w-[500px] "  />
      </section>
      <section id="About" className="lg:text-center md:space-y-5 space-y-3 md:h-[900px] h-[800px] flex flex-col xl:items-center justify-center  xl:px-[10%] lg:px-[5%]  px-[3%] md:text-center ">
        <div className="md:space-y-5 space-y-3  ">
        <h2>O que é Quântica?</h2>
        <p className="xl:w-2/5 md:w-4/5 md:mx-auto">A quântica que rege a Computação e a Física se refere à Mecânica Quântica, uma teoria fundamental da física que descreve o comportamento da matéria e da energia em escalas extremamente pequenas, como átomos e partículas subatômicas.</p>
        </div>
        <div className="flex xl:justify-around flex-col xl:flex-row lg:space-y-5 space-y-3 xl:space-y-0 lg:items-center md:items-center  ">
          <div className="xl:w-2/5 space-y-5 p-5 bg-verde-900 text-branco rounded-2xl md:w-4/5 w-auto border-l-4 border-b-4 border-coal ">
            <h3>Mecânica Quântica</h3>
            <p className="text-left ">Ramo da física que estuda o comportamento de partículas subatômicas. Principais conceitos: superposição, dualidade onda-partícula, princípio da incerteza e emaranhamento quântico. Explica fenômenos que a física clássica não consegue descrever.</p>
          </div>
          <div className="xl:w-2/5 space-y-5 p-5 bg-verde-900 text-branco rounded-2xl md:w-4/5 w-auto border-l-4 border-b-4 border-coal   ">
            <h3>Computação Quântica</h3>
            <p className="text-left ">Área da computação que usa princípios da mecânica quântica para processar informações de forma diferente dos computadores clássicos. Usa qubits, que podem estar em superposição e entrelaçamento, permitindo resolver problemas complexos de forma mais eficiente.</p>
          </div>
        </div>
      </section>
      <section className="bg-branco xl:px-[10%] lg:px-[5%] px-[3%] space-y-5 pb-20">
        <h2 className="pt-5">Projetos Física Quântica</h2>
        <div className="fill ">
          <Card title={'Radiação de Corpo Negro'} link={'/experimento/radiacao'}  />
          <Card title={'Dualidade Onda-Partícula'} link={'/experimento/dualidade'}  />
          <Card title={'Efeito Fotoelétrico'} link={'/experimento/fotoeletrico'}  />
          <Card title={'Decaimento Radioativo com Dados'} link={'/experimento/radioativo'}  />
          <Card title={'Saltos Quânticos com Bolinhas'} link={'/experimento/saltos'}  />
          <Card title={'Princípio da Incerteza com Caixa e Moeda'} link={'/experimento/incerteza'}  />
          <Card title={'Interferência com Laser e CD'} link={'/experimento/interferencia'}/>
        </div>
        <h2>Projetos Computação Quântica</h2>
        <div className="fill ">    
          <Card title={'Superposição e Medição com Cartões'} link={'/experimento/qubit'}  />
          <Card title={'Emaranhamento com Cartas Iguais'} link={'/experimento/cartas'}  />
          <Card title={'Portas Lógicas Quânticas com Alunos'} link={'/experimento/portas'}  />
          <Card title={'Interferência com Caminhos de Papel'} link={'/experimento/caminhos'}  />
          <Card title={'Busca com Oráculo (Grover Simplificado)'} link={'/experimento/busca'}  />
        </div>
      </section>
    </main>
  );
}