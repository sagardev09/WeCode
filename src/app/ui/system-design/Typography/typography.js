import clsx from "clsx"


export const Typography = ({ variant, children, Component: Component, theme, weight, className }) => {

    let variantStyles = ""
    let colorStyles = ""

    switch (variant) {
        case "display":
            variantStyles = "text-8xl"
            break;
        case "h1":
            variantStyles = "text-7xl"
            break;
        case "h2":
            variantStyles = "text-6xl"
            break;
        case "h3":
            variantStyles = "text-5xl"
            break;
        case "h4":
            variantStyles = "text-4xl"
            break;
        case "h5":
            variantStyles = "text-3xl"
            break;
        case "lead":
            variantStyles = "text-2xl"
            break
        case "body-lg":
            variantStyles = "text-xl"
            break;
        case "body-base":
            variantStyles = "text-base"
            break;
        case "body-sm":
            variantStyles = "text-sm"
            break;
        case "caption1":
            variantStyles = "text-caption1"
            break;
        case "caption2":
            variantStyles = "text-caption2"
            break;
        case "caption3":
            variantStyles = "text-caption3"
            break;
        case "caption4":
            variantStyles = "text-caption4"
            break;
    }

    switch (theme) {
        case "black":
            colorStyles = "text-gray"
            break;
        case "gray":
            colorStyles = "text-gray-700"
            break;
        case "white":
            colorStyles = "text-white"
            break;
        case "primary":
            colorStyles = "text-primary"
            break;
        case "secondary":
            colorStyles = "text-secondary"
            break;

        default:
            break;
    }

    return (
        <Component className={clsx(variantStyles, colorStyles, className,)}>{children}</Component>
    )
}
