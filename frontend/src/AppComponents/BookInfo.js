import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default class BookInfo extends Component {
  constructor() {
    super();
    this.state = {
      bookAuthors: []
    }
  }

  render() {
    let { bookDetails } = this.props;

    function setAboutBook(text) {
      document.getElementById('aboutBookDiv').innerHTML = text;
    }

    function filterName(text) {
      let arr = text.split(" ");
      return arr.join("+");
    }

    return (
      <div className="primaryContainer smallContainer" onLoad={()=>{return setAboutBook(bookDetails.volumeInfo.description)}}>
        <div className="detailsCard">
          <div className="bookImage displayFlex">
            <img className="image" src={bookDetails.volumeInfo.imageLinks.thumbnail} alt="no image" />
          </div>

          <div className="primaryDescription displayFlex">
            <table className="noBorder" id="bookInfoTable">
              <tr>
                <td className="attribute noBorder">Title</td>
                <td className="info noBorder">{bookDetails.volumeInfo.title}</td>
              </tr>
              <tr>
                <td className="attribute noBorder">Author</td>
                <td className="info noBorder">{bookDetails.volumeInfo.authors}</td>
              </tr>
              <tr>
                <td className="attribute noBorder">Publisher</td>
                <td className="info noBorder">{bookDetails.volumeInfo.publisher}</td>
              </tr>
              <tr>
                <td className="attribute noBorder">Publication Year</td>
                <td className="info noBorder">{bookDetails.volumeInfo.publishedDate}</td>
              </tr>
              <tr>
                <td className="attribute noBorder">Pages</td>
                <td className="info noBorder">{bookDetails.volumeInfo.pageCount}</td>
              </tr>
              <tr>
                <td className="attribute noBorder">Price</td>
                <td className="info noBorder">{bookDetails.saleInfo.saleability=="FOR_SALE"?("Rs. "+bookDetails.saleInfo.retailPrice.amount):"Not For Sale"}</td>
              </tr>
              <tr>
                <td className="attribute noBorder">Ratings</td>
                <td className="info noBorder">{bookDetails.volumeInfo.averageRating?bookDetails.volumeInfo.averageRating:"(Be first to Rate!!)"}</td>
              </tr>
            </table>
            <div className="buttons">
              <button style={{ backgroundColor: 'grey' }}><a href={bookDetails.volumeInfo.previewLink}>Read</a></button>
              <button style={{ backgroundColor: 'green' }}><a href={bookDetails.saleInfo.buyLink?bookDetails.saleInfo.buyLink:"#"}>Buy</a></button>
              <button style={{ backgroundColor: 'crimson' }}><a href={bookDetails.accessInfo.epub.acsTokenLink}>Download</a></button>
            </div>
          </div>
        </div>

        <div className="detailedDescription">
          <div className="aboutBook detailsCard"><div className="detailsTitle">About Book</div><div className="detailsData" id='aboutBookDiv'></div></div>
          
          <div className="aboutAuthor detailsCard"><div className="detailsTitle">About Author</div><div className="detailsData displayFlex">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem dolores quam nobis dolorum quas recusandae ex magni qui asperiores iure voluptate architecto quibusdam dolor quis accusamus voluptatem veniam labore ea veritatis, deserunt repellat dicta voluptas deleniti sit. Excepturi cum quisquam quis provident eius officiis numquam reiciendis nostrum, dicta exercitationem ad?</div></div>
        </div>
        <div className="detailsCard reviewSection">
          <div className="detailsTitle">Reviews</div>
          <div className="detailsData">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem dolores quam nobis dolorum quas recusandae ex magni qui asperiores iure voluptate architecto quibusdam dolor quis accusamus voluptatem veniam labore ea veritatis, deserunt repellat dicta voluptas deleniti sit. Excepturi cum quisquam quis provident eius officiis numquam reiciendis nostrum, dicta exercitationem ad?
          </div>
        </div>
      </div>
    )
  }
}
