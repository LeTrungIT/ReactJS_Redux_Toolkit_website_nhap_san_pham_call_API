import './App.css';
import React, { Fragment } from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
    const showMenuContent = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route key={index} path={route.path} element={route.component} />;
            });
        }
        return <Routes>{result}</Routes>;
    };
    return (
        <Fragment>
            <Router>
                <Header />
                <Menu />
                <div className="container">{showMenuContent(routes)};</div>
            </Router>
        </Fragment>
    );
}

export default App;
