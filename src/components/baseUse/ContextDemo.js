// context的使用
import React, { useContext } from "react";

//创建Context 填入默认值（任何一个js变量）
const ThemeContext = React.createContext('light')

//底层组件 - 函数式组件
const ThemeLink = (props) => {
    // const theme = this.context //会报错。 函数式组件没有实例，即没有
    const value = useContext(ThemeContext)

    return (
        // <ThemeContext.Consumer>
        //     {value => <p>link's theme is {value}</p>}
        // </ThemeContext.Consumer>

        <div>
            link's theme is {value}
        </div>
    )
}

//底层组件 - class组件
class ThemedButton extends React.Component {
    //指定contextType读取当前的 theme context
    // static contextType = ThemeContext  es6语法也可以用ThemedButton.contextType
    render() {
        const theme = this.context //React 会往上找到最近的theme Provider
        return (
            <div>
                <p>button's theme is {theme}</p>
            </div>
        )
    }
}
ThemedButton.contextType = ThemeContext //指定contextType 读取当前的 theme context

class App2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'light'
        }
    }
    changeTheme = () => {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        })
    }
    render() {
        return (
            <>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar />
                    <hr />
                    <button onClick={this.changeTheme}>change theme</button>
                </ThemeContext.Provider>
            </>
        )
    }
}

const Toolbar = (props) => {
    return (
        <div>
            <ThemedButton />
            <ThemeLink />
        </div>
    )
}



export default App2