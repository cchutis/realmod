import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions'

class CommentTile extends Component {
    
    
    render() {

        let date = new Date(this.props.comment.date)

        return (
          <div className="comment-tile">
            <p className="comment-text">"{this.props.comment.body}"</p>
            <p className="comment-author">-{this.props.comment.author}</p>
            <p className="meta-data">
                <span className="comment-date"><strong>Date:</strong> {date.toDateString()}</span>
                &nbsp; | &nbsp;
                <span className="mod-status">
                {this.props.comment.moddy_hates ? 'Sir Moddy hates this' : 'Sir Moddy likes this'}
                </span>
            </p>
            <button onClick={() => this.props.deleteComment(this.props.comment.id)}>Delete This</button>
          </div>
        );
    }
}

function msp(state) {
  return {
    deletedComments: state.deletedComments
  };
}
function mdp(dispatch){
  return {
    deleteComment: (id) => dispatch(deleteComment(id))
  }
}

export default connect(msp, mdp)(CommentTile);
