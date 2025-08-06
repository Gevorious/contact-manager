import { useState } from 'react';
import Content from './_partials/Content';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex">
          <div className="w-64 hidden md:block h-full bg-gray-800 text-white p-4 space-y-6">
          <Content />
          </div>
        <div
          className={`
            fixed top-0 left-0 h-full bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden
          `}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(prev => !prev)}
              className={`absolute top-2 ${isOpen ? "right-[5px] text-white": "right-[-25px] text-gray-800"}`}>
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
          <div className="w-64 h-full bg-gray-800 text-white p-4 space-y-6">
            <Content onLinkClick={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;