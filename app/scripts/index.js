
import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import $ from 'jquery';
import { Router, Route, browserHistory } from 'react-router';

import '../css/base.css';

import CommentBox from './commentBox';
import CommentEdit from './commentEdit';
import Welcome from './welcome';
import PastRaces from './pastraces'
import { API_URL, POLL_INTERVAL } from './global';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={Welcome}/>
		<Route path="/pastraces" component={PastRaces} />
		
	</Router>
    ),
    document.getElementById('content')
);