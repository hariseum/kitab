import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Link } from "react-router-dom";
import brand from '../kbrandvec.svg';
import '../App.css';

function App() {
  const [delOrder, setOrder] = useState("");
  let comments = JSON.parse(localStorage.getItem('data'));
  var json = JSON.parse(localStorage["data"]);
  var total = 0
  for (let i = 0; i < json.length; i++) {
    total += parseInt(json[i].ori_price);
    if (json[i].BookName == delOrder) {
      console.log(total)
      json.splice(i, 1);
    }
  }

  localStorage["data"] = JSON.stringify(json);

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
            <section className="module">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-sm-offset-3">
                    <h1 className="module-title font-alt">Shopping Cart & Payment</h1>
                  </div>
                </div>
                <hr className="divider-w pt-20" />
                <div className="row">
                  <div className="col-sm-12">
                    <table className="table table-striped table-border checkout-table">
                      <tbody>
                        <tr>
                          <th className="hidden-xs">Book</th>
                          <th>Title</th>
                          <th>Author</th>
                          <th className="hidden-xs">Price</th>
                          {/* <th>Quantity</th> */}
                          {/* <th>Total</th> */}
                          <th>Remove</th>
                        </tr>
                        {comments.map((dat) => (
                          <tr>
                            <td className="hidden-xs">
                              <a href="#"><img src={dat.cover} alt={dat.title} /></a>
                            </td>
                            <td>
                              <h5 className="product-title font-alt">{dat.title}</h5>
                            </td>
                            <td>
                              <h5 className="product-title font-alt">{dat.author}</h5>
                            </td>
                            <td className="hidden-xs">
                              <h5 className="product-title font-alt">${dat.ori_price}.00</h5>
                            </td>
                            {/* <td>
                              <input className="form-control" type="number" onVolumeChangeCapture="" defaultValue="1" max="50" min="1" />
                            </td>
                            <td>
                              <h5 className="product-title font-alt">{dat.ori_price}</h5>
                            </td> */}
                            <td className="pr-remove">
                              <a href="#" title="Remove" onClick={(e) => { setOrder(e.target.value) }}><i className="fa fa-times"></i></a>
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td></td>
                          <td></td>
                          <td>Total</td>
                          <td>${total}.00</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="form-group">
                      <input className="form-control" type="text" id="" name="" placeholder="Coupon code" />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <button className="btn btn-round btn-g" type="submit">Apply</button>
                    </div>
                  </div>
                  <div className="col-sm-3 col-sm-offset-3">
                    <div className="form-group">
                      <button className="btn btn-block btn-round btn-d pull-right" type="submit">Update Cart</button>
                    </div>
                  </div>
                </div>
                <hr className="divider-w" />
                <div className="row mt-70">
                  <div className="container d-flex justify-content-center mt-5 mb-5">
                    <div className="row g-3">
                      <div className="col-md-6"> <h4 className="font-alt">Select Payment Method</h4>
                        <div className="card">
                          <div className="accordion" id="accordionExample">
                            <div className="card">
                              <div className="card-header p-0">
                                <h2 className="mb-0"> <button className="btn btn-light btn-block text-left p-3 rounded-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  <div className="d-flex align-items-center justify-content-between"> <span>Credit / Debit card</span>
                                    <div className="icons"> <img src="https://i.imgur.com/2ISgYja.png" width="30" /> <img src="https://i.imgur.com/W1vtnOV.png" width="30" /> <img src="https://i.imgur.com/35tC99g.png" width="30" /> <img src="https://i.imgur.com/2ISgYja.png" width="30" /> </div>
                                  </div>
                                </button> </h2>
                              </div>
                              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body payment-card-body"> <span className="font-weight-normal card-text">Card Number</span>
                                  <div className="input"> <i className="fa fa-credit-card"></i> <input type="text" className="form-control" placeholder="&#9747;&#9747;&#9747;&#9747; &#9747;&#9747;&#9747;&#9747; &#9747;&#9747;&#9747;&#9747; &#9747;&#9747;&#9747;&#9747;" /> </div>
                                  <div className="row mt-3 mb-3">
                                    <div className="col-md-6"> <span className="font-weight-normal card-text">Expiry Date</span>
                                      <div className="input"> <i className="fa fa-calendar"></i> <input type="text" className="form-control" placeholder="&#77;&#77;&#47;&#89;&#89;" /> </div>
                                    </div>
                                    <div className="col-md-6"> <span className="font-weight-normal card-text">CVC/CVV</span>
                                      <div className="input"> <i className="fa fa-lock"></i> <input type="text" className="form-control" placeholder="&#10033;&#10033;&#10033;" /> </div>
                                    </div>
                                  </div> <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header p-0" id="headingTwo">
                                <h2 className="mb-0"> <button className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  <div className="d-flex align-items-center justify-content-between"> <span>Paypal</span> <img src="https://i.imgur.com/7kQEsHU.png" width="30" /> </div>
                                </button> </h2>
                              </div>
                              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body"> <input type="text" className="form-control" placeholder="Paypal email" /> </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header p-0" id="headingFour">
                                <h2 className="mb-0"> <button className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                  <div className="d-flex align-items-center justify-content-between"> <span>UPI</span> <img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/upi.png" width="50" /> </div>
                                </button> </h2>
                              </div>
                              <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <div className="card-body"> <input type="text" className="form-control" placeholder="UPI ID" /> </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header p-0" id="headingThree">
                                <h2 className="mb-0"> <button className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                  <div className="d-flex align-items-center justify-content-between"> <span>Paytm</span> <img src="https://cdn.iconscout.com/icon/free/png-512/paytm-226448.png" width="40" /> </div>
                                </button> </h2>
                              </div>
                              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body"> <input type="text" className="form-control" placeholder="Paytm Linked Number" /> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6"> <h4 className="font-alt">Cart Totals</h4>
                        <div className="card">
                          <div>
                            <div className="shop-Cart-totalbox">

                              <table className="table table-striped table-border checkout-table">
                                <tbody>
                                  <tr>
                                    <th>Total Price</th>
                                    <td>${total}</td>
                                  </tr>
                                  <tr>
                                    <th>Coupon Applied</th>
                                    <td>'NEWB'</td>
                                  </tr>
                                  <tr>
                                    <th>Coupon Discount</th>
                                    <td>$10.00</td>
                                  </tr>
                                  <tr>
                                    <th>GST Added</th>
                                    <td>$3.00</td>
                                  </tr>
                                  <tr>
                                    <th>Shipping Charges</th>
                                    <td>$2.00</td>
                                  </tr>
                                  <tr className="shop-Cart-totalprice">
                                    <th>Cart Total</th>
                                    <td>${(total-5)}.00</td>
                                  </tr>
                                </tbody>
                              </table>
                              <Link to={`./order-placed`}><button className="btn btn-lg btn-block btn-round btn-danger">Click to Pay</button></Link>
                            </div>
                          </div>
                        </div>
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
                          <div className="widget-posts-image"><a href="#"><img src="assets/images/shop/aaisha.jpg" alt="Aaisha" /></a></div>
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
export default App;