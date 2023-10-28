import { useEffect, useState } from "react"
import themes from '../../../styles/themes'

export default useCheckMobileScreen = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.darkTheme)
  const [darkMode, setDarkMode] = useState(true)

  const handleThemeSwitch = () => {
    setDarkMode((was) => !was)
  }

  useEffect(() => {
    if (darkMode) {
      setCurrentTheme(themes.darkTheme)
    } else {
      setCurrentTheme(themes.lightTheme)
    }
  }, [darkMode])


  return currentTheme
}
