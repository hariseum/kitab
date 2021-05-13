import React,{ useEffect,useState,Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Link } from "react-router-dom";
import brand from '../kbrandvec.svg';
import '../App.css';


class Admin extends Component {
  state = {
    isbn: "",
    cover: "",
    title: "",
    author: "",
    publish_date: "",
    publisher: "",
    genre: "",
    rating: "",
    reviews: "",
    ori_price: "",
    dis_price: "",
    id: ""
  };


  onIsbnChange = e => {
    this.setState({
      isbn: e.target.value
    });
  };
  onCoverChange = e => {
    this.setState({
      cover: e.target.value
    });
  };
  onTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  onAuthorChange = e => {
    this.setState({
      author: e.target.value
    });
  };
  onDateChange = e => {
    this.setState({
      publish_date: e.target.value
    });
  };
  onPublisherChange = e => {
    this.setState({
      publisher: e.target.value
    });
  };
  onGenreChange = e => {
    this.setState({
      genre: e.target.value
    });
  };
  onRatingChange = e => {
    this.setState({
      rating: e.target.value
    });
  };
  onReviewsChange = e => {
    this.setState({
      reviews: e.target.value
    });
  };
  onOriChange = e => {
    this.setState({
      ori_price: e.target.value
    });
  };
  onDisChange = e => {
    this.setState({
      dis_price: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const data = {
        isbn: this.state.isbn,
        cover: this.state.cover,
        title: this.state.title,
        author: this.state.author,
        publish_date: this.state.publish_date,
        publisher: this.state.publisher,
        genre: this.state.genre,
        rating: this.state.rating,
        reviews: this.state.reviews,
        ori_price: this.state.ori_price,
        dis_price: this.state.dis_price
    };

    Axios
      .post("http://localhost:8081/api/book", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    };

    

    onIdChange = f => {
    this.setState({
        id: f.target.value
    });
    };

    handleDelete = f => {
        f.preventDefault();

        Axios
            .delete(`http://localhost:8081/api/deleteBook/${this.state.id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        };

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
                  <a href="index.html"><img src={brand} style={{ height:48 }}/></a>
                </div>
                <div className="navbar-header">
                  <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button><Link className="navbar-brand" to={ `./` }>Kitab.com</Link>
                </div>
                <div className="collapse navbar-collapse" id="custom-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                      <a><button className="btn btn-round btn-xs btn-d" style={{height:"3vh",paddingTop:"0.6px"}}>Logout</button></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="main">
                <section className="module bg-dark-30" data-background="assets/images/shop/admin-dashboard.jpg">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1 className="module-title font-alt mb-0">Admin Dashboard</h1>
                    </div>
                    </div>
                </div>
                </section>
                <section className="module">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-5 col-sm-offset-1 mb-sm-40">
                        <h4 className="font-alt">Add Book in DataBase</h4>
                        <hr className="divider-w mb-10"/>
                        <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="ISBN" onChange={this.onIsbnChange} required/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Cover URL" onChange={this.onCoverChange} required/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Title" onChange={this.onTitleChange} required/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Author" onChange={this.onAuthorChange} required/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Published Date" onChange={this.onDateChange} required/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Publisher" onChange={this.onPublisherChange} required/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Genre" onChange={this.onGenreChange} required/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Rating" onChange={this.onRatingChange} required/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Number of Reviews" onChange={this.onReviewsChange} required/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Original MRP" onChange={this.onOriChange} required/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Discounted Price" onChange={this.onDisChange} required/>
                        </div>
                        <div className="form-group">
                        <button className="btn btn-block btn-round btn-b" type="submit">Add Book</button>
                        </div>
                        </form>
                    </div>
                    <div className="col-sm-5">
                        <h4 className="font-alt">Modify Book in DataBase</h4>
                        <hr className="divider-w mb-10"/>
                        <form className="form">
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="ISBN"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Cover URL"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Title"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Author"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Published Date"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Publisher"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Genre"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Rating"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Number of Reviews"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Original MRP"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="" type="" name="" placeholder="Discounted Price"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-block btn-round btn-b">Modify Book</button>
                        </div>
                        </form>
                    </div>
                    </div>
                    <hr className="divider-w"/>
                    <div className="row">
                    <div className="col-sm-6 col-sm-offset-3 mb-sm-40 row mt-80 row g-1">
                        <h4 className="font-alt" style={{textAlign:"center"}}>Delete Book From DataBase</h4>
                        <hr className="divider-w mb-10"/>
                        <form className="form" onSubmit={this.handleDelete}>
                        <div className="form-group">
                            <input className="form-control" id="" type="text" name="" placeholder="Book ID" onChange={this.onIdChange} required/>
                        </div>
                        <div className="form-group">
                        <button className="btn btn-round btn-danger col-sm-6 col-sm-offset-3" type="submit">Delete Book</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </section>
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

export default Admin;
