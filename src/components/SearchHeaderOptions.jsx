"use client"
import React from 'react'
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function SearchHeaderOptions () {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const searchTerm = searchParams.get('searchTerm');

  const selectTab = (tab) => {
    router.push(`/search/${tab === "Images" ? "images" : "web"}?searchTerm=${searchTerm}`);
  };

  return (
    <div className='flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm'>
      <div className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === '/search/web' && '!text-blue-600 border-blue-600'}`} onClick={() => selectTab("All")}>
        <AiOutlineSearch className='text-md' />
        <p>All</p>
      </div>
      <div className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === '/search/images' && '!text-blue-600 border-blue-600'}`} onClick={() => selectTab("Images")}>
        <AiOutlineCamera className='text-md' />
        <p>Images</p>
      </div>
    </div>
  );
};
