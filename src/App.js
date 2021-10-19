import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import authReducer from './store/AuthReducer';
import sliderReducer from './store/DataReducer';
import basketSlice from './store/basketSlice';

import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import RentalMain from './Components/RentalMainPage/RentalMain';
import WeddingLab from './Components/WeddingLab/WeddingLab';
import Offer from './Components/Offer/Offer';
import Portfolio from './Components/Portfolio/Portfolio';
import ProductPage from './Components/RentalMainPage/ProductPage/ProductPage';
import Contact from './Components/Contact/Contact';
import Pricing from './Components/Pricing/Pricing';

const rootReducer = combineReducers({
  slider: sliderReducer,
  auth: authReducer,
  basket:basketSlice.reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/eustomadevmode/">
      <div className="App">
            <Switch>
                <Route path="/admin" component={Admin}/>
                <Route exact path="/wypozyczalnia" component={RentalMain}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/pracownia" component={WeddingLab}/>
                <Route exact path="/oferta" component={Offer}/>
                <Route exact path="/rental/product" component={ProductPage}/>
                <Route exact path="/kontakt" component={Contact}/>
                <Route exact path="/wycena" component={Pricing}/>
                <Route exact path="/" component={Home} />
            </Switch>
      </div>
      </BrowserRouter>
   </Provider>
  );
}

export default App;
