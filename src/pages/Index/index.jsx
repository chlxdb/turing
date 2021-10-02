import React, { Component } from 'react'
import jpg from "./01.jpg"

export default class index extends Component {

    
    render () {
        return (
            <div>
                <h3>index页面</h3>
               <img src={jpg} alt="none"></img>
            </div>
        )
    }
}

