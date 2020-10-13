import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Routes } from './Routes';

export default class App extends Component {
    get path() {
        return this.props.path;
    }

    render() {
        return (
            <Router>
                <Switch>
                    {Routes.map(item => (
                        <Route path={item.path} key={item.key} component={item.component}></Route>
                    ))}
                </Switch>
            </Router>
        );
    }
}
