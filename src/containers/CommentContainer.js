import React, { Component } from 'react'
import CommentTile from '../components/CommentTile';

export default class CommentContainer extends Component {

    renderComments = () => {
        return this.props.comments.map(comment => {
            return <CommentTile key={comment.id} comment={comment} />
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