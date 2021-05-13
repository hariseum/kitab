import React, { useEffect, useState, Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Link } from "react-router-dom";
import brand from '../kbrandvec.svg';
import '../App.css';
import DataTable from './dataTable';
import fire from './config/fire';
//import loadjs from 'loadjs';

export default class Home extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      inputValue: this.props.value,
      usersCollection: [],
      data: []
    };
  }

  handleChange = e => {
    console.log(e);
    this.setState({ inputValue: e.target.value });
  };

  componentDidMount() {
    //loadjs('../js/modernizr.js', () => {});
    Axios.get("http://localhost:8081/api/book")
      .then(res => {
        this.setState({ usersCollection: res.data.book });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  // dataTable()     {
  //   return this.state.usersCollection.map((data, i) => {
  //       if(i<8){return <DataTable obj={data} key={i} />;}
  //   });
  // }

  // dataSearch()     {
  //   return this.state.updatecollection.map((data, i) => {
  //       return <DataSearch obj={data} key={0} />;
  //   });
  // }

  // filterData(event) {
  //   this.setState({ searchData:event.target.value })
  // }
  // passData() {
  //   Axios.get(`http://localhost:8081/api/book/${this.state.searchData}`)
  //   .then(res => {
  //     this.props.updatecollection(res.data.book);
  //   });
  // }

  logout() {
    fire.auth().signOut();
  }

  addToCart(del) {
    this.setState({ data: [...this.state.data, del] })
    localStorage.setItem("data", JSON.stringify(this.state.data)); //store colors
  }

  render() {
    const { usersCollection } = this.state;
    const { inputValue } = this.state;
    console.log(usersCollection[0])
    const search = usersCollection.filter((data) => {
      if (inputValue == null) {
        return data
      } else if (data.title.toLowerCase().includes(inputValue.toLowerCase())) {
        return data
      }
    });
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
                    <li>
                      <form role="form">
                        <div className="dropdown-search">
                          <input className="form-control"
                            type="text"
                            placeholder="Search for Books"
                            name={this.props.name}
                            value={this.state.inputValue}
                            onChange={this.handleChange}>
                          </input>
                          {/* <button className="search-btn" type="submit" onClick={this.passData.bind(this)}><i className="fa fa-search"></i></button>
                        {this.dataSearch()} */}
                        </div>
                      </form>
                    </li>
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
                      <a><button className="btn btn-round btn-xs btn-d" style={{ height: "3vh", paddingTop: "0.6px" }} onClick={this.logout}>Logout</button></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <section className="home-section home-fade home-full-height" id="home">
              <div className="hero-slider">
                <ul className="slides">
                  <li className="bg-dark-30 bg-dark shop-page-header" style={{ backgroundImage: "url('assets/images/shop/slider-image-1.jpg')" }}>
                    <div className="titan-caption">
                      <div className="caption-content">
                        <div className="font-alt mb-30 titan-title-size-1">Flat 20% Off on</div>
                        <div className="font-alt mb-40 titan-title-size-4">Everything!</div>
                        <div className="font-alt mb-40 titan-title-size-1">For Newbies Only</div>
                        <a className="section-scroll btn btn-border-w btn-round" href="#latest">Use Coupon 'NewB'</a>
                      </div>
                    </div>
                  </li>
                  <li className="bg-dark-30 bg-dark shop-page-header" style={{ backgroundImage: "url('assets/images/shop/slider-image-2.jpg')" }}>
                    <div className="titan-caption">
                      <div className="caption-content">
                        <div className="font-alt mb-30 titan-title-size-1">Upto 60% Off on</div>
                        <div className="font-alt mb-30 titan-title-size-4">All Time Best Sellers</div>
                        <div className="font-alt mb-40 titan-title-size-1">Grab Your Favorite Books Now!</div>
                        <a className="section-scroll btn btn-border-w btn-round" href="#latest">Browse More</a>
                      </div>
                    </div>
                  </li>
                  <li className="bg-dark-30 bg-dark shop-page-header" style={{ backgroundImage: "url('assets/images/shop/slider-image-3.jpg')" }}>
                    <div className="titan-caption">
                      <div className="caption-content">
                        <div className="font-alt mb-30 titan-title-size-1">Do You Have What It Takes?</div>
                        <div className="font-alt mb-40 titan-title-size-4">One Book Per Week<br />Challenge</div>
                        <div className="font-alt mb-40 titan-title-size-1">Win Exciting Stuffs!</div>
                        <a className="section-scroll btn btn-border-w btn-round" href="#latest">Participate Now</a>
                      </div>
                    </div>
                  </li>
                  <li className="bg-dark-30 bg-dark shop-page-header" style={{ backgroundImage: "url('assets/images/shop/old-books.jpg')" }}>
                    <div className="titan-caption">
                      <div className="caption-content">
                        <div className="font-alt mb-30 titan-title-size-1">Become Religiously Rational</div>
                        <div className="font-alt mb-30 titan-title-size-4">Faith-Based Books</div>
                        <div className="font-alt mb-40 titan-title-size-1">Ready to Knock New Doors?</div>
                        <a className="section-scroll btn btn-border-w btn-round" href="#latest">Browse More</a>
                      </div>
                    </div>
                  </li>
                  <li className="bg-dark-30 bg-dark shop-page-header" style={{ backgroundImage: "url('assets/images/shop/book-shelf.jpg')" }}>
                    <div className="titan-caption">
                      <div className="caption-content">
                        <div className="font-alt mb-30 titan-title-size-1">Upto 10% Off on</div>
                        <div className="font-alt mb-30 titan-title-size-4">Latest Release</div>
                        <div className="font-alt mb-40 titan-title-size-1">Grab Fresh Ideas!</div>
                        <a className="section-scroll btn btn-border-w btn-round" href="#latest">Browse More</a>
                      </div>
                    </div>
                  </li>
                  <li className="bg-dark-30 bg-dark shop-page-header" style={{ backgroundImage: "url('assets/images/shop/glass-shelf.jpg')" }}>
                    <div className="titan-caption">
                      <div className="caption-content">
                        <div className="font-alt mb-30 titan-title-size-1">Buy 1 Get 1 Free on</div>
                        <div className="font-alt mb-30 titan-title-size-4">All Histotical Books</div>
                        <div className="font-alt mb-40 titan-title-size-1">Dig Deeper</div>
                        <a className="section-scroll btn btn-border-w btn-round" href="#latest">Browse More</a>
                      </div>
                    </div>
                  </li>
                  <li className="bg-dark-30 bg-dark shop-page-header" style={{ backgroundImage: "url('assets/images/shop/book-quote-4.jpg')" }}>
                    <div className="titan-caption">
                      <div className="caption-content">
                        <div className="font-alt mb-30 titan-title-size-1"></div>
                        <div className="font-alt mb-30 titan-title-size-4"><img src={brand} style={{ height: 360 }} /></div>
                        <div className="font-alt mb-40 titan-title-size-4"></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <div className="main">
              <section className="module-small">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                      <h2 className="module-title font-alt">Best Selling Books Ever</h2>
                    </div>
                  </div>
                  <div className="row multi-columns-row">
                    <ul className="book-row">
                      {search.map((user) => (
                        <div>
                          <li className="col-sm-6 col-md-3 col-lg-3">
                            <div className="shop-item">
                              <div className="shop-item-image"><img src={user.cover} style={{ height: 350 }} />
                                <div className="shop-item-detail"><a className="btn btn-round btn-b" onClick={() => this.addToCart(user)}><span className="icon-basket">Add To Cart</span></a></div>
                              </div>
                              <h4 className="shop-item-title font-alt"><a href="#">{user.title}</a></h4>${user.dis_price}.00
                            </div>
                          </li>
                        </div>))}
                    </ul>
                  </div>
                  <div className="row mt-30">
                    <div className="col-sm-12 align-center"><a className="btn btn-b btn-round" href="#">More books</a></div>
                  </div>
                </div>
              </section>
              <section className="module module-video bg-dark-30" data-background="assets/images/shop/book-quote.jpg">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                      <h2 className="module-title font-alt mb-0">"If you don't like to read, you haven't found the right book."<br /><br />~ J.K. Rowling</h2>
                    </div>
                  </div>
                </div>
                {/*<div className="video-player" data-property="{videoURL:'', containment:'.module-video', startAt:0, mute:true, autoPlay:true, loop:true, opacity:1, showControls:false, showYTLogo:false, vol:25}"></div>*/}
              </section>
              <section className="module">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                      <h2 className="module-title font-alt">Famous Authors</h2>
                      <div className="module-subtitle font-serif">"We write to taste life twice, in the moment and in retrospect."</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="owl-carousel text-center" data-items="5" data-pagination="false" data-navigation="false">
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="ex-product"><a href="#"><img src="assets/images/shop/authors/james-clear.jpg" alt="James Clear" /></a>
                            <h4 className="shop-item-title font-alt"><a href="#">James Clear</a></h4>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="ex-product"><a href="#"><img src="assets/images/shop//authors/mark-manson.jpg" alt="Mark Manson" /></a>
                            <h4 className="shop-item-title font-alt"><a href="#">Mark Manson</a></h4>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="ex-product"><a href="#"><img src="assets/images/shop/authors/dale-carnegie.jpeg" alt="Dale Carnegie" /></a>
                            <h4 className="shop-item-title font-alt"><a href="#">Dale Carnegie</a></h4>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="ex-product"><a href="#"><img src="assets/images/shop/authors/chetan-bhagat.jpg" alt="Chetan Bhagat" /></a>
                            <h4 className="shop-item-title font-alt"><a href="#">Chetan Bhagat</a></h4>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="ex-product"><a href="#"><img src="assets/images/shop/authors/stephen-king.jpeg" alt="Stephen King" /></a>
                            <h4 className="shop-item-title font-alt"><a href="#">Stephen King</a></h4>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="col-sm-12">
                          <div className="ex-product"><a href="#"><img src="assets/images/shop/authors/jk-rowling.jpg" alt="J.K. Rowling" /></a>
                            <h4 className="shop-item-title font-alt"><a href="#">J.K. Rowling</a></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <hr className="divider-w" />
              <section className="module" id="news">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                      <h2 className="module-title font-alt">Offers & News</h2><p className="module-subtitle font-serif">You Just Don't Wanna Miss!</p>
                    </div>
                  </div>
                  <div className="row multi-columns-row post-columns wo-border">
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="post mb-40">
                        <div className="post-header font-alt">
                          <h2 className="post-title"><a href="#">Latest Release Collection</a></h2>
                        </div>
                        <div className="post-entry">
                          <p>Check out our collection of latest released books that you will find nowhere else and still lowest price guaranteed.</p>
                        </div>
                        <div className="post-more"><a className="more-link" href="#">Check more</a></div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="post mb-40">
                        <div className="post-header font-alt">
                          <h2 className="post-title"><a href="#">Sale of Summer Season</a></h2>
                        </div>
                        <div className="post-entry">
                          <p>All the last summer released book in half prices, you just can not find an offer like that. Hurry Book-Freaks, limited stock only.</p>
                        </div>
                        <div className="post-more"><a className="more-link" href="#">Shop now</a></div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="post mb-40">
                        <div className="post-header font-alt">
                          <h2 className="post-title"><a href="#">News on latest stationary release</a></h2>
                        </div>
                        <div className="post-entry">
                          <p>We are offering something very new to our beloved customers, a stationary like no other. Including Planners, Journals...</p>
                        </div>
                        <div className="post-more"><a className="more-link" href="#">Read more</a></div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="post mb-40">
                        <div className="post-header font-alt">
                          <h2 className="post-title"><a href="#">"Signed & Sealed, Directly from Author"</a></h2>
                        </div>
                        <div className="post-entry">
                          <p>Get yourself and your loved ones with books signed by your favorite authors on demand. Who does that for you?</p>
                        </div>
                        <div className="post-more"><a className="more-link" href="#">Find out how</a></div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="post mb-40">
                        <div className="post-header font-alt">
                          <h2 className="post-title"><a href="#">Earn badges and enable discounts</a></h2>
                        </div>
                        <div className="post-entry">
                          <p>Have you ever read books and earned for it? Don't bother, we'll assist you, earn badges and enabled discounts on other books.</p>
                        </div>
                        <div className="post-more"><a className="more-link" href="#">Check badges</a></div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="post mb-40">
                        <div className="post-header font-alt">
                          <h2 className="post-title"><a href="#">Resell old books</a></h2>
                        </div>
                        <div className="post-entry">
                          <p>We buy old books too. Fill the form for you old book, we will pick it up and you can buy books in exchange of old ones.</p>
                        </div>
                        <div className="post-more"><a className="more-link" href="#">Exchange now</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <hr className="divider-w" />
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
