import React from "react";

class StateDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            list1: [1, 2, 3, 4],
            list2: [1, 2, 3, 4, 5],
            list3: [1, 2, 3, 4, 5, 6],
            list4: [1, 2, 3, 4, 5, 6, 7],
            list5: ['a', 'b', 'c'],
            obj1: { b: 2 },
            obj2: { b: 2, c: 3 }
        }
    }

    handleOnClick = () => {
        // count: this.state.count++  错误  不能直接修改
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log('count', this.state.count); //异步的  拿不到最新值

        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     // 联想 vue $nextTick
        //     console.log('count by callback', this.state.count)
        // }) //回调函数 拿到渲染完成后的最新值

        // setTimeout中 setState是同步的 react18之前
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            },
                () => {
                    console.log('count', this.state.count);
                }
            )
            // console.log(this.state.count)

        }, 0);

        //传入对象会被合并， 执行结果只一次 +1
        // this.setState({
        //     count: this.state.count + 1
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })

        //传入函数，不会被合并。执行结果是 +3
        // this.setState((prevState, props) => {
        //     return {count: prevState.count + 1}
        // })
        // this.setState((prevState, props) => {
        //     return {count: prevState.count + 1}
        // })
        // this.setState((prevState, props) => {
        //     return {count: prevState.count + 1}
        // })
    }

    // bodyClickHandle = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     }, () => {
    //         console.log('count in body event', this.state.count);
    //     })

    // }

    // componentDidMount() {
    //     //自己定义的dom事件， setState是同步的 react18之前是
    //     document.body.addEventListener('click', this.bodyClickHandle)
    // }

    // //及时销毁自定义DOM事件
    // componentWillUnmount() {
    //     document.body.removeEventListener('click', this.bodyClickHandle)
    // }

    // handleOnClick2 = () => {
    //     //不可变值
    //     const list5Copy = this.state.list5.slice() //复制数组
    //     list5Copy.splice(2, 0, 'a'); //第二个后面插入‘a’
    //     console.log(list5Copy);
    //     this.setState({
    //         list1: this.state.list1.concat(100), //追加
    //         list2: [...this.state.list2, 100], //追加
    //         list3: this.state.list3.slice(0, 3), //截取
    //         list4: this.state.list4.filter(item => item > 5), //筛选
    //         list5: list5Copy //其他操作
    //     })
    //     console.log(this.state.list1);
    //     console.log(this.state.list2);
    //     console.log(this.state.list3);
    //     console.log(this.state.list4);

    // }
    // handleOnClick3 = () => {
    //     this.setState({
    //         obj1: Object.assign({}, this.state.obj1, { a: 100 }), //添加属性
    //         obj2: { ...this.state.obj2, a: 100 }
    //     })
    //     console.log(this.state.obj1);
    //     console.log(this.state.obj2);
    // }

    render() {

        return (
            <>
                <p>{this.state.count}</p>
                <button onClick={this.handleOnClick}>累加</button>
                <button onClick={this.handleOnClick2}>插入</button>
                <button onClick={this.handleOnClick3}>赋值</button>
            </>
        )
    }
}

export default StateDemo