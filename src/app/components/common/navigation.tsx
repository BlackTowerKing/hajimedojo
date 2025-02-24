"use client";

import Link from "next/link";
  
interface Link {
    name: string;
    href: string;
}
  
interface NavigationProps {
    type: string;
    links: Link[];
}

const Navigation: React.FC<NavigationProps> = ({ type, links }) => {
    return (
        <nav className={type === "desktop" ? "hidden md:block" : "block md:hidden"}>
            <ul className="flex">
                { 
                    links.map((link, ind) => {
                        return (
                            <li key={`${link.name}_${ind}`}>
                                <Link className='px-4 uppercase font-philosopher' href={link.href}>{link.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation;
