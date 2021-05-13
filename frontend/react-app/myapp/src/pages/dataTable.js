import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from "axios";
import Home from './home';
import Cart from './cart';
import Book from './allBooks';

class DataTable extends Component {

  render() {
    return (
      <div className="col-sm-6 col-md-3 col-lg-3">
        <div className="shop-item">
          <div className="shop-item-image">
            <img src={this.props.obj.cover} alt={this.props.obj.title} />
          </div>
          <h4 className="shop-item-title font-alt"><a href="#">{this.props.obj.title}</a></h4>${this.props.obj.dis_price}.00
        </div>
      </div>
    );
  }
}

export default DataTable;