import React from "react"
import ReactDOM from "react-dom"
import './style.css'
class ProtalsDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        //正常渲染
        // return (
        // <div className="modal">
        //     {this.props.children} {/*vue slot */}
        // </div>
        // )
        
        return ReactDOM.createPortal(
            // 使用Portals渲染到body上
            // fixed元素要放在body上，有更好的浏览器兼容性
            <div className="modal">{this.props.children}</div>, 
            document.body  //DOM 节点  放在body的第一层

        )    
    }
}

export default ProtalsDemo