import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import AppHeader from "./components/AppHeader";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import TransactionPage from "./components/TransactionPage";


function App() {

  // setting up state to fetch all app data
  const[appData, setAppData] = useState([]);

  // setting up state for current user & their info
  const [currentUser, setCurrentUser] = useState([]);

  //  setting up state for 

  // fetching all app data
  useEffect(()=>{
    fetch('http://localhost:9292/mockchain').then(resp=>resp.json()).then(data=>setAppData(data))
  }, [])
  
  return (
    <Switch>
       <Route path= '/home'>
          <HomePage appData={appData} currentUser={currentUser}/>
        </Route>
        <Route path= '/profile'>
          <ProfilePage appData={appData} currentUser={currentUser}/>
        </Route>
        <Route path={'/newtransaction'}>
          <TransactionPage/>
        </Route>
      <Route path= '/'>
        <>
          <AppHeader/>
          <LoginPage appData={appData} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </>
      </Route>
    </Switch>
      );
}

export default App;
