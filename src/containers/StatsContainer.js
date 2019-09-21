import React, { Component } from 'react'

export default class StatsContainer extends Component {


    render() {
        return (
            <div>
                STATS

                Deleted Comments: {this.props.deletedComments}

                Active Comments: {this.props.comments.length}
            </div>
        )
    }
}
