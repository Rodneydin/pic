import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Login from './components.Login'
import'./index.css';

ReactDOM.render(
    <Router>
        <App/>
    </Router>

,document.getElementById('root'))