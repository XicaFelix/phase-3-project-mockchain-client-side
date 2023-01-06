import React from "react";
import AppHeader from "./AppHeader";
import TransactionLog from "./TransactionLog";
import { Grid, GridColumn } from "semantic-ui-react";
import AppMenu from "./AppMenu";

function HomePage({appData}){
    console.log('App data:', appData)

    const transactionList = appData.map((record)=>{

        return <TransactionLog key={record.id} record={record}/>}
    )

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