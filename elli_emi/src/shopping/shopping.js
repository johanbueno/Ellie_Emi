import React from "react";
import data from "../data.json";
import "./shopping.css";
import Products from "../components/Products";

class shopping extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <main>
        <div className="content">
          <div className="main">
            Products
            <Products products={this.state.products} />
          </div>
          <div className="sidebar">Cart Item</div>
        </div>
      </main>
    );
  }
}

export default shopping;
