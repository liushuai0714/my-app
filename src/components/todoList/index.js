import React from "react";

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
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
            ]
        }
    }

    onTextChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleOnClick = () => {
        this.setState({
            list: this.state.list.concat({
                id: `id-${Date.now()}`,
                title: this.state.title
            }),
            title: ''
        })
    }
    render() {
        return (
            <>
                <div>
                    <input type="text" value={this.state.title} onChange={this.onTextChange} />
                    <button onClick={this.handleOnClick}>添加</button>
                    <ul>
                        {this.state.list.map((item) => {
                            return <li key={item.id}>{item.title}</li>
                        })}
                    </ul>
                </div>
            </>
        )
    }
}

export default Index