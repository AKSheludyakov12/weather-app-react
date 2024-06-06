import { ButtonHTMLAttributes, Children } from "react"
import cls from "./Button.module.scss"
import ClassNames from "../../../lib/ClassNames"

export enum ButtonTheme  {
    DEFAUT = "default",
    NON_VISIBLE = "non_visible"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    className?: string, 
    theme?: ButtonTheme,
    children?: React.ReactNode,
    disabled?: boolean,
}

export const Button = (props:ButtonProps )=> { 
    const { 
        className,
        theme = ButtonTheme.DEFAUT ,
        children,
        disabled=false,
        ...otherProps
    }= props
    
    return (
        <button
        disabled={disabled}
        className={ClassNames(cls.button, {}, [className, cls[theme]])}
        {...otherProps}>
        
            {children}
        </button>
    )

}