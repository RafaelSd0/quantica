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
      <h1>{experiment.title}</h1>
      <span>{experiment.sub}</span>
      <div>
        <img src={experiment.image1} alt="image1" />
        <p>{experiment.text1}</p>
      </div>
      <div className="">
        <img src={experiment.image2} alt="image2" />
        <p>{experiment.text2}</p>
      </div>
      <div>
        <h2>Faça você Mesmo</h2>
        <p>{experiment.objective}</p>
        <h2>Materiais Necessários</h2>
        <ul>
          { experiment.materials.map( (item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
        <h2>Montagem do Experimento</h2>
        <ul>
          { experiment.montage.map( (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2>Procedimento</h2>
        <ul>
          { experiment.procedure.map( (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}