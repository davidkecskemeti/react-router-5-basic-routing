import React, {Component} from "react";
import { Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsComponent from "./components/ProductsComponent";

export default function App() {
    return (
        <>
            <HeaderComponent/>
            <Route exact path="/" component={HomeComponent}/>
            <Route path="/products" component={ProductsComponent}/>
        </>

    );
}