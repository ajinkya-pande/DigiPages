import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, json } from "react-router-dom";

import Header from './AppComponents/Header';
import Home from './AppComponents/Home';
import BooksDisplay from './AppComponents/BooksDisplay';
import Login from './AppComponents/Login';
import Cart from './AppComponents/Cart';
import About from './AppComponents/About';
import Footer from './AppComponents/Footer';
import BookInfo from './AppComponents/BookInfo';

import './styleSheets/headerFooter.css';
import './styleSheets/homePageStyle.css';
import './styleSheets/contentPageStyle.css';
import './styleSheets/bookInfo.css';
import './styleSheets/loginCart.css';
import './styleSheets/utility.css';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      bookDetails : {},
      loading : false,
      user : {}
    }
  }

  setBookInfo = async (id) => {
    let url = (`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyA2rCOLbXaectwHICNs9rVl9x0X8tc5pE8`);
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({bookDetails : parsedData});
    this.setState({loading:false});
  }

  setUser = async (user) => {
    this.setState({user:user});
  }

  render() {
    return (
      <>
        <Router>
        <Header siteName={"digiPages"}/>
         <Routes> {/* Acts as a switch statement */}
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/books" element={<BooksDisplay setBookInfo={this.setBookInfo}/>}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/login" element={<Login setUser={this.setUser} user={this.state.user}/>}></Route>
          <Route exact path="/cart" element={<Cart/>}></Route>
          {this.state.loading?"":<Route path="/bookinfo" element={<BookInfo bookDetails={this.state.bookDetails}/>}></Route>}
        </Routes>
        <Footer />
      </Router>
      </>
    )
  }
}

