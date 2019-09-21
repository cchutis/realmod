import React, { Component } from 'react';
import CommentContainer from './CommentContainer'

export default class MainContainer extends Component {

    render() {
        return (
            <div>
                Deleted Comments: {this.props.deletedComments}
                <CommentContainer comments={this.props.comments} deleteComment={this.props.deleteComment}/>
            </div>
        )
    }
}
