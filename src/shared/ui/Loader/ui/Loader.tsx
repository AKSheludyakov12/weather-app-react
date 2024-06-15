import ClassNames from "../../../lib/ClassNames"
import  "./Loader.scss"
interface LoaderProps { 
    classNames: string
}
export const Loader = ({classNames}: LoaderProps) => {
    return ( 
        <div className={ClassNames("loader", {}, [classNames])}>
            <span className="loader"></span>
        </div>
    )
}