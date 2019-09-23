import React, { Component } from 'react';
import CommentContainer from './CommentContainer'
import { connect } from 'react-redux';

class MainContainer extends Component {

    render() {
        return (
            <div>
                <p className="delete-stats">Deleted Comments: {this.props.deletedComments}</p>
                <CommentContainer comments={this.props.comments} deleteComment={this.props.deleteComment}/>
            </div>
        )
    }
}

function msp(state) {
  return {
    deletedComments: state.deletedComments
  };
}

export default connect(msp)(MainContainer);
