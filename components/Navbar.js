import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <>
      <div className='container mx-auto py-3'>
        <nav className='flex space-x-4 w-full justify-between items-center'>
          <div className='logo text-3xl font-bold text-green-500'>
            <a>Tanimur</a>
          </div>
          <div className='flex gap-x-4 text-2xl font-mono font-semibold'>
            <Link href={'/'}>
              <a className='hover:border-opacity-100 border-b-4 border-opacity-0 hover:border-blue-700 transition'>
                Home
              </a>
            </Link>
            <a>About</a>
            <Link href={'/blog'}>
              <a className='hover:border-opacity-100 border-b-4 border-opacity-0 hover:border-blue-700 transition'>
                Blog
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
