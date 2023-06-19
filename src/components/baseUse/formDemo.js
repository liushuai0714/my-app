import React from "react";
class FormDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'xiaomabi',
            info: '个人信息',
            city: "beijing",
            flag: true,
            gender: 'male'
        }
        this.nameInputRef = React.createRef()  //创建ref
        this.fileInputRef = React.createRef()
    }

    handleChange1 = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onTextareaChange = (e) => {
        this.setState({
            info: e.target.value
        })
    }

    onSelectChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    onCheckboxChange = () => {
        this.setState({
            flag: !this.state.flag
        })
    }

    onRadioChange = (e) => {
        this.setState({
            gender: e.target.value
        })
    }
    
    alertName = () => {
        const elem = this.nameInputRef.current //通过ref获取dom节点
        alert(elem.value) //不是this.state.name
    }
    alertFile = () => {
        const elem = this.fileInputRef.current
        alert(elem.files[0]?.name)
    }

    render() {
        return (
            <>
                {/* //受控组件  v-model */}
                <div>
                    <p>{this.state.name}</p>
                    <label htmlFor="inputName">姓名：</label>
                    <input id='inputName' value={this.state.name} onChange={this.handleChange1} />
                </div>

                
                {/* 非受控组件 */}
                <div>
                    {/* state不会随着改变 */}
                    <p>state.name:{this.state.name}</p>
                    {/* 使用defaultValue 而不是value, 使用ref */}
                    <input type="text" defaultValue={this.state.name} ref={this.nameInputRef} />

                    <br/>
                    <button onClick={this.alertName}>alert name</button>
                </div>
                <div>
                    <span>{this.state.flag.toString()}</span>
                    <input type="checkbox" defaultChecked={this.state.flag}/>
                </div>
                {/* 上传文件 */}
                <div>
                    <input type="file" ref={this.fileInputRef}/>
                    {/* dom节点上绑定ref */}
                    {/* constructor中创建ref  this.nameInputRef = React.createRef() */}
                    {/* 获取dom节点 this.fileInputRef.current */}
                    <button onClick={this.alertFile}>alert file</button>
                </div>
                {/* ------------------------------------------------------------------------- */}
                {/* textarea - 使用value */}
                <div>
                    <textarea value={this.state.info} onChange={this.onTextareaChange} />
                    <p>{this.state.info}</p>
                </div>

                {/* select - 使用value */}
                <div>
                    <select value={this.state.value} onChange={this.onSelectChange}>
                        <option value='beijing'>北京</option>
                        <option value='shanghai'>上海</option>
                        <option value='guangzhou'>广州</option>
                    </select>
                    <p>
                        {this.state.city}
                    </p>
                </div>
                <div>
                    <input type="checkbox" checked={this.state.flag} onChange={this.onCheckboxChange} />
                    <p>{this.state.flag.toString()}</p>
                </div>

                {/* radio */}
                <div>
                    <input type="radio" name="gender" value='male' checked={this.state.gender === 'male'} onChange={this.onRadioChange} />
                    <input type="radio" name="gender" value='female' checked={this.state.gender === 'female'} onChange={this.onRadioChange} />
                    <p>{this.state.gender}</p>
                </div>
            </>
        )
    }
}

export default FormDemo