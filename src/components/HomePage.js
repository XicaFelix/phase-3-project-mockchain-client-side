import React from "react";
import AppHeader from "./AppHeader";
import TransactionLog from "./TransactionLog";
import { Grid, GridColumn } from "semantic-ui-react";
import AppMenu from "./AppMenu";

function HomePage(){

    return(
        <>
        <AppHeader/>
        <Grid>
            <GridColumn stretched width={12}>
                <TransactionLog />
            </GridColumn>
            <GridColumn width={4} floated='right'>
                <AppMenu/>
            </GridColumn>
        </Grid>
        </>
    );
}

export default HomePage;