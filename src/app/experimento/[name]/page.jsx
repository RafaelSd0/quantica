import { experiments } from "@/experimentsData/data";

export default async function ExperimentPage({params}) {
  const { name } = await params
  const experiment = experiments.find((exp) => exp.name === name);

  if (!experiment) {
    return <h1>Experimento não encontrado</h1>;
  }

  return (
    <div className="pt-15">
      <div className="xl:px-[10%] lg:px-[5%] px-[3%] ">
        <h1 className="lg:w-3/5  pt-5 lg:text-left">{experiment.title}</h1>
        <span >{experiment.sub}</span>
        <div className=" flex justify-around items-center  py-5 lg:flex-row-reverse flex-col space-y-5 lg:space-y-0">
          <div className="overflow-hidden xl:w-[500px] md:w-[450px] lg:w-[350px] w-[350px] max-h-[500px] rounded-2xl flex items-center justify-center  ">
            <img
              src={experiment.image1}
              alt="Exemplo"
              className="w-full h-full object-cover block"
              loading="lazy"
            />
          </div>
          <p className="lg:w-3/6 w-5/6">{experiment.text1}</p>
        </div>
        <div className=" flex justify-around items-center py-5 lg:flex-row flex-col space-y-5 lg:space-y-0 ">
          <div className="overflow-hidden xl:w-[500px] md:w-[450px] lg:w-[350px] w-[350px] max-h-[500px] rounded-2xl flex items-center justify-center ">
            <img
              src={experiment.image2}
              alt="Exemplo"
              className="w-full h-full object-cover block"
              loading="lazy"
            />
          </div>
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