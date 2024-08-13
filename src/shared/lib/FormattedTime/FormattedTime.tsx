export const FormatedTime = (time:string) => {
    const nowTime  = new Date(time)
    const nowHour = nowTime.getHours()
    const nowMinutes = nowTime.getHours()
    const formatMinutes =  nowMinutes.toString().length < 2 ? `0${nowMinutes}` :  nowMinutes
    const formatHour =  nowHour.toString().length < 2 ? `0${nowHour}` :  nowHour
return `${formatMinutes}:${formatHour}`
}