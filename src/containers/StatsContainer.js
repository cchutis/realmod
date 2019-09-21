import React, { Component } from 'react'

export default class StatsContainer extends Component {


    render() {
        return (
            <div>
                STATS

                Deleted Comments: {this.props.deletedComments.length}
            </div>
        )
    }
}
