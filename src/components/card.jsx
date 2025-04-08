import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

const Card = ({ title, link }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>
        <Link href={link} className="flex items-center py-2 px-3 bg-verde-600 text-coal rounded-xl">
          Ver Projeto <GoArrowUpRight size={30} />
        </Link>
      </div>  
    </div>
  );
};

export default Card;
