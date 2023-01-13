import React, { useEffect, useState } from "react";
import AppHeader from "./AppHeader";
import AppTransactionLog from "./AppTransactionLog";
import { Grid, GridColumn } from "semantic-ui-react";
import AppMenu from "./AppMenu";

function HomePage({appData, selectedRecord, setSelectedRecord}){

    // setting up state for transactions
    const [transactions, setTransactions] = useState([])
  
    useEffect(()=>{
        fetch('http://localhost:9292/mockchain/transactions')
        .then(resp=>resp.json())
        .then(data=> setTransactions(data))
    }, [])
    console.log(transactions)
    console.log(appData)
    const transactionList = transactions.map((record)=>{
        return <AppTransactionLog key={record.id} record={record} appData={appData} selectedRecord={selectedRecord} setSelectedRecord={setSelectedRecord}/>
    })


    return(
        <>
        <AppHeader/>
        <Grid>
            <GridColumn stretched width={12}>
                {transactionList}
            </GridColumn>
            <GridColumn width={4} floated='right'>
                <AppMenu/>
            </GridColumn>
        </Grid>
        </>
    );
}

export default HomePage;