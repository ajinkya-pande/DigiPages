import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default class BookItem extends Component {
  render() {
    let { title, imgUrl} = this.props;
    return (
      <div>
        <div className="pageContent displayFlex">
          <Link to="/bookinfo"><p className="contentTitles">{title}</p></Link>
          <Link to="/bookinfo"><img src={imgUrl ? imgUrl : 'No image'} alt="No image" /></Link>
        </div>
      </div>
    )
  }
}
