import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Space from './space';
import Store from './store';
import './styles/home.css';

const Home = () => {
	return (
		<div className='home'>
			<Link to='/space'>Spaceship</Link>
			<Link to='/store'> Store </Link>
		</div>
	);
};

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/space' element={<Space />} />
					<Route path='/store' element={<Store />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
