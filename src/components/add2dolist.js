import React, { Component } from 'react'

export default class Add extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
        this.handleText = this.hendleText.bind(this)
        this.send = this.send.bind(this)
        this.keydown = this.keydown.bind(this)

    }
    keydown(event){
        if(event.keyCode !== 13 ){
            return 
        }
        event.preventDefault()
        this.props.add2list(this.state.text)
    }
    hendleText(event){
        this.setState({
            text: event.target.value
        })
    }
    send(){
        this.props.add2list(this.state.text)
    }
    
    render(){
        // console.log(this.state.text)
        return (
            <div>
                <input type="text" onChange={this.handleText} onKeyDown={this.keydown}/>
                <button onClick={this.send} >Add</button>
            </div>
        )
    }
}