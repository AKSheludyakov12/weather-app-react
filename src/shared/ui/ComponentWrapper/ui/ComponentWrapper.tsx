import cls from "./ComponentWrapper.module.scss"

const ComponentWrapper = ({children}) => {
return <div className={cls.wrapper}>
    {children}
</div>
}

export default ComponentWrapper