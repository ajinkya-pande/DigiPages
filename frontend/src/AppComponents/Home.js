import React, { Component } from 'react';
import image1 from '../Images/welcome1.jpg';
import image2 from '../Images/welcome2.jpg';
import image3 from '../Images/welcome3.jpg';
import image4 from '../Images/welcome4.jpg';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            items: [],
            loading: false,
            startIndex: 0
        }
        console.log("This is constructor", this.state.items);
    }

    async componentDidMount() {
        let url = (`https://www.googleapis.com/books/v1/volumes?q=top+books&key=AIzaSyA2rCOLbXaectwHICNs9rVl9x0X8tc5pE8&maxResults=10&filter=ebooks&startIndex=${this.state.startIndex}`);
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ loading: false });
        console.log("ComponentDidMount", parsedData);
        this.setState({ items: parsedData.items });
    }


    render() {

        return (
            <div>
                <div className="primaryContainer displayFlex mainBodyContainer">
                    <div className="searchBar">
                        <form className="displayFlex">
                            <input type="text" id="searchField" placeholder="Enter keywords to search" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search"
                                viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="10" cy="10" r="7"></circle>
                                <line x1="21" y1="21" x2="15" y2="15"></line>
                            </svg>
                        </form>
                    </div>
                    <div className="welcomeContainer">
                        <section className="carousel" aria-label="Gallery">
                            <ol className="carousel__viewport">
                                <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
                                    <div className="carousel__snapper">
                                        {/* <a href="#carousel__slide4" className="carousel__prev">Go to last slide</a>
                                <a href="#carousel__slide2" className="carousel__next">Go to next slide</a> */}
                                        <img src={image1} alt="" />
                                    </div>
                                </li>
                                <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
                                    <div className="carousel__snapper"></div>
                                    {/* <a href="#carousel__slide1" className="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide3" className="carousel__next">Go to next slide</a> */}
                                    <img src={image2} alt="" />
                                </li>
                                <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
                                    <div className="carousel__snapper"></div>
                                    {/* <a href="#carousel__slide2" className="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide4" className="carousel__next">Go to next slide</a> */}
                                    <img src={image3} alt="" />
                                </li>
                                <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
                                    <div className="carousel__snapper"></div>
                                    {/* <a href="#carousel__slide3" className="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide1" className="carousel__next">Go to first slide</a>  */}
                                    <img src={image4} alt="" />
                                </li>
                            </ol>
                            <aside className="carousel__navigation">
                                <ol className="carousel__navigation-list">
                                    <li className="carousel__navigation-item">
                                        <a href="#carousel__slide1" className="carousel__navigation-button">Go to slide 1</a>
                                    </li>
                                    <li className="carousel__navigation-item">
                                        <a href="#carousel__slide2" className="carousel__navigation-button">Go to slide 2</a>
                                    </li>
                                    <li className="carousel__navigation-item">
                                        <a href="#carousel__slide3" className="carousel__navigation-button">Go to slide 3</a>
                                    </li>
                                    <li className="carousel__navigation-item">
                                        <a href="#carousel__slide4" className="carousel__navigation-button">Go to slide 4</a>
                                    </li>
                                </ol>
                            </aside>
                        </section>
                    </div>
                    <div className="topBooks topContentContainer displayFlex" id="abc">
                        <div className="contentName displayFlex">
                            Top Books
                        </div>
                        <div className="contentContainer displayFlex">
                            {this.state.items.map((object) => {
                                return (
                                    <img key={object.id} src={object.volumeInfo.imageLinks.thumbnail} alt=""/>
                                )
                            })}
                        </div>
                    </div>
                    {/* <div className="topNews topContentContainer displayFlex">
                        <div className="contentName displayFlex">
                            Best Sellers
                        </div>
                        <div className="contentContainer displayFlex">
                            {this.state.items.map((object) => {
                                return (
                                    <img key={object.id} src={object.volumeInfo.imageLinks.thumbnail} alt="" />
                                )
                            })}
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

