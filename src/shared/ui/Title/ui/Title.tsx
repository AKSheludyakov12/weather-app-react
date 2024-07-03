import { ReactNode } from "react"
import cls from "./Title.module.scss"

interface TitleProps {
    children?: ReactNode
}
const Title = (props:TitleProps) => { 
const {children} = props
    
    return (
    <h1 className={cls.title}>
        {children}
    </h1>
    )

}

export default Title