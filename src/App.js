import './App.css';
import Home from './Conteiners/Home/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Admin from './Conteiners/Admin/Admin';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import authReducer from './store/AuthReducer';
import sliderReducer from './store/DataReducer';
import RentalMain from './Components/RentalMainPage/RentalMain';
import WeddingLab from './Components/WeddingLab/WeddingLab';
import Offer from './Components/Offer/Offer';
import Portfolio from './Components/Portfolio/Portfolio';

const rootReducer = combineReducers({
  slider: sliderReducer,
  auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
            <Switch>
                <Route path="/admin" component={Admin}/>
                <Route path="/wypozyczalnia" component={RentalMain}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/pracownia" component={WeddingLab}/>
                <Route path="/oferta" component={Offer}/>
                <Route exact path="/" component={Home} />
            </Switch>
      </div>
      </BrowserRouter>
   </Provider>
  );
}

export default App;
