"use client"
import { useParams } from "next/navigation";
import { useDataStore } from "@/experimentsData/data";


export default function ExperimentPage() {
  const params = useParams();
  const name = params?.name;
  const experiments = useDataStore((state) => state.experiments);

  const experiment = experiments.find((exp) => exp.name === name);

  if (!experiment) {
    return <h1>Experimento não encontrado</h1>;
  }

  return (
    <div>
      <div className="xl:px-[10%] lg:px-[5%] px-[3%] ">
        <h1 className="w-3/5 pt-5">{experiment.title}</h1>
        <span>{experiment.sub}</span>
        <div className=" flex justify-between items-center py-5 flex-row-reverse">
          <img src={experiment.image1} alt="image1" className=" max-w-[600px] rounded-2xl "/>
          <p className="w-3/6">{experiment.text1}</p>
        </div>
        <div className=" flex justify-between items-center py-5 ">
          <img src={experiment.image2} alt="image2" className=" max-w-[600px] rounded-2xl " />
          <p className="w-3/6" >{experiment.text2}</p>
        </div>
      </div>
      <div className="bg-verde-600 xl:px-[10%] lg:px-[5%] px-[3%] space-y-5 ">
        <h2 className="pt-5">Faça você Mesmo</h2>
        <p className="w-1/2">{experiment.objective}</p>
        <h2>Materiais Necessários</h2>
        <ul className="w-1/2 space-y-5">
          { experiment.materials.map( (item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
        <h2>Montagem do Experimento</h2>
        <ul className="w-1/2 space-y-5">
          { experiment.montage.map( (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2>Procedimento</h2>
        <ul className="w-1/2 space-y-5 pb-5">
          { experiment.procedure.map( (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}