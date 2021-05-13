import React, { useEffect, useState, Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Link } from "react-router-dom";
import brand from '../kbrandvec.svg';
import '../App.css';
import DataTable from './dataTable';
import fire from './config/fire';
//import loadjs from 'loadjs';

export default class Books extends React.Component {
  constructor(props) {

    super(props);
    this.state = { booksCollection: [] };

  }

  componentDidMount() {
    Axios.get("http://localhost:8081/api/allbook")
      .then(res => {
        console.log(res);
        this.setState({ booksCollection: res.data.book });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  dataTable() {
    return this.state.booksCollection.map((data, i) => {
      return <DataTable obj={data} key={i} />
    });
  }
  render() {
    return (
      <div className="App">
        <div data-spy="scroll" data-target=".onpage-navigation" data-offset="60">
          <main>
            <div className="page-loader">
              <div className="loader">Loading...</div>
            </div>
            <nav className="navbar navbar-custom navbar-fixed-top navbar-transparent" role="navigation">
              <div className="container">
                <div className="navbar-header">
                  <a href="index.html"><img src={brand} style={{ height: 48 }} /></a>
                </div>
                <div className="navbar-header">
                  <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button><a className="navbar-brand" href="/">Kitab.com</a>
                </div>
                <div className="collapse navbar-collapse" id="custom-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown">Home</a>
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
                    </li>
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
                    <li className="dropdown">
                      <a><Link activeClassName="active" to={`/cart`}><i className="fa fa-shopping-cart" style={{ fontSize: "15px", opacity: "0.7", color: "white" }}></i></Link></a>
                    </li>
                    <li className="dropdown">
                      <a><button className="btn btn-round btn-xs btn-d" style={{ height: "3vh", paddingTop: "0.6px" }}>Logout</button></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="main">
              <section className="module bg-dark-60 shop-page-header" data-background="assets/images/shop/product-page-bg.jpg">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                      <h2 className="module-title font-alt">Shop Products</h2>
                      <div className="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="module-small">
                <div className="container">
                  <form className="row">
                    <div className="col-sm-4 mb-sm-20">
                      <select className="form-control">
                        <option selected="selected">Default Sorting</option>
                        <option>Popular</option>
                        <option>Latest</option>
                        <option>Average Price</option>
                        <option>High Price</option>
                        <option>Low Price</option>
                      </select>
                    </div>
                    <div className="col-sm-2 mb-sm-20">
                      <select className="form-control">
                        <option selected="selected">Woman</option>
                        <option>Man</option>
                      </select>
                    </div>
                    <div className="col-sm-3 mb-sm-20">
                      <select className="form-control">
                        <option selected="selected">All</option>
                        <option>Coats</option>
                        <option>Jackets</option>
                        <option>Dresses</option>
                        <option>Jumpsuits</option>
                        <option>Tops</option>
                        <option>Trousers</option>
                      </select>
                    </div>
                    <div className="col-sm-3">
                      <button className="btn btn-block btn-round btn-g" type="submit">Apply</button>
                    </div>
                  </form>
                </div>
              </section>
              <hr className="divider-w" />
              <section className="module-small">
                <div className="container">
                  <div className="row multi-columns-row">
                    {this.dataTable()}
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="pagination font-alt"><a href="#"><i className="fa fa-angle-left"></i></a><a className="active" href="#">1</a><a href="#">2</a><a href="#">3</a><a href="#">4</a><a href="#"><i className="fa fa-angle-right"></i></a></div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="module-small">
                <div className="container">
                  <div className="row client">
                    <div className="owl-carousel text-center" data-items="6" data-pagination="false" data-navigation="false">
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="client-logo"><img src="assets/images/shop/publishers/penguin-ra.png" alt="Penguin Random House" /></div>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="client-logo"><img src="assets/images/shop/publishers/hachette-livre.jpg" alt="Hachette Livre" /></div>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="client-logo"><img src="assets/images/shop/publishers/harper-collins.jpg" alt="Harper Collins" /></div>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="client-logo"><img src="assets/images/shop/publishers/mcmallin.jpg" alt="Macmillan" /></div>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="client-logo"><img src="assets/images/shop/publishers/simon-schuster.jpg" alt="Simon & Schuster" /></div>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="client-logo"><img src="assets/images/shop/publishers/mcgrawhill.jpg" alt="McGrawHill" /></div>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="client-logo"><img src="assets/images/shop/publishers/hmh.png" alt="Houghton Mifflin Harcourt" /></div>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="client-logo"><img src="assets/images/shop/publishers/pearson-education.png" alt="Pearson Education" /></div>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="client-logo"><img src="assets/images/shop/publishers/scholastic.jpg" alt="Scholastic" /></div>
                        </div>
                      </div>
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
                            <div className="widget-posts-image"><a href="#"><img src="assets/images/shop/haris.jpg" alt="Haris" /></a></div>
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
              <hr className="divider-d" />
              <footer className="footer bg-dark">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="copyright font-alt">&copy; 2021&nbsp;<Link to={`./`}>Kitab.com</Link>, All Rights Reserved</p>
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
