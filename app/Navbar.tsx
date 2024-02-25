"use client";
import Link from 'next/link'
import React from 'react'
import { IoBugSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';


const Navbar = () => {
    const currentPath = usePathname(); //this is a browser API. We can only use browser APIs in client components.

    const links = [
        {label : 'Dashboard', href : '/'},
        {label : 'Issues', href: '/issues'}
    ]
  return (
    <nav className='flex space-x-6 px-5 mb-5 border-b h-14 items-center'>
        <Link href="/"><IoBugSharp /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
                <Link 
                    key={link.href} 
                    className={classnames({
                        'text-zinc-800': link.href === currentPath,
                        'text-zinc-600': link.href !== currentPath,
                        'hover:text-zinc-900 transition-colors': true,
                    })}  
                    href={link.href}>
                        {link.label}
                </Link>)}
        </ul>
    </nav>
  )
}

export default Navbar