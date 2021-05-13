import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from "axios";
import Home from './home';

class DataCart extends Component {

    render() {
        return (
            <tr>
                <td className="hidden-xs">
                    <a href="#"><img src={ this.props.obj.cover } alt={ this.props.obj.title }/></a>
                </td>
                <td>
                    <h5 className="product-title font-alt">{ this.props.obj.title }</h5>
                </td>
                <td className="hidden-xs">
                    <h5 className="product-title font-alt">{ this.props.obj.ori_price }</h5>
                </td>
                <td>
                    <input className="form-control" type="number" onVolumeChangeCapture="" defaultValue="1" max="50" min="1"/>
                </td>
                <td>
                    <h5 className="product-title font-alt">{ this.props.obj.ori_price }</h5>
                </td>
                <td className="pr-remove">
                    <a href="#" title="Remove"><i className="fa fa-times"></i></a>
                </td>
                </tr>
        );
    }
}

export default DataCart;