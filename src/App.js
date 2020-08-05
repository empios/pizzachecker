import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Main} from "./Main";
import {MainImage} from "./MainImage"
import CheckPizza from "./CheckPizza";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Main/>
                        <MainImage/>
                    </Route>

                    <Route exact path="/checkpizza">
                        <CheckPizza/>
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>

    );
}

export default App;
