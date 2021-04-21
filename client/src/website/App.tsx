import {ThemeProvider} from "./theme/themeContext";
import GlobalStyles from "./theme/globalStyles";
import {Route, Switch, Redirect} from "react-router-dom";
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
  AddProduct,
  Order
} from "./pages";

import {ListofProduct, SingleProduct} from "./template";
import {Navbar, Footer} from "./components";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../shared/reduxHooks";
import userActionCreator from "../actions/userAction";
 
function App() {
  const dispatch = useAppDispatch();
  const {currentUser, isAuth } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(userActionCreator.isLogin());
  }, [dispatch]);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" >
          {isAuth ? <ShoppingCart /> : <div>Sign In first</div> }
        </Route>
        <Route exact path="/order" >
          {isAuth ? <Order /> : <div>Sign In first</div> }
        </Route>
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route
          exact
          path="/collections/:CollectName/product/:productName"
          component={SingleProduct}
        />
        <Route exact path="/pages/about" component={AboutUs} />
        <Route exact path="/pages/what-is-boba" component={WhatisBoba} />
        <Route
          exact
          path="/pages/ingredients-list"
          component={IngredientsList}
        />
        <Route
          exact
          path="/collections/:CollectName"
          component={ListofProduct}
        />
        <Route exact path="/pages/faq" component={Faq} />
 
        {currentUser.isAdmin && <Route exact path="/editProduct" component={AddProduct} />}
      </Switch>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick  
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </ThemeProvider>
  );
}
export default App;
