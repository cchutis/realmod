import React, { Component } from 'react';
import CommentContainer from './CommentContainer'

export default class MainContainer extends Component {

    render() {
        return (
           <CommentContainer comments={this.props.comments} />
        )
    }
}
