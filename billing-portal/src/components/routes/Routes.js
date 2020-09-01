import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../home/Home'
import Vendor from '../vendor/Vendor'
import Bills, {PanBills} from '../Pages/Bills'
//import PanBills from '../Pages/PanBills'


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/vendor" exact component={Vendor} />
                <Route path="/bills" exact component={Bills} />
                <Route path="/panbills" exact component={PanBills} />
                <Route path="/allbills" exact component={PanBills} />
            </Switch>
        </Router>
    )
}

export default Routes
