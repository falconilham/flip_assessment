import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from './store'
import ListTransaction from './screen/ListTransaction'
import DetailPage from './screen/DetailPage'

function App() {
  return (
    <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={ListTransaction} />
              <Route exact path="/detailpage/:id" component={DetailPage} />
            </Switch>
          </Router>
    </Provider>
  );
}

export default App;
