import Image from "next/image";
import logo from "../../../../../public/assets/svg/logo.svg"
import clsx from "clsx";


export const Avtar = ({ size = "medium", src, alt }) => {

    let sizeStyles = ""

    switch (size) {
        case "small":
            sizeStyles = "w-[24px] h-[24px]"
            break;
        case "medium": //default
            sizeStyles = "w-[34px] h-[34px]"
            break;
        case "large":
            sizeStyles = "w-[50px] h-[50px]"
            break;


    }
    return (
        <div className={clsx(sizeStyles, "bg-gray-400 rounded-full relative")}>
            <Image fill src={src} alt={alt} width={sizeLogo} className="rounded-full object-cover object-center" />
        </div>
    )
}

