import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

type AccordionProps = {
  title: string;
  description: string;
};

export const Accordion = ({ title, description }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-white px-4 md:px-8 rounded-md'>
      <button
        className='py-3 flex items-center text-sm text-left w-full md:py-4 md:text-md'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className='text-main-800 font-bold pr-2 text-xl shrink-0 leading-none self-start md:text-2xl md:pr-4'>
          Q
        </span>
        {title}
        <span className='text-2xl font-bold text-gray-500 leading-none pl-2 ml-auto md:text-3xl md:pl-4'>
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </button>
      <div
        className={`font-normal text-sm  border-t border-gray-200 text-left md:text-md overflow-hidden transition-all ${
          isOpen ? 'h-auto py-4 md:py-5' : 'h-0 py-0'
        }`}
      >
        <span className='text-main-400 font-bold pr-2 text-xl shrink-0 leading-none md:text-2xl'>
          A
        </span>
        {description}
      </div>
    </div>
  );
};
