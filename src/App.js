import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
import MenuBar from './containers/MenuBar';
import MainContainer from './containers/MainContainer';
import StatsContainer from './containers/StatsContainer';

const data = 'http://localhost:3000/comments.json'


export default class App extends Component {
  
  state = {
    comments: [],
    updatedComments: [],
    deletedComments: [],
    selectedView: 'comments'
  };

  componentDidMount() {
    this.fetchComments();
  }

  // wanted to originally fetch the comments list, however since it's a local dataset,
  // this works without making a fetch request.
  fetchComments = () => {
    fetch(data)
    .then(r => r.json())
    .then(commentList => {
      this.setState({
        comments: commentList.comments
      });
    })
  };

  toggleView = (view) => {
    this.setState({
      selectedView: view
    })
  };

  renderCommentsPage = () => {
    return <MainContainer comments={this.state.comments} />
  }

  renderStatsPage = () => {
    return <StatsContainer deletedComments={this.state.deletedComments} />
  }

  renderView = () => {
    switch(this.state.selectedView) {
    case 'comments':
      return this.renderCommentsPage();
    case 'stats':
      return this.renderStatsPage();
    }
  }

  deleteComment = (id) => {
        // console.log(this.state.projects)
        const updatedComments = this.state.comments.filter(comment => {
            if(comment.id === id) {
                return null
            } else {
                return comment
            }
        })
        this.setState({
            comments: updatedComments
        }, () => {
            fetch(`http://localhost:3000/comments.json`, {
                method: "DELETE"
            })
        })
    }

  render() {
    return (
      <div className="main">
        <MenuBar toggleView={this.toggleView} />
        {this.renderView()}
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

