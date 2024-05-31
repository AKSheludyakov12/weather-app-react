import { FC, ReactNode } from "react"
import cls from "./Ptext.module.scss"
import ClassNames from "../../../lib/ClassNames"

interface props {
    children?:React.ReactNode 
    Classnames?: string
}

const Ptext:FC<props> = (props) => {
const {
    children,
    Classnames
} = props

    return (
    <p className={ClassNames(cls.p, {}, [Classnames])}>
        {children}
    </p>
    )
}

export default Ptext