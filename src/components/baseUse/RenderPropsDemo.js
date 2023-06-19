
import React from "react";
import PropTypes from 'prop-types'

class Mouse extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            x: 0,
            y: 0,
        }
    }

    handleMouseMove = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    render(){
        return(
            <div style={{height: "500px"}} onMouseMove={this.handleMouseMove}>
                {/* 将当前state作为props，传递给render（render是一个函数组件） */}
                {this.props.render(this.state)}
            </div>
        )
    }
}

Mouse.propTypes = {
    render: PropTypes.func.isRequired //必须接受一个render属性 而且是函数
}

const App5 = (props) => (
    <div style={{height:'500px'}}>
        <p>{props.a}</p>
        <Mouse render={
            ({ x, y }) => <h1>The mouse position is ({x}, {y})</h1>
            }/>
    </div>
)

export default App5

