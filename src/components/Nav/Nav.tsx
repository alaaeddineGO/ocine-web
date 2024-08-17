'use client'
import Logo from "./Logo"
import {nav_links} from '../../constant/nav-links'
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
function Nav() {
    const [isopen,setIsopen]=useState<Boolean>(true)
    const mobaileNav=`absolute flex flex-col right-1 top-12 rounded-sm gap-4 backdrop-filter border-[.1px] shadow-md border-slate-400`
    const toggleNav = ()=>{
        setIsopen(!isopen)
    }
  return (
    <nav className="w-full flex h-20 lg:px-32  items-center fixed top-0 left-0 justify-between p-2 rounded-sm bg-slate-900/50 backdrop-blur-md z-30 p-auto">
        <Logo />
        <ul className={`${isopen? 'max-md:hidden' : mobaileNav} `}>
            {nav_links.map((item,index)=>{
                return(
                    <Link key={index} href={`/${item}`} onClick={toggleNav} className="mx-2 hover:text-white">{item}</Link>
                )
            })}
        </ul>
        {isopen?(<Menu className="md:hidden cursor-pointer" onClick={toggleNav}/>):(<X className="md:hidden cursor-pointer" onClick={toggleNav}/>)}
    </nav>
  )
}
export default Nav