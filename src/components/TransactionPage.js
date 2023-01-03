import { Grid, GridColumn } from "semantic-ui-react";
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";
import TransactionForm from "./TransactionForm";


function TransactionPage(){

    return(
        <>
        <AppHeader/>
        <Grid>
            <GridColumn width={10}>
                <TransactionForm/>
            </GridColumn>
            <GridColumn width={6} floated='right'>
                <AppMenu/>
            </GridColumn>
        </Grid>
        </>
    );
}

export default TransactionPage;