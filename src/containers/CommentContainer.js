import React, { Component } from 'react'
import CommentTile from '../components/CommentTile';
import { connect } from 'react-redux';


class CommentContainer extends Component {

    renderComments = () => {
        return this.props.comments.map(comment => {
            return <CommentTile key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />
        })
    }

    render() {
        return (
            <div className="comments-container">
                {this.renderComments()}
            </div>
        )
    }
}

function msp(state) {
  return {
    comments: state.comments
  };
}

export default connect(msp)(CommentContainer);