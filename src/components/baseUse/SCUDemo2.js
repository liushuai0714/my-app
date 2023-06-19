import React from "react";
import PropTypes from 'prop-types'
import _ from 'lodash'

class SCUDemo2 extends React.Component {
    constructor(props) {
        super(props)
        //状态（数据）提升
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
            count:0,
        }
    }

    onSubmitTitle = (title) => {
        //正确的用法
        this.setState({
            list: this.state.list.concat({
                id: `id-${Date.now()}`,
                title
            })
        })

        //为了演示SCU，故意写的错误用法
        // this.state.list.push({
        //     id: `id-${Date.now()}`,
        //         title
        // })
        // this.setState({
        //     list: this.state.list
        // })
    }

    handelClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <>
                <Input submitTitle={this.onSubmitTitle} />
                <List list={this.state.list} />
                <p>{this.state.count}</p>
                <button onClick={this.handelClick}>+1</button>
            </>
        )
    }
}

//input组件
class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
        }
    }
    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    onSubmit = () => {
        const { submitTitle } = this.props
        submitTitle(this.state.title)
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <>
                <input value={this.state.title} onChange={this.onTitleChange} />
                <button onClick={this.onSubmit}>添加</button>
            </>
        )
    }
}

//list组件
class List extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidUpdate(){
        console.log('ggggg');
    }
    render() {
        const { list } = this.props
        return (
            <ul>
                {list.map((item) => {
                    return <li key={item.id}>
                        {item.title}
                    </li>
                })}
            </ul>
        )
    }

    shouldComponentUpdate(nextProps, nextState){
        //_.isEqual 做对象或者数组的深度比较  (一次性递归到底)
        if(_.isEqual(nextProps.list, this.props.list)){
            //相等不重复渲染
            return false
        }
        
        return true
    }
}

// props 类型检查
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default SCUDemo2
