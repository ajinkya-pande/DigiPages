import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default class BookItem extends Component {
  render() {
    let { title, imgUrl, infolink} = this.props;
    return (
      <div>
        <div className="pageContent displayFlex" data-infolink={infolink}>
          <Link to="/bookinfo"><p className="contentTitles" data-infolink={infolink}>{title}</p></Link>
          <Link to="/bookinfo"><img src={imgUrl ? imgUrl : 'No image'} alt="No image" data-infolink={infolink}/></Link>
        </div>
      </div>
    )
  }
}
