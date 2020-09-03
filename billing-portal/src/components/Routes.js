import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bills, {PanBills} from './Bills'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/bills" exact component={Bills} />
                <Route path="/panbills" exact component={PanBills} />
                <Route path="/allbills" exact component={PanBills} />
            </Switch>
        </Router>
    )
}

export default Routes
