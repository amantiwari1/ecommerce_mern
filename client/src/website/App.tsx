import { ThemeProvider } from './theme/themeContext';
import GlobalStyles from './theme/globalStyles'
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import {Navbar, Footer} from './components'
import Faq from './pages/Footer/Faq';
import AboutUs from './pages/About/AboutUs';
import WhatisBoba from './pages/About/WhatisBoba';
import IngredientsList from './pages/About/IngredientsList';
import ListofProduct from './template/ListofProduct';
import ShoppingCart from './pages/ShoppingCart';
 

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/"  component={Home}  />
        <Route exact path="/cart"  component={ShoppingCart}  />
        <Route exact path="/pages/faq"  component={Faq}  />
        <Route exact path="/pages/about"  component={AboutUs}  />
        <Route exact path="/pages/what-is-boba"  component={WhatisBoba}  />
        <Route exact path="/pages/ingredients-list"  component={IngredientsList}  />
        <Route exact path="/collections/:CollectName"  component={ListofProduct}  />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}
export default App;