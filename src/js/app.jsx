import React from 'react';
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (

      <Router>
        <div className='container'>
          <h1>THIS BE TBE</h1>
        </div>
      </Router>
    )
  }
}

export default App;