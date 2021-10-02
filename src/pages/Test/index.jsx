import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import RouterView from '../../router/router-view'

export default class test extends Component {
    render() {
        let { route } = this.props
        return (
            <div>
                <br />
                这是测试页面
                <br />
                <br />
                <NavLink to="/test/demo">demo</NavLink>
                &nbsp;
                <NavLink to="/test/demo2">demo2</NavLink>
                <br />
                <br />
                <RouterView route={route} />
            </div>
        )
    }
}

