import { Button, ButtonTheme } from "../../../../shared/ui/Button/ui/Button"
import Ptext from "../../../../shared/ui/Ptext"
import right from "../../../../../public/icon/nav/right.svg"
import left from "../../../../../public/icon/nav/left.svg"
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
        {selectedDay == 0 ? <Button disabled theme={ButtonTheme.NON_VISIBLE} >{<img src={`https://raw.githubusercontent.com/AKSheludyakov12/weather-app-react/6163e85b9823a72b1d83ab386346b9fc837438d4/public/icon/nav/left.svg`}/>}</Button> :<Button onClick={onClickPrevDay}> {<img src={left}/>}</Button>}
        <Ptext classNames={cls.text}>
  {selectedDayText}
  </Ptext>
  {selectedDay >= 2 ? <Button disabled theme={ButtonTheme.NON_VISIBLE} onClick={onClickNextDay}>{<img src={`https://raw.githubusercontent.com/AKSheludyakov12/weather-app-react/6163e85b9823a72b1d83ab386346b9fc837438d4/public/icon/nav/right.svg`}/>}</Button> : <Button onClick={onClickNextDay}>{<img src={right}/>}</Button>
}
</div>
) 
    
}