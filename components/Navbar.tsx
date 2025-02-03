import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-950/60 fixed w-full z-50 top-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-white text-lg font-bold">Welcome!</div>
          </div>
          <div className="flex items-center -mr-2 sm:hidden">
            <button onClick={toggleNavbar} type="button" className="bg-zinc-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={`${isOpen ? 'hidden' : 'inline-flex'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                <path className={`${isOpen ? 'inline-flex' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link to="about" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">About Me</Link>
              <Link to="technologies" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Stack</Link>
              <Link to="contact" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Contact</Link>
              <Link to="works" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Works</Link>
              <Link to="repositories" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Repositories</Link>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-950">
            <Link to="about" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer" onClick={toggleNavbar}>About Me</Link>
            <Link to="technologies" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer" onClick={toggleNavbar}>Stack</Link>
            <Link to="contact" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer" onClick={toggleNavbar}>Contact</Link>
            <Link to="works" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer" onClick={toggleNavbar}>Works</Link>
            <Link to="repositories" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer" onClick={toggleNavbar}>Repositories</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;