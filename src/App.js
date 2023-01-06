import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import AppHeader from "./components/AppHeader";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import TransactionPage from "./components/TransactionPage";


function App() {

// setting up state to collect app data
  const [appData, setAppData] = useState([])
//  setting up state to collect login info data once logged in
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  })

// setting up state to collect all user info
const [userList, setUserList] = useState([])


// Fetching all seller data on page load
  useEffect(()=>{
    fetch('http://localhost:9292/mockchain/transactions')
    .then(resp=>resp.json())
    .then(data => setAppData(data));
  }, []);
  console.log(appData);


  // fetching all user info
  useEffect(()=>{
    fetch('http://localhost:9292/mockchain').then(resp=> resp.json()).then(data=> setUserList(data))
},[])
console.log(userList);


// fetching userData to authenticate login

  return (
    <Switch>
       <Route path= '/home'>
          <HomePage appData={appData}/>
        </Route>
        <Route path= '/profile'>
          <ProfilePage userData={userData} appData={appData} userList={userList}/>
        </Route>
        <Route path={'/newtransaction'}>
          <TransactionPage/>
        </Route>
      <Route path= '/'>
        <>
          <AppHeader/>
          <LoginPage userData={userData} onUserData={setUserData} userList={userList}/>
        </>
      </Route>
    </Switch>
      );
}

export default App;
