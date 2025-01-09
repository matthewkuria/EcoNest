"use client"
import { HomeModernIcon } from '@heroicons/react/16/solid'
import { Navbar, NavbarContent, NavbarMenuToggle, NavbarBrand,  NavbarMenu, } from '@nextui-org/react'
import Link from 'next/link'
import React, { ReactNode } from 'react'


interface AppbarProps { 
    children: ReactNode
}
const Appbar = ({children}:AppbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar className='shadow-md' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
           <Link href={'/'} className='flex items-center text-primary-400 hover:text-primary-600'>
            <HomeModernIcon className="w-16" />
            <p className="font-bold text-inherit">EcoNest Real Estate</p>
           </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      </NavbarContent>
      <NavbarContent justify="end">
        {children}
      </NavbarContent>
      <NavbarMenu>
        
      </NavbarMenu>
    </Navbar>
  )
}

export default Appbar