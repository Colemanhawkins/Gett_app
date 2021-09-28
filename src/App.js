import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import TodosCrud from './components/TodosCrud';


const App = () => {
  return ( 
    <Router>
        <Route   exath path="/home" component={Login} />
        <Route  exath path="/todos" component={TodosCrud} />
    </Router>
  )
};

export default App;
