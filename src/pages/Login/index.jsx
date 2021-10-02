import React, { Component } from 'react'

export default class login extends Component {

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
                <h3>login页面</h3>
                <div onClick={this.goRouter('/index')}>Go Index</div>
            </div>
        )
    }
}

