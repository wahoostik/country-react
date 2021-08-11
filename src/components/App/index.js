import Home from '../../pages/Homes';
import NotFound from '../../pages/NotFound';
import About from '../../pages/About';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/a-propos" exact component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
