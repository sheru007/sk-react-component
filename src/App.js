import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
// import { FindGithubRepo } from 'sk-react-component';
import Slider from './Slider';
import TodoWithDnD from './TodoWithDnD'
import NavBar from './NavBar';
import ImagePopupEffect from './ImagePopupEffect';

const images = [
	'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
	'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
	'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
	'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
]
function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>

				<Route exact path="/">
					<TodoWithDnD />
				</Route>

				<Route exact path="/slider">
					<Slider slides={images} autoPlay={2}/>
				</Route>

				<Route exact path="/image-popup">
					<ImagePopupEffect />
				</Route>

				{/* <Route path="/profile/:userid">
					<UserProfile />
				</Route> */}
			</Switch>
		</BrowserRouter>
	);
}

export default App;