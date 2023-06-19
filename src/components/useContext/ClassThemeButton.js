import React from "react"
import { ThemeContext } from "./ContextDemo2"

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

export default ThemedButton