import React from "react";
import PropTypes from 'prop-types'

class Index2 extends React.Component {
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
            footerInfo:"底部文字"
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
    render() {
        return (
            <>
                <Input submitTitle={this.onSubmitTitle} />
                <List list={this.state.list} />
                <Footer text={this.state.footerInfo} length={this.state.list.length}/>
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
}

// props 类型检查
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <p>{this.props.text}</p>                
                <p>{this.props.length}</p>                
            </div>
        )
    }
    componentDidUpdate(){
        console.log('footer');
    }
    
    //react 默认：父组件有更新，子组件也随之更新
    //性能优化对于React更加重要
    //scu一定要每次都用吗？ ---需要的时候才优化

    // shouldComponentUpdate(){
    //     return true //默认返回true
    // }
    shouldComponentUpdate(nextProps, nextState){
        // 判断如果nextProps和props中的值不相同才重新渲染
        if(nextProps.text !== this.props.text || nextProps.length !== this.props.length){
            return true //可以渲染
        }
        return false //不重复渲染
    }
}

export default Index2
