import React from 'react';
import $ from 'jquery';
import TopNav from './topnav'
import { API_URL, POLL_INTERVAL } from './global';

module.exports = React.createClass({
    getInitialState: function() {
        return {data: [], _isMounted: false};
    },
    componentDidMount: function() {
        this.state._isMounted = true;
    },
    componentWillUnmount: function() {
        // Reset the isMounted flag so that the loadCommentsFromServer callback
        // stops requesting state updates when the commentList has been unmounted.
        // This switch is optional, but it gets rid of the warning triggered by
        // setting state on an unmounted component.
        // See https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
        this.state._isMounted = false;
    },
    render: function() {
        return (
            <div>
                <h1> Welcome to Calvin Post Race Analysis! </h1>
                <TopNav></TopNav>
                <p> Click the Analysis tab to enter race information </p>
                <p> Race Archives shows the most recent races</p>
            </div>
            );
    }
});
