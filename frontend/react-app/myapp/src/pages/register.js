import React,{ useEffect,useState,Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Link } from "react-router-dom";
import brand from '../kbrandvec.svg';
import '../App.css';
import fire from "./config/fire";

export default class Register extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = { usersCollection: [] };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
    
  }

  componentDidMount() {
    Axios.get("http://localhost:8081/api/book")
    .then(res => {
      console.log(res);
        this.setState({ usersCollection: res.data.book });
    })
    .catch(function (error) {
        console.log(error);
    })
  }



  login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
  }
  signup(e){
      e.preventDefault();
      fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
          console.log(u)
      }).catch((err)=>{
          console.log(err);
      })
  }
  handleChange(e){
      this.setState({
          [e.target.name] : e.target.value
      })
  }

  render() {
    return (
      <div className="App">
      <div data-spy="scroll" data-target=".onpage-navigation" data-offset="60">
        <main>
          <div className="page-loader">
            <div className="loader">Loading...</div>
          </div>
          <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <a href="index.html"><img src={brand} style={{ height: 48 }} /></a>
              </div>
              <div className="navbar-header">
                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button><Link className="navbar-brand" to={`./`}>Kitab.com</Link>
              </div>
              <div className="collapse navbar-collapse" id="custom-collapse">
                <ul className="nav navbar-nav navbar-right">
                {/* <li className="dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown">Home</a>
                      <ul className="dropdown-menu">
                        <li className="dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown">User</a>
                          <ul className="dropdown-menu">
                            <li><Link to={`./cart`}>Cart</Link></li>
                            <li><Link to={`./register-login`}>Login / Register</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown">Admin</a>
                          <ul className="dropdown-menu">
                            <li><Link to={`./admin`}>Add, Modify, Delete Book</Link></li>
                            <li><Link to={`./register-login`}>Login / Register</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li> */}
                    <li className="dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown">Genres</a>
                      <ul className="dropdown-menu">
                        <li className="dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown">Fiction</a>
                          <ul className="dropdown-menu">
                            <li><a href="#">Fantasy</a></li>
                            <li><a href="#">Epic Fantasy</a></li>
                            <li><a href="#">Science Fiction</a></li>
                            <li><a href="#">Sci-Fi Fantasy</a></li>
                            <li><a href="#">Dystopian</a></li>
                            <li><a href="#">Horror / Thriller</a></li>
                            <li><a href="#">Romance</a></li>
                            <li><a href="#">Contemporary</a></li>
                            <li><a href="#">Historical</a></li>
                          </ul>
                        </li>
                        <li className="dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown">Non-Fiction</a>
                          <ul className="dropdown-menu">
                            <li><a href="#">Self-Help</a></li>
                            <li><a href="#">Memoir / Biography</a></li>
                            <li><a href="#">Faith-Based</a></li>
                            <li><a href="#">Art</a></li>
                            <li><a href="#">History</a></li>
                            <li><a href="#">Health & Wellness</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">How-To / Guide Book</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown">Browse</a>
                      <ul className="dropdown-menu" role="menu">
                        <li><Link to={`./allBooks`}>All Books</Link></li>
                      </ul>
                    </li>
                    {/* <li className="dropdown">
                      <a><Link activeClassName="active" to={`/cart`}><i className="fa fa-shopping-cart" style={{ fontSize: "15px", opacity: "0.7", color: "white" }}></i></Link></a>
                    </li>
                    <li className="dropdown">
                      <a><button className="btn btn-round btn-xs btn-d" style={{ height: "3vh", paddingTop: "0.6px" }}>Logout</button></a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </nav>
            <div className="main">
                <section className="module bg-dark-30" data-background="assets/images/shop/register-login.jpg">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1 className="module-title font-alt mb-0">Login / Register</h1>
                    </div>
                    </div>
                </div>
                </section>
                <section className="module">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-5 col-sm-offset-1 mb-sm-40">
                        <h4 className="font-alt">Login</h4>
                        <hr className="divider-w mb-10"/>
                        <form className="form">
                        <div className="form-group">
                            <input className="form-control" id="email" type="email" name="email" placeholder="Email Address" onChange={this.handleChange} value={this.state.email}/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="password" type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
                        </div>
                        <div className="form-group">
                            {/* <button className="btn btn-round btn-b" onClick={this.login}>Login</button> */}
                            <Link className="btn btn-round btn-b" to={`./`}>Login</Link>
                        </div>
                        <div className="form-group"><a href="">Forgot Password?</a></div>
                        </form>
                    </div>
                    <div className="col-sm-5">
                        <h4 className="font-alt">Register</h4>
                        <hr className="divider-w mb-10"/>
                        <form className="form">
                        <div className="form-group">
                            <input className="form-control" id="email" type="email" name="email" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="password" type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="re-password" type="password" name="re-password" placeholder="Re-enter Password"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-block btn-round btn-b" onClick={this.signup}>Register</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </section>
                <div className="module-small bg-dark">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="widget">
                        <h5 className="widget-title font-alt">About Kitab.com</h5>
                        <p>21st Street, Istanbul, Turkey - 100001</p>
                        <p>Toll-Free: 1800-234-567</p>Customer Care: (+1)234-567-8910
                        <p>Email: <a href="#">customercare@kitab.com</a></p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="widget">
                        <h5 className="widget-title font-alt">Book Category</h5>
                        <ul className="icon-list">
                          <li><a href="#">History</a></li>
                          <li><a href="#">Horror-Thriller</a></li>
                          <li><a href="#">Love Stories</a></li>
                          <li><a href="#">Science Fiction</a></li>
                          <li><a href="#">Business</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="widget">
                        <h5 className="widget-title font-alt">Skill Books</h5>
                        <ul className="icon-list">
                          <li><a href="#">Astronomy</a></li>
                          <li><a href="#">Digital Marketing</a></li>
                          <li><a href="#">Software Development</a></li>
                          <li><a href="#">Ecommerce</a></li>
                          <li><a href="#">Art & Craft</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="widget">
                        <h5 className="widget-title font-alt">Founders</h5>
                        <ul className="widget-posts">
                          <li className="clearfix">
                            <div className="widget-posts-image"><a href="#"><img src="assets/images/shop/haris.jpg" alt="Haris"/></a></div>
                            <div className="widget-posts-body">
                              <div className="widget-posts-title"><a href="#">Haris Khan</a></div>
                              <div className="widget-posts-meta">CEO</div>
                            </div>
                          </li>
                          <li className="clearfix">
                            <div className="widget-posts-image"><a href="#"><img src="assets/images/shop/aaisha.jpg" alt="Aaisha"/></a></div>
                            <div className="widget-posts-body">
                              <div className="widget-posts-title"><a href="#">Aaisha Arafat</a></div>
                              <div className="widget-posts-meta">Co-Founder</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="divider-d"/>
              <footer className="footer bg-dark">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="copyright font-alt">&copy; 2021&nbsp;<Link to={ `./` }>Kitab.com</Link>, All Rights Reserved</p>
                    </div>
                    <div className="col-sm-6">
                      <div className="footer-social-links"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-dribbble"></i></a><a href="#"><i className="fa fa-skype"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
            <div className="scroll-up"><a href="#totop"><i className="fa fa-angle-double-up"></i></a></div>
          </main>
        </div>
      </div>
    );
  }
}