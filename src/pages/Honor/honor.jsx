import React, { Component } from 'react'

export default class honor extends Component {

    goRouter = (path) => {
        return () => {
            this.props.history.push({
                pathname: path,
                state: null
            })
        }
    }

    render() {
        return (
            <div>
                <h3>HHHHHOR页面</h3>
                
            </div>
        )
    }
}

