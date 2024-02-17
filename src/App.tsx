import React from 'react';
import './App.css';
import { Header, Main, Footer } from './components';

function App() {
	return (
		<div className='App'>
			<div className='wrapper'>
				<Header />
				<Main />
			</div>
			<Footer />
		</div>
	);
}

export default App;
