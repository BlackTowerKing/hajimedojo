import Link from "next/link";
import Image from "next/image";

interface LogoProps {
    type: string;
    link?: boolean;
    size: "xs" | "sm" | "md" | "xl";
}

const Logo: React.FC<LogoProps> = ({type, link, size}) => {
    const widthVariants:Record<LogoProps["size"], string> = {
        xs: "90",
        sm: "120",
        md: "150",
        xl: "180"
    }

    return (
        <>
            {link ? 
                <Link href="/">
                    <Image style={{
                        width: `${widthVariants[size]}px`,
                        height: "100%"
                        }} src={`../../hajime-logo-${type}.svg`} alt="hajime logo" width={`${widthVariants[size]}`} height={67} />
                </Link> : 
                <Image className={`${widthVariants[size]}`} src={`../../hajime-logo-${type}.svg`} alt="test" width={`${widthVariants[size]}`} height={67} />
            }
        </>
    )
}

export default Logo;
