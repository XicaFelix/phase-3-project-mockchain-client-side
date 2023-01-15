import CashForm from "./CashForm";
import CoinForm from "./CoinForm";


function TransactionForm({selectedRecord, setSelectedRecord, appData,setCurrentUser, currentUser, displayForm}){
  console.log('displayform', displayForm)

    return(
        <>
      {displayForm ? <CashForm setCurrentUser={setCurrentUser} currentUser= {currentUser}/> : <CoinForm selectedRecord={selectedRecord} setSelectedRecord={setSelectedRecord} appData={appData} currentUser={currentUser}/>}
      </>
    );
}

export default TransactionForm;