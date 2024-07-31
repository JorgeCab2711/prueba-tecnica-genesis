import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, AlignRight } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // No media querys para mejor manejo de codigo, tailwind se lo haria ver muy desordenado
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? (
    <div className='bg-red-500 h-fit w-auto m-3 rounded-md p-3'>
      <div className='flex justify-between items-center h-fit'>
        <p className='pl-10 font-serif text-xl'>Litigade</p>
        <div className='flex gap-5 p-3'>
          <Search className='hover:cursor-pointer' />
          <ShoppingCart className='hover:cursor-pointer' />
          <AlignRight className='hover:cursor-pointer' />
        </div>
      </div>
      <div className='grid place-items-center text-2xl p-2 bg-slate-400'>
        <a href="">Home</a>
        <a href="">Product</a>
        <a href="">Pricing</a>
        <a href="">Contact</a>
      </div>
    </div>
  ) : (
    <div className='bg-red-500 h-16 w-auto m-3 rounded-md p-2 flex justify-between items-center'>
      <p className='pl-20 font-serif text-xl'>Litigade</p>
      <div className='flex gap-10'>
        <a href="">Home</a>
        <a href="">Product</a>
        <a href="">Pricing</a>
        <a href="">Contact</a>
        <Search className='hover:cursor-pointer' />
        <ShoppingCart className='hover:cursor-pointer' />
      </div>
      <AlignRight className='hover:cursor-pointer' />
    </div>
  );
};

export default NavBar;
