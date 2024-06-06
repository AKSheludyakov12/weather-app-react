export const FormatedDate = (data) => {
    const date = new Date(data)
   const thisDay = date.toDateString().slice(0, 3)
   const thisMonth = date.toDateString().slice(4,7)
   const daysWeek = {
     "Mon": "Понедельник",
     "Tue": "Вторник", 
     "Wed": "Среда", 
     "Thu": "Четверг", 
     "Fri": "Пятница", 
     "Sat": "Суббота", 
     "Sun": "Воскресенье"
   }
   const months = {
     "Jan": "января",
     "Feb": "февраля",
     "Mar": "марта",
     "Apr": "апреля",
     "May": "мая",
     "Jun": "июня",
     "Jul": "июля",
     "Aug": "августа",
     "Sep": "сентября",
     "Oct": "октября",
     "Nov": "ноября", 
     "Dec": "декабря"
   }
     return `${daysWeek[thisDay]}, ${date.getDate()} ${months[thisMonth]}`
   }