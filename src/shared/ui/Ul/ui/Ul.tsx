import cls from './Ul.module.scss'

const Ul = ({children} ) => {
    return ( 
        <ul className={cls.ul}>
            {children}
        </ul>
    )
}

export default Ul