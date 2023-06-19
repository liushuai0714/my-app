import React from "react"
class JSXBaseDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'xiaoambi',
            imgurl: '',
            flag: true,
            list:[
                {
                    id:'id-1',
                    title: '标题1'
                },
                {
                    id:'id-2',
                    title: '标题2'
                },
                {
                    id:'id-3',
                    title: '标题3'
                }
            ]
        }
    }
    render() {

        const styleData = { fontSize: '30px', color: 'blue' }

        // 原生 html
        const rawHtml = '<span>富文本内容<i>斜体</i><b>加粗</b></span>'
        const rawHtmlData = {
            __html: rawHtml  //注意必须是这种格式
        }
        
        return (
            <>
                {/* 表达式 */}
                <p>{this.state.flag ? 'Yes' : 'No'}</p>

                <p className='title'>设置css class</p>

                <p style={styleData}>设置 style</p>

                <p style={{ fontSize: '30px', color: 'blue' }}>设置 style</p>
                {/* 内联写法 */}
                <p style={{ fontSize: '30px', color: 'blue' }}>设置 style</p>

            <div>
                <p dangerouslySetInnerHTML={rawHtmlData}></p>
                <p>{rawHtml}</p>
            </div>
            <div>
                {this.state.list.map((item) => {
                    return <p key={item.id}>{item.title}</p>
                })}
            </div>
            </>
        )
    }
}

export default JSXBaseDemo