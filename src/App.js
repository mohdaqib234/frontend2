
import Header from "./Components/header";
import Login from "./Components/login";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from "./Components/gallery";
import Chat from "./Components/chat";
import Signup from "./Components/signup";


function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Route component={Login} path="/login"></Route>
        <Route component={Gallery} path="/gallery"></Route>
        <Route component={Chat} path="/chat"></Route>
        <Route component={Signup} path="/signup"></Route>
      </Router>
    </div>
  );
}

export default App;