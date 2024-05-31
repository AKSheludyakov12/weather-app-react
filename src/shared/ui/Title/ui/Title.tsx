import cls from "./Title.module.scss"

const Title = ({children}) => { 

    
    return (
    <h1 className={cls.title}>
        {children}
    </h1>
    )

}

export default Title