"use client"
import { useParams } from "next/navigation";
import { useDataStore } from "@/experimentsData/data";
import { useEffect, useState } from "react";


export default function ExperimentPage() {
  /*SSR hydration fix*/
  const [mounted, setMounted] = useState(false);

  const params = useParams();
  const name = params?.name;
  const experiments = useDataStore((state) => state.experiments);

  const experiment = experiments.find((exp) => exp.name === name);

  /*SSR hydration fix*/
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-4 space-y-4 animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="h-64 bg-gray-300 rounded w-full"></div>
      </div>
    );
  }

  if (!experiment) {
    return <h1>Experimento não encontrado</h1>;
  }



  return (
    <div className="pt-15">
      <div className="xl:px-[10%] lg:px-[5%] px-[3%] ">
        <h1 className="lg:w-3/5  pt-5 lg:text-left">{experiment.title}</h1>
        <span >{experiment.sub}</span>
        <div className=" flex justify-between items-center  py-5 lg:flex-row-reverse flex-col space-y-5 lg:space-y-0">
          <img src={experiment.image1} alt="image1" className=" xl:max-w-[500px] md:max-w-[450px] lg:max-w-[350px] max-w-[350px] rounded-2xl "/>
          <p className="lg:w-3/6 w-5/6">{experiment.text1}</p>
        </div>
        <div className=" flex justify-between items-center py-5 lg:flex-row flex-col space-y-5 lg:space-y-0 ">
          <img src={experiment.image2} alt="image2" className=" xl:max-w-[500px] md:max-w-[450px] lg:max-w-[350px] max-w-[350px] rounded-2xl " />
          <p className="lg:w-3/6 w-5/6" >{experiment.text2}</p>
        </div>
      </div>
      <div className="bg-verde-600 xl:px-[10%] lg:px-[5%] px-[3%] space-y-5  ">
        <h2 className="pt-5">Faça você Mesmo</h2>
        <p className="xl:w-1/2 lg:w-4/6 w-5/6">{experiment.objective}</p>
        <h2>Materiais Necessários</h2>
        <ul className="xl:w-1/2 lg:w-4/6 w-5/6 space-y-5">
          { experiment.materials.map( (item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
        <h2>Montagem do Experimento</h2>
        <ul className="xl:w-1/2 lg:w-4/6 w-5/6 space-y-5">
          { experiment.montage.map( (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2>Procedimento</h2>
        <ul className="xl:w-1/2 lg:w-4/6 w-5/6 space-y-5 pb-5">
          { experiment.procedure.map( (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}