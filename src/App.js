import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
import MenuBar from './containers/MenuBar';
import MainContainer from './containers/MainContainer';

let data = require('./comments.json')


export default class App extends Component {

  state = {
    comments: []
  }

  componentDidMount() {
    this.fetchComments()
  }

  // wanted to originally fetch the comments list, however since it's a local dataset, 
  // this works without making a fetch request.
  fetchComments = () => {
    this.setState({
      comments: data.comments
    })
  }

    render() {
      return (
        <div className="main">
          <MenuBar />
          <MainContainer comments={this.state.comments} />
        </div>
      );
    }
}

// function msp(state) {
//   return state;
// }

// function mdp(dispatch) {

// }

// export default connect(msp, mdp)(App);

