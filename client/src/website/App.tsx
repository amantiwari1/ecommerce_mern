import { ThemeProvider } from './theme/themeContext';
import GlobalStyles from './theme/globalStyles'
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import {Navbar} from './components'
 

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/"  component={Home}  />
      </Switch>
    </ThemeProvider>
  );
}
export default App;