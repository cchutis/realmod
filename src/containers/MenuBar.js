import React, { Component } from 'react';

export default class MenuBar extends Component {

  

    render() {
        return (
            <div className="menu-bar">
               {/* <img src="logo.png" /> */}
               <button className="menu-btn" onClick={() => this.props.toggleView('comments')}>Comments</button>
               <button className="menu-btn" onClick={() => this.props.toggleView('stats')}>Stats</button>

            </div>
        )
    }
}
