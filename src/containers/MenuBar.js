import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { toggleView } from '../actions';

class MenuBar extends Component {

    render() {
        return (
            <div className="menu-bar">
               {/* <img src="logo.png" /> */}
                <Link to="/comments">
                    <button className="menu-btn" onClick={() => this.props.toggleView('comments')}>Comments</button>
                </Link>
                <Link to="/stats">
                    <button className="menu-btn" onClick={() => this.props.toggleView('stats')}>Stats</button>
                </Link>
            </div>
        )
    }
}


function msp(state) {
  return {
    selectedView: state.selectedView
  };
}

function mdp(dispatch) {
  return {
    toggleView: view => dispatch(toggleView(view))
  };
}


export default connect(msp, {mdp, toggleView})(MenuBar);
