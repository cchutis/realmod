import React, { Component } from 'react';
import './App.css';
import MenuBar from './containers/MenuBar';
import MainContainer from './containers/MainContainer';
import StatsContainer from './containers/StatsContainer';

import { connect } from 'react-redux';
import { loadComments } from './actions';

const data = 'http://localhost:3000/comments.json'

class App extends Component {

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    fetch(data)
    .then(r => r.json())
    .then(response => {
      this.props.loadComments(response.comments)
    })
  };

  toggleView = (view) => {
    this.setState({
      selectedView: view
    })
  };

  renderCommentsPage = () => {
    return <MainContainer comments={this.props.comments} deleteComment={this.deleteComment} deletedComments={this.props.deletedComments} />
  }

  renderStatsPage = () => {
    return <StatsContainer deletedComments={this.props.deletedComments} comments={this.props.comments}/>
  }

  renderView = () => {
    switch(this.props.selectedView) {
    case 'comments':
      return this.renderCommentsPage();
    case 'stats':
      return this.renderStatsPage();
      default: return
    }
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

function msp(state){
  return {
    comments: state.comments,
    deletedComments: state.deletedComments,    
    selectedView: state.selectedView
  }
}

function mdp(dispatch){
  return {
    comments: () => { 
      dispatch({type: "COMMENTS"})
    },
    deletedComments: () => {
      dispatch({type: "DELETEDCOMMENTS"})
    },
    selectedView: () => {
      dispatch({type: "SELECTEDVIEW"})
    }
  }
}


export default connect(msp, {mdp, loadComments})(App);