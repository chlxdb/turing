import React from 'react'
import routes from './config' // 路由列表，有其他的路由列表页面可以继续引入
import RouterView from './router-view'  // 封装好的 Router
const routerList = [   // 将所有路由拼接在一起
    ...routes
]

const ViewRouter = () => {
    return (
        <div>
            <RouterView route={routerList} />
            {/* 调用封装好的 Router */}
        </div>
    )
}

export default ViewRouter
