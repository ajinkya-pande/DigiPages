import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div>
            <div className="primaryContainer displayFlex" style={{ "flexDirection": "column", width: "100%" }}>
                <div className="displayFlex" id="cartInfo">
                    Your Cart is Empty !!
                </div>
            </div>
            </div>
        )
    }
}
