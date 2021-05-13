import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from "axios";
import Home from './home';
import Cart from './cart';

class DataSearch extends Component {

    render() {
        return (
          
            <div className="shop-item">
              <div className="shop-item-image"><img src={this.props.obj.cover} style={{ height: 350 }}/>
                <div className="shop-item-detail"><a className="btn btn-round btn-b"><span className="icon-basket"onClick={()=>this.addToCart(Cart)}>Add To Cart</span></a></div>
              </div>
              <h4 className="shop-item-title font-alt"><a href="#">{this.props.obj.title}</a></h4>{this.props.obj.dis_price}
            </div>
          
        );
    }
}

export default DataSearch;