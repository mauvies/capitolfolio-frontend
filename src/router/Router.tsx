import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../views/Home'
import Register from '../views/Register'

function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
        </Switch>
    )
}

export default Router
