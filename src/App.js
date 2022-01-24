import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Chart from "./Chart";
import NewProduct from "./NewProduct";

export default function App() {
 const[tabName, setTabName] = useState('new product');
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className={tabName === 'new product' ? 'active' : 'in-active'}>
            <Link to="/" onClick={() => setTabName("new product")}>New Product</Link>
          </li>
          <li className={tabName === 'chart' ? 'active' : 'in-active'}>
            <Link to="/chart" onClick={() => setTabName("chart")}>Chart</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <NewProduct />
        </Route>
        <Route path="/chart">
          <Chart />
        </Route>
      </Switch>
    </div>
  );
}
