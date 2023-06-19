import React from "react"
class EventDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'zhangsan',
            name2: 'lala',
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
                }
            ]
        }
        // 修改方法的this指向
        this.handleClick = this.handleClick.bind(this)
        // this.handleClick4 = this.handleClick4.bind(this)
    }

    handleClick() {
        this.setState({
            name: 'lisi'
        })
    }

    // 静态方法， this指向当前实例
    handleClick2 = () => {
        this.setState({
            name2: 'xiaoambi'
        })
    }
    //event
    handleClick3 = (event) => {
        event.preventDefault()  //阻止默认行为
        event.stopPropagation() //阻止冒泡
        console.log('target', event.target); //指向当前元素，即当前元素触发
        console.log('current target', event.currentTarget); //指向当前元素  假象！！
        //注意，event其实是react封装的，原型__proto__.contructor是SyntheticBaseEvent
        console.log('event', event); //不是原生的event, 原生的是MouseEvent
        console.log('event.__proto__.contructor', event.__proto__.constructor);

        //原生的event如下， 其__proto__.contructor是 MouseEvent 
        console.log('native event', event.nativeEvent.__proto__.__proto__);
    }

    handleClick4(id, title, event){
        console.log(id, title);
        console.log('event',event);
    }
    render() {
        return (
            <>
                <div onClick={this.handleClick}>{this.state.name}</div>

                <div onClick={this.handleClick2}>{this.state.name2}</div>

                <a href="https://baidu.com" onClick={this.handleClick3}>去百度</a>

                <ul>
                    {this.state.list.map((item) => {
                        return <li key={item.id} onClick={this.handleClick4.bind(this, item.id, item.title)} >{item.title}</li>
                    })}

                </ul>
            </>
        )
    }
}

export default EventDemo