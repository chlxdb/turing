import {
    Switch,
    Redirect,
    Route
} from "react-router-dom";
// 引入 react-router-dom
import { Suspense } from 'react' // Suspense 配合前面的 laze() 使用，不加上会报错

const RouterView = (props) => {
    let { route } = props // 拿到index.jsx页面传过来的 路由列表
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {/* 加载时的dom */}
            <Switch>
                {
                    route.map((item, index) => {
                        return item.component ? <Route key={index} path={item.path} render={(props) => {
                            return <item.component route={item.routes} {...props} />
                        }}></Route> : <Redirect key={index} from={item.path} to={item.redirect} /> // 找不到对应的路由时 全部去到404页面
                    })
                }
            </Switch>
        </Suspense>
    )
}

export default RouterView
