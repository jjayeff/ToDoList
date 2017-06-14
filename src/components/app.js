import React, { Component } from 'react'
import Add from './add2dolist'
import Todo from './add2dolist2'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
        this.add2list = this.add2list.bind(this)
    }
    add2list(text){
        this.setState({
            list: [
                ...this.state.list,
                text
            ]
        })
    }
    render(){
        console.log(this.state.list)
        return (
            <div>
                <Add add2list={this.add2list}/>
                <Todo list={this.state.list}/>
            </div>
        )
    }
}