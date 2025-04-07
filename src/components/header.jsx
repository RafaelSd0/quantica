'use client'
import { useState } from "react";


const header = () => {
  const [physic, setPhysic] = useState(false);
  const [computation, setComputation] = useState(false);

  function showPhysic() {
    setPhysic(!physic);
  }

  function showComputation(){
    setComputation(!computation);
  }

  return (
    <div className="text-lg font-bold ">
      <header className=" flex justify-between items-center py-5 bg-verde-600 xl:px-[10%] lg:px-[5%] px-[3%] ">
        <span>Lorem</span>
        <div className=" space-x-5">
          <button onClick={showPhysic}> Física </button>
          <button onClick={showComputation}> Computação </button>
        </div>
      </header>
      {
        physic  ? 
        <div> 

          lorem

        </div> : <div>  </div>
      }
      {
        computation ? 
        <div> 

          lorem 
          
        </div> : <div>  </div>
      }
    </div>
  );
};

export default header;