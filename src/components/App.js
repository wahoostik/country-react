import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import News from '../pages/News';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/a-propos" exact component={About} />
            <Route path="/news" exact component={News} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default App;
