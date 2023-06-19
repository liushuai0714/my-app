
import React from "react";
import _ from 'lodash'

class PureComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    id: 'id-1',
                    title: '标题1'
                },
                {
                    id: 'id-2',
                    title: '标题2'
                },
                {
                    id: 'id-3',
                    title: '标题3'
                },
            ],
            count: 0,
        }
    }
    onSubmitTitle = (title) => {
        this.setState({
            list: this.state.list.concat({
                id: `id-${Date.now()}`,
                title
            })
        })
    }
    handleOnClick = (count) => {
        this.setState({
            count
        })
    }
    handleChangeTitle1 = () =>{
        const listCopy = this.state.list
        listCopy[0].title = '新标题'
        this.setState({
            list: listCopy
        })
    }

    render() {
        return (
            <div>
                <Input onSubmitTitle={this.onSubmitTitle} />
                <List list={this.state.list} />
                <Count count={this.state.count} handleClick={this.handleOnClick} />
                <button onClick={this.handleChangeTitle1}>更改标题1</button>
            </div>
        )
    }
}

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleClick = () => {
        const { onSubmitTitle } = this.props
        onSubmitTitle(this.state.title)
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.title} onChange={this.onChangeTitle} />
                <button onClick={this.handleClick}>添加</button>
            </div>
        )
    }
}
//PureComponent只能进行浅比较 数组和对象无法比较
class List extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    componentDidUpdate() {
        console.log("hhhh");
    }
    render() {
        return (
            <ul>
                {this.props.list.map(item => {
                    return (
                        <li key={item.id}>{item.title}</li>
                    )
                })}
            </ul>
        )
    }
}

//函数式组件
// const List = (props) => {
//     console.log("ahahah");
//     return (
//         <ul>
//             {props.list.map(item => {
//                 return (
//                     <li key={item.id}>{item.title}</li>
//                 )
//             })}
//         </ul>
//     )
// }

// const areEqual = (prevProps, nextProps) => {
//     if(prevProps.list !== nextProps.list){
//         return false
//     }
//     return true
// }

// export default React.memo(List, areEqual);


class Count extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    componentDidUpdate() {
        console.log("count");
    }
    handleOnClick2 = () => {
        const { handleClick } = this.props
        handleClick(this.props.count + 1)
    }
    render() {
        return (
            <div>
                <p>{this.props.count}</p>
                <button onClick={this.handleOnClick2}>+1</button>
            </div>
        )
    }
}
export default PureComponent