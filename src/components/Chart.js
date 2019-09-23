import React, { Component } from 'react'


export default class Chart extends Component {

    
    render() {
        console.log(this.props.deletedComments)
        
        return (
          <div className="charts">
            <div className="inline">
              <div
                style={{
                  backgroundColor: "blue",
                  width: "150px",
                  height: `${this.props.comments.length * 20}px`,
                  border: "0"
                }}
              ></div>
              Current Comments
            </div>
            <div className="inline">
              <div
                style={{
                  backgroundColor: "red",
                  width: "150px",
                  height: `${this.props.deletedComments * 20}px`,
                  border: "0"
                }}
              ></div>
              Deleted Comments
            </div>
            <div className="inline">
              <div
                style={{
                  backgroundColor: "green",
                  width: "150px",
                  height: `${this.props.hatedComments * 20}px`,
                  border: "0"
                }}
              ></div>
              Current Comments
            </div>
          </div>
        );
    }
}