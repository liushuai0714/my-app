import { useContext } from "react"
import { ThemeContext } from "./ContextDemo2"
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

export default ThemeLink