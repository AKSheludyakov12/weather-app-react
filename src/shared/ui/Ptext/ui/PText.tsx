import { FC, ReactNode } from "react"
import cls from "./Ptext.module.scss"
import ClassNames from "../../../lib/ClassNames"

interface props {
    children?:React.ReactNode 
    classNames?: string
}

const Ptext:FC<props> = (props) => {
const {
    children,
    classNames
} = props

    return (
    <p className={ClassNames(cls.p, {}, [classNames])}>
        {children}
    </p>
    )
}

export default Ptext