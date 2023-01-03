import { Route, Switch } from "react-router-dom";

import AppHeader from "./components/AppHeader";
import LoginPage from "./components/LoginPage";
import TransactionLog from "./components/TransactionLog";


function App() {
  return (
    <Switch>
       <Route path= '/home'>
          <AppHeader/>
          <TransactionLog/>
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
