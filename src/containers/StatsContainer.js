import React, { Component } from 'react'
import Chart from '../components/Chart'

export default class StatsContainer extends Component {

    hatedComments = () => {
       let numOfHated = 0
       this.props.comments.forEach(comment => {
           if(comment.moddy_hates === true) {
               numOfHated += 1
           }
       })
       return numOfHated
    }


    render() {
        return (
            <div className="stats-container">
                <h2>STATS</h2>
                <p><strong>Deleted Comments:</strong> {this.props.deletedComments}</p>
                <p><strong>Active Comments:</strong> {this.props.comments.length}</p>
                <p><strong>Sir Moddy Hates:</strong> {this.hatedComments()} comments.</p>

                <Chart comments={this.props.comments} deletedComments={this.props.deletedComments} hatedComments={this.hatedComments()} />
            </div>
        )
    }
}
