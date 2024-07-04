// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Library from './components/Library';

function App() {
    return (
        <div className="App">
            <Router>
                <header>
                    <ul>
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        <li>
                            <Link to="/my-library"> Library </Link>
                        </li>
                    </ul>
                </header>
                <main>
                    <Routes>
                        <Route path='/'/>
                        <Route path='/my-library/' element={<Library/>} /> 
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
