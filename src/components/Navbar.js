import React from 'react';

import {Input, Row, Col} from 'antd';

import { Search } from Input

class Navbar extends React.Component {

	state = {
		searchQuery: 
	}

	render(){
	return (
		<Row>
			<Col>Github User Card</Col>
			<Col>
				<Search onChange={}></Search>
			</Col>
		</Row>
	)
}
}