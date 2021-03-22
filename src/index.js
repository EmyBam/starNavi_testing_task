import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.css";
import App from "./components/App/App";

ReactDom.render(
    <App/>
    , document.getElementById('root')
);