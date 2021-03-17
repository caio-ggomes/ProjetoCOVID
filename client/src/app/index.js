import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { ExamsList, ExamsInsert, ExamsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/exams/list" exact component={ExamsList} />
                <Route path="/exams/create" exact component={ExamsInsert} />
                <Route
                    path="/exams/update/:id"
                    exact
                    component={ExamsUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
