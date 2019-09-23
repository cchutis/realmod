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
              <p className="chart-reading">Current Comments</p>
              <h1 className="chart-reading blue">{this.props.comments.length}</h1>
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
              <p className="chart-reading">Deleted Comments</p>
              <h1 className="chart-reading red">{this.props.deletedComments}</h1>
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
              <p className="chart-reading">Hated Comments</p>
              <h1 className="chart-reading green">{this.props.hatedComments}</h1>
            </div>
          </div>
        );
    }
}