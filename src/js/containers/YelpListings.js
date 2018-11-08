import React, { Component } from "react";
import { connect } from "react-redux";

class YelpSearchListings extends Component {
  render() {
    if (!this.props.search[0]) { return null }
    // if (this.props.search[0]) {
    //   console.log('props.search', this.props.search[0].businesses.map(b => b.name))
    // }
    return this.props.search[0].businesses.map((results, index) => {
        console.log('places', results)
      return (<div className='container' key={index}>
        <div className='card'>
          <div className='row'>
            <div className='col-sm-4'>
              <img  src={results.image_url} />
            </div>

            <div className='col-sm-8'>
              <div className='card-block'>
                <h4><strong>{results.name}</strong></h4>
                <p> {results.display_phone} </p>
                <hr/>
                <p></p>

                
              </div>
            </div>
          </div>
        </div>
      </div>
      );

    })
  
  }
}

function mapStateToProps({ search }) {
  return { search }; // es6 // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(YelpSearchListings);
