import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import reportWebVitals from './reportWebVitals';
import Cart from './pages/cart';
import Register from './pages/register';
import ThankQ from './pages/thankQ';
import NotFound from './pages/notFound';
import Admin from './pages/adminOnly';
import Books from './pages/allBooks';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
const Routing=() => (
  <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/register-login" component={Register}/>
        <Route path="/order-placed" component={ThankQ}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/all-books" component={Books}/>
        <Route path="*" component={NotFound}/>
      </Switch>
  </Router>
);
ReactDOM.render(
  // <BrowserRouter>
  //   {/* <App /> */}
  //   <Route exact path="/" component={Home}/>
  //   <Route path="/register-login" component={Register}/>
  //   <Route path="/cart" component={Cart}/>
  //   <Route path="/order-placed" component={ThankQ}/>
  //   <Route path="/404" component={NotFound}/>
  //   <Route path="/admin" component={Admin}/>
  // </BrowserRouter>,
  <Routing/>,
  document.getElementById('root'))
