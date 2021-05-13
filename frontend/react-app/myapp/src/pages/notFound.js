import React,{ useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Link } from "react-router-dom";
import brand from '../kbrandvec.svg';
import '../App.css';
import DataCart from './dataCart';

export default class NotFound extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = { usersCollection: [] };
    
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

  dataCart()     {
    return this.state.usersCollection.map((data, i) => {
        if(i<2){
        return <DataCart obj={data} key={i} />;}
    });
  }

  render() {
    return (
        <div className="App">
            <div data-spy="scroll" data-target=".onpage-navigation" data-offset="60"></div>
            <main>
                <div className="page-loader">
                    <div className="loader">Loading...</div>
                </div>
                <section className="home-section home-parallax home-fade home-full-height bg-dark bg-dark-30" id="home" data-background="assets/images/shop/error404.jpg">
                    <div className="titan-caption">
                    <div className="caption-content">
                        <div className="font-alt mb-30 titan-title-size-4">LOST?</div>
                        <div className="font-alt">Error 404: The requested URL was not found on this server.<br/>That is all we know.
                        </div>
                        <div className="font-alt mt-30"><Link to={`./`}><a className="btn btn-border-w btn-round" href="index.html">Back to home page</a></Link></div>
                    </div>
                    </div>
                </section>
            </main>
            </div>
        );
    }
}