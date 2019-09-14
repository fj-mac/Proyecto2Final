import React from "react";
import ReactDom from "react-dom";

import App from "./App.js";
import TopMenu from "./TopMenu.js";


ReactDom.render(
  <div>
    <TopMenu/>
    <div className="container">
      <App/>
    </div>
  </div>
  ,
  document.getElementById('root'));
