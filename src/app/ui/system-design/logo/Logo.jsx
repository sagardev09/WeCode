import Image from "next/image";
import logo from "../../../../../public/assets/svg/logo.svg"


export const Logo = ({ size = "medium", }) => {

    let sizeLogo = ""

    switch (size) {
        case "very-small":
            sizeLogo = 34
            break;
        case "small":
            sizeLogo = 61
            break;
        case "medium": //default
            sizeLogo = 88
            break;
        case "large":
            sizeLogo = 140
            break;


    }
    return (
        <div>
            <Image src={logo} alt="logo" width={sizeLogo} />
        </div>
    )
}

