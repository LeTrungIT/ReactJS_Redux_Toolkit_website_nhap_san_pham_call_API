import "./App.css";
import React, { Fragment } from "react";
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const showMenuContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} element={route.main} />;
      });
    }
    return <Routes>{result}</Routes>;
  };
  return (
    <Fragment>
      <Header />
      <Menu />
      <div className="container">{showMenuContent(routes)};</div>
    </Fragment>
  );
}

export default App;
