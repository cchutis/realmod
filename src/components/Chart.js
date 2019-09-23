import React, { Component } from 'react'


export default class Chart extends Component {

    verticalBar = (num) => {
        return parseInt(num * 10) + 'px'
    }

    render() {
        console.log(this.props.comments)
        return (
            <div>
                <p>
                <div style={{backgroundColor: 'blue', width: '150px', height: `${this.props.comments.length * 20}px`, border: '0'}}></div>
                Current Comments
                </p>
                <p>
                <div style={{backgroundColor: 'red', width: '150px', height: `${this.props.deletedComments.length * 20}px`, border: '0'}}></div>
                Deleted Comments
                </p>
                <p>
                <div style={{backgroundColor: 'green', width: '150px', height: `${this.props.hatedComments * 20}px`, border: '0'}}></div>
                Current Comments
                </p>
            </div>
        )
    }
}