import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Switch,
} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
