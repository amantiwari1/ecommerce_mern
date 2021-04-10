import { ThemeProvider } from './theme/themeContext';
import GlobalStyles from './theme/globalStyles'
import { Route, Switch } from "react-router-dom";
import {
  Home,
  Faq,
  AboutUs,
  WhatisBoba,
  ShoppingCart,
  SignIn,
  IngredientsList,
  SignUp,
  ContactUs,
  AddProduct
} from './pages';

import {
  ListofProduct,
  SingleProduct
} from './template'
import { Navbar, Footer } from './components'


function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route exact path="/editProduct" component={AddProduct} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/collections/:CollectName/produdct/:productName" component={SingleProduct} />
        <Route exact path="/pages/" component={ShoppingCart} />
        <Route exact path="/pages/faq" component={Faq} />
        <Route exact path="/pages/about" component={AboutUs} />
        <Route exact path="/pages/what-is-boba" component={WhatisBoba} />
        <Route exact path="/pages/ingredients-list" component={IngredientsList} />
        <Route exact path="/collections/:CollectName" component={ListofProduct} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}
export default App;