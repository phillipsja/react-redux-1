import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { simpleAction } from './actions/simpleAction'

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
 ...state
})



class App extends Component {
simpleAction = (event) => {
 this.props.simpleAction();
}
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
				<pre>
				{
					JSON.stringify(this.props)
				}
				</pre>
				<button onClick={this.simpleAction}>Test redux action</button>
      </div>
    );
  }
}

//export default App;
//export default connect()(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
