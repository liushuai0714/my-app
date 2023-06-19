// context的使用
import { useState, createContext } from "react";
import Toolbar from './Toolbar'

export const ThemeContext = createContext()

const App2 = () => {

    const [theme, setTheme] = useState('light')

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <Toolbar />
                <hr />
                <button onClick={changeTheme}>change theme</button>
            </ThemeContext.Provider>
        </>
    )
}

export default App2