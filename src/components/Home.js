import React from 'react';
import './Home.scss';
import Timer from './Timer';

const Home = () => {
	return (
		<div>
			<p className='Home'>I am the Home component, plus some styyyle</p>
			<div className='splash'>
				<Timer />
			</div>
		</div>
	);
};

export default Home;
