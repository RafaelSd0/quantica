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
      <p>{experiment.text}</p>
      <experiment.experimento /> {/* Renderiza o componente dinâmico */}
    </div>
  );
}