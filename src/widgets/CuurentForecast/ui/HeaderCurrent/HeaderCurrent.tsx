import { Button, ButtonTheme } from "../../../../shared/ui/Button/ui/Button"
import Ptext from "../../../../shared/ui/Ptext"
import right from "./right.svg"
import left from "./left.svg"
import cls from "./HeaderCurrent.module.scss"
interface HeaderCurrentProps {
    day: number,
    selctedDay: string;
    onClickNextDay: () => void
    onClickPrevDay: () => void

}

export const HeaderCurrent = (props: HeaderCurrentProps)  => { 
const {
    day,
    selctedDay,
    onClickPrevDay,
    onClickNextDay
        
}=props
    return(
<div className={cls.HeaderCurrent}>
        {day == 0 ? <Button disabled theme={ButtonTheme.NON_VISIBLE} >{<img src={left}/>}</Button> :<Button onClick={onClickPrevDay}>{<img src={left}/>}</Button>}
        <Ptext>
  {selctedDay}
  </Ptext>
  {day >= 2 ? <Button disabled theme={ButtonTheme.NON_VISIBLE} onClick={onClickNextDay}>{<img src={right}/>}</Button> : <Button onClick={onClickNextDay}>{<img src={right}/>}</Button>
}
</div>
) 
    
}