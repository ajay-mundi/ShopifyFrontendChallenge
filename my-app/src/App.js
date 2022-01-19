import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AboutPage from "./LikedPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/About_Us" component={AboutPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
