import Navigation from "../common/navigation"
export default function MobileNavigation() {
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
    ];

    return (
        <>
            <Navigation type="mobile" links={links} />
        </>
    )
}