import { Grid, GridColumn } from "semantic-ui-react";
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";
import TransactionForm from "./TransactionForm";


function TransactionPage({selectedRecord, setSelectedRecord, appData, setCurrentUser, currentUser, displayForm, setDisplayForm}){

    return(
        <>
        <AppHeader/>
        <Grid>
            <GridColumn width={10}>
                <TransactionForm selectedRecord={selectedRecord} setSelectedRecord={setSelectedRecord} appData={appData} setCurrentUser={setCurrentUser} currentUser={currentUser} displayForm={displayForm} setDisplayForm={setDisplayForm}/>
            </GridColumn>
            <GridColumn width={6} floated='right'>
                <AppMenu/>
            </GridColumn>
        </Grid>
        </>
    );
}

export default TransactionPage;