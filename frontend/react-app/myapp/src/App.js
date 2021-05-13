import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
// import { Router, Route,Switch, Link } from "react-router-dom";
import Home from './pages/home';
import { BrowserRouter, Route, Link,Router } from "react-router-dom";
import Cart from './pages/cart';
import Register from './pages/register';
import ThankQ from './pages/thankQ';
import NotFound from './pages/notFound';
import React, { Component } from 'react';
import fire from './pages/config/fire';
import Admin from './pages/adminOnly';
import Books from './pages/allBooks';


export default class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (
      // <div>
      //   {this.state.user ? (<Home/>) : (<Register/>)}
      // </div>
      <Home />,
      <Cart/>,
      <Register/>,
      <ThankQ/>,
      <NotFound/>,
      <Admin/>,
      <Books/>
    );
  }
}


