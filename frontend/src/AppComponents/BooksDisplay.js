// google books search with API = "https://www.googleapis.com/books/v1/volumes?q=latest+books&key=<Your API Key>&maxResults=40&filter=ebooks"

import React, { Component } from 'react';
import loadingGif from "../Images/loading-79-unscreen.gif"
import BookItem from './BookItem';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default class BooksDisplay extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      total: 0,
      searchKey:"",
      searchQuery: "latest+books",
      startIndex: 0,
      loading : false
    }
    console.log("This is constructor of books", this.state.items);
  }

  async componentDidMount() {
    let url = (`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}&key=AIzaSyA2rCOLbXaectwHICNs9rVl9x0X8tc5pE8&maxResults=40&filter=ebooks&startIndex=${this.state.startIndex}`);
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false});
    console.log("ComponentDidMount",parsedData);
    this.setState({items:parsedData.items, total:parsedData.totalItems});
  }

  handleNext = async () => {
    console.log("next");
    this.setState({startIndex : this.state.startIndex+39})
    let url = (`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}&key=AIzaSyA2rCOLbXaectwHICNs9rVl9x0X8tc5pE8&maxResults=40&filter=ebooks&startIndex=${Math.abs(this.state.startIndex)}`);
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false});
    this.setState({items:parsedData.items, total:parsedData.totalItems});
  }

  handlePrev = async () => {
    console.log("previous");
    this.setState({startIndex : this.state.startIndex-39})
    let url = (`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}&key=AIzaSyA2rCOLbXaectwHICNs9rVl9x0X8tc5pE8&maxResults=40&filter=ebooks&startIndex=${Math.abs(this.state.startIndex)}`);
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false});
    this.setState({items:parsedData.items, total:parsedData.totalItems});
  }

  handleSearch = async () => {
    console.log('Searching books',this.state.searchKey);
    let arr = this.state.searchKey.split(" ");
    let search = arr.join("+");
    await this.setState({searchQuery:search,startIndex:0});
    let url = (`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}&key=AIzaSyA2rCOLbXaectwHICNs9rVl9x0X8tc5pE8&maxResults=40&filter=ebooks&startIndex=${Math.abs(this.state.startIndex)}`);
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false});
    this.setState({items:parsedData.items, total:parsedData.totalItems});
  }
  
  render() {
    let {setBookInfo} = this.props;
    return (
      <div className="primaryContainer displayFlex mainBodyContainer" style={{ justifyContent: 'flex-start' }}>
        <div className="categories displayFlex">
          <ul className="displayFlex">
            <li><a href="#" onClick={async ()=>{ await this.setState({searchKey: "adventure"}); this.handleSearch();}}>Adventure</a></li>
            <li><a href="#" onClick={async ()=>{ await this.setState({searchKey: "classic"}); this.handleSearch();}}>Classics</a></li>
            <li><a href="#" onClick={async ()=>{ await this.setState({searchKey: "comic"}); this.handleSearch();}}>Comic</a></li>
            <li><a href="#" onClick={async ()=>{ await this.setState({searchKey: "fantasy"}); this.handleSearch();}}>Fantasy</a></li>
            <li><a href="#" onClick={async ()=>{ await this.setState({searchKey: "horror"}); this.handleSearch();}}>Horror</a></li>
            <li><a href="#" onClick={async ()=>{ await this.setState({searchKey: "fiction"}); this.handleSearch();}}>Fiction</a></li>
            <li><a href="#" onClick={async ()=>{ await this.setState({searchKey: "literature"}); this.handleSearch();}}>Literature</a></li>
            <li><a href="#" onClick={async ()=>{ await this.setState({searchKey: "mystery"}); this.handleSearch();}}>Mystery</a></li>
            <li><a href="#" onClick={async ()=>{ await this.setState({searchKey: "scifi"}); this.handleSearch();}}>Sci-Fi</a></li>
          </ul>
        </div>
        <div className="searchBar">
          <form className="displayFlex">
            <input type="text" id="searchField" placeholder="Enter keywords to search" onChange={(e)=>{this.setState({searchKey : e.target.value})}}/>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" onClick={this.handleSearch}
              viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="10" cy="10" r="7"></circle>
              <line x1="21" y1="21" x2="15" y2="15"></line>
            </svg>
          </form>
        </div>
        <div className="mainContentContainer">
          {this.state.loading && <img src={loadingGif} alt="Loading"/>}
          {!this.state.loading && this.state.items.map((object) => {
            return (
              <div key={object.id} onClick={()=>{setBookInfo(object.id)}}>

              <BookItem title={object.volumeInfo.title} imgUrl={object.volumeInfo.imageLinks.thumbnail} infolink={object.selflink}/></div>
            )
          })}
        </div>

        <div className="nextPrevButtons">
          <button disabled={this.state.startIndex<1} onClick={this.handlePrev}>&larr; Previous</button>
          <button disabled={(this.state.startIndex+40)>=this.state.total} onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
