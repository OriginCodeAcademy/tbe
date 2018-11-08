import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import YelpSearchListings from "./YelpListings"

class YelpSearchContainer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        input: ""
      };
  
      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }
  
    onInputChange(event) {
      this.setState({ input: event.target.value });
    }
  
    onFormSubmit(event) {
      event.preventDefault();
      this.props.dispatch(fetchData(this.state.input));
      this.setState({ input: "" });
    }
  
    render() { 
      return (
        <div className="container">
          <div className="jumbotron alert-success">
            <h1 className="text-center">DIS TBE</h1>
          </div>
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input
              type="text"
              className="form-control border-secondary"
              placeholder="Enter Search"
              value={this.state.input}
              onChange={this.onInputChange}
            />
            <span className="input-group-append">
            <button type="submit" className="btn btn-outline-secondary">
              IKUZO!
            </button>
            </span>
          </form>
          <br />
          <div>
           <YelpSearchListings />
          </div>
        </div>
      );
    }
  }
  
  export default connect(null)(YelpSearchContainer);
  