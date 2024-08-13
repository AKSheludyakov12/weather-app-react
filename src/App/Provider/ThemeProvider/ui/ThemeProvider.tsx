import React, {  FC, useMemo, useState } from "react"
import { Theme, ThemeContext } from "../lib/ThemeContext"
const defaultTheme = Theme.LIGHT

const ThemeProvider: FC<{children:React.ReactNode}> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme]
    )

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider
