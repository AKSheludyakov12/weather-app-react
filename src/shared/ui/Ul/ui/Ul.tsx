import { ReactNode } from 'react'
import ClassNames from '../../../lib/ClassNames'
import cls from './Ul.module.scss'

interface UlProps { 
    className?: string
    children:ReactNode
}


const Ul = ({className,children}:UlProps) => {
    return ( 
        <ul className={ClassNames(cls.ul, {}, [className])}>
            {children}
        </ul>
    )
}

export default Ul