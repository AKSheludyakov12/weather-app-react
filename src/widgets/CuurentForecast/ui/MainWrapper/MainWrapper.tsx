import { ReactNode } from "react"
import ClassNames from "../../../../shared/lib/ClassNames"
import cls from "./MainWrapper.module.scss"
import { Theme } from "../../../../App/Provider/ThemeProvider/lib/ThemeContext"

interface mainWrapperProps {
    className?: string,
    children?: ReactNode
}

export const MainWrapper =( props:mainWrapperProps )=> {
    
    const {
        className,
        children
    } = props
    
    return (
        <div className={ClassNames(cls.MainWrapper, {}, [className])}>
            {children}
        </div>

    )
}