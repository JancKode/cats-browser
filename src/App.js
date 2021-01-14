import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CatsContainer from './views/cat-container/cats-container';
import CatCardDetails from './components/cards/cat-details/cat-details'
import { Container } from 'react-bootstrap';
import Header from './components/header/header';

function App() {

  return (
    <Router>
      <div className="App">
        <Container>
          <Header title="Cat Browser" />
          <Switch>

            <Route exact path='/' component={CatsContainer} />
            <Route exact path='/:id' component={CatCardDetails} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
