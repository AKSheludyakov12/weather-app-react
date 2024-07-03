import { ReactNode } from "react"
import cls from "./ComponentWrapper.module.scss"

interface ComponentWrapperProps {
    children?: ReactNode
}

const ComponentWrapper = (props:ComponentWrapperProps) => {
    const {children} = props
return <div className={cls.wrapper}>
    {children}
</div>
}

export default ComponentWrapper