import { Route, Switch } from "react-router-dom";

import AppHeader from "./components/AppHeader";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";


function App() {
  return (
    <Switch>
       <Route path= '/home'>
          <HomePage/>
        </Route>
        <Route path= '/profile'>
          <ProfilePage/>
        </Route>
      <Route path= '/'>
        <>
          <AppHeader/>
          <LoginPage/>
        </>
      </Route>
    </Switch>
      );
}

export default App;
