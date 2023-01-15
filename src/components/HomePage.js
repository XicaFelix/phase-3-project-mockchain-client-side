import React, { useEffect, useState } from "react";
import AppHeader from "./AppHeader";
import AppTransactionLog from "./AppTransactionLog";
import { Grid, GridColumn, Table, TableBody, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";
import AppMenu from "./AppMenu";

function HomePage({appData, selectedRecord, setSelectedRecord, setDisplayForm}){

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
        return <AppTransactionLog key={record.id} record={record} appData={appData} selectedRecord={selectedRecord} setSelectedRecord={setSelectedRecord} setDisplayForm={setDisplayForm}/>
    })


    return(
        <>
        <AppHeader/>
        <Grid>
            <GridColumn stretched width={12}>
                <Table celled selectable color="black" inverted>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Seller</TableHeaderCell>
                            <TableHeaderCell>Transaction #</TableHeaderCell>
                            <TableHeaderCell>Coin</TableHeaderCell>
                            <TableHeaderCell>Price</TableHeaderCell>
                            <TableHeaderCell>Buyer</TableHeaderCell>
                            <TableHeaderCell> Initiated</TableHeaderCell>
                            <TableHeaderCell>Executed</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {transactionList}
                    </TableBody>

                </Table>
                
            </GridColumn>
            <GridColumn width={4} floated='right'>
                <AppMenu/>
            </GridColumn>
        </Grid>
        </>
    );
}

export default HomePage;