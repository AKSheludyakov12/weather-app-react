import { ReactNode } from "react"
import { ThemeTimeOfDay } from "../../../../shared/lib/Theme/Theme"
import ClassNames from "../../../../shared/lib/ClassNames"
import cls from "./MainWrapper.module.scss"

interface mainWrapperProps {
    className?: string,
    theme?:ThemeTimeOfDay,
    children?: ReactNode
}

export const MainWrapper =( props:mainWrapperProps )=> {
    
    const {
        className,
        theme,
        children
    } = props
    
    return (
        <div className={ClassNames(cls.MainWrapper, {}, [className, cls[theme]])}>
            {children}
        </div>

    )
}