import { Button, ButtonGroup, Form, FormField, Header, Input, Label } from "semantic-ui-react";
import { useState } from "react";
import CashForm from "./CashForm";
import CoinForm from "./CoinForm";


function TransactionForm(){
    const [displayForm, setDisplayForm] = useState(true)

  

    return(
        <>
      {displayForm ? <CashForm/> : <CoinForm/>}
      </>
    );
}

export default TransactionForm;