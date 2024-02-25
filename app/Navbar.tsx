import Link from 'next/link'
import React from 'react'
import { IoBugSharp } from "react-icons/io5";


const Navbar = () => {
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
                    className='text-zinc-200 hover:text-zinc-50 transition-colors' 
                    href={link.href}>
                        {link.label}
                </Link>)}
        </ul>
    </nav>
  )
}

export default Navbar