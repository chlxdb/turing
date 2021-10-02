import React, { Component } from 'react'

export default class index extends Component {

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
                <h3>index页面</h3>
                <div onClick={this.goRouter('/login')}>Go Login</div>
            </div>
        )
    }
}

