import { Button, ButtonTheme } from "../../../../shared/ui/Button/ui/Button"
import Ptext from "../../../../shared/ui/Ptext"
import right from "./right.svg"
import left from "./left.svg"
import cls from "./HeaderCurrent.module.scss"
import { useDispatch } from "react-redux"
import { daysSwitcherAction } from "../../../../App/Redux/slice/DaysSwitcher"
import ClassNames from "../../../../shared/lib/ClassNames"
interface HeaderCurrentProps {
    className?: string
    selectedDay: number,

    selectedDayText: string;
    onClickNextDay?: () => void
    onClickPrevDay?: () => void

}

export const HeaderCurrent = (props: HeaderCurrentProps)  => { 
const {
    selectedDayText,
    selectedDay,
    className,

        
}=props

const dispatch = useDispatch() 

    const onClickNextDay = () => {
      dispatch(daysSwitcherAction.setDaysSwitcherNext())
  }
  const onClickPrevDay = () => {
      dispatch(daysSwitcherAction.setDaysSwitcherPrev())
  }

    return(
<div className={ClassNames(cls.HeaderCurrent, {}, [className])}>
        {selectedDay == 0 ? <Button disabled theme={ButtonTheme.NON_VISIBLE} >{<img src={left}/>}</Button> :<Button onClick={onClickPrevDay}> {<img src={left}/>}</Button>}
        <Ptext classNames={cls.text}>
  {selectedDayText}
  </Ptext>
  {selectedDay >= 2 ? <Button disabled theme={ButtonTheme.NON_VISIBLE} onClick={onClickNextDay}>{<img src={right}/>}</Button> : <Button onClick={onClickNextDay}>{<img src={right}/>}</Button>
}
</div>
) 
    
}