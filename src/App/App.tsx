import './style/index.scss';
import MainPage from '../pages/MainPage/ui/Main';
import { useTheme } from './Provider/ThemeProvider/lib/useTheme';
import { useSelector } from 'react-redux';
import { StateSchema } from './Redux/Config/StateSchema';


const App = () => {

  const {weatherData} = useSelector((state:StateSchema)=>state.weatherData)

  const { theme } = useTheme(weatherData.location.localtime )
  console.log(theme)

  return (

    <div className={theme}>    
       <MainPage/>
    </div>
  )
}
export default App