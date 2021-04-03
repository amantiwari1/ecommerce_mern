import { ThemeProvider } from './theme/themeContext';
import GlobalStyles from './theme/globalStyles'
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Toggle from './theme/themeToggle'


function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Toggle />
      <Switch>
        <Route exact path="/"  component={Home}  />
      </Switch>
    </ThemeProvider>
  );
}
export default App;