"use client";

import Navigation from "../common/navigation";
import Logo from "../common/logo";
import HeaderUtility from "../header/headerUtility";
import MobileNavigation from "../header/mobileNavigation"
 
export default function Header() {
    const links = [
        {
            href: "/club-information",
            name: "Історія Клубу"
        },
        {
            href: "/news",
            name: "Новини"
        },
        {
            href: "/gallery",
            name: "Галерея"
        },
        {
            href: "/parent-information",
            name: "Інформація Батькам"
        }
    ]
  return (
    <header className="flex justify-between items-center py-2 px-4">
        <MobileNavigation />
        <Logo type="light" link={true} size="sm" />
        <Navigation type="desktop" links={links} />
        <HeaderUtility />
    </header>
    )
}