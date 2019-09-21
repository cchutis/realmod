import React, { Component } from 'react';


export default class CommentTile extends Component {
    
    
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
                Mod Hates?: {this.props.comment.moddy_hates}
                </span>
            </p>
            <button onClick={() => this.props.deleteComment(this.props.comment.id)}>Delete This</button>
          </div>
        );
    }
}
