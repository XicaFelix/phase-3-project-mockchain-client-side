
import { useState } from "react";
import CashForm from "./CashForm";
import CoinForm from "./CoinForm";


function TransactionForm({selectedRecord, setSelectedRecord, appData, currentUser}){
    const [displayForm, setDisplayForm] = useState(false)

  

    return(
        <>
      {displayForm ? <CashForm/> : <CoinForm selectedRecord={selectedRecord} setSelectedRecord={setSelectedRecord} appData={appData} currentUser={currentUser}/>}
      </>
    );
}

export default TransactionForm;