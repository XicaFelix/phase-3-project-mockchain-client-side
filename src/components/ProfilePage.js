import React from "react";
import { Container, Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";
import TabbedMenu from "./TabbedMenu";
import { Route, useRouteMatch } from "react-router-dom";
import CoinCard from "./CoinCard";
import CashTab from "./CashTab";
import TransactionLog from "./TransactionLog";

function ProfilePage({appData, currentUser, selectedRecord, setSelectedRecord, setDisplayForm}){
    console.log('currentUser', currentUser)

    const transactionList = currentUser.coin_transactions.map((record)=>
        <TransactionLog key={record.id} record={record} appData={appData} selectedRecord={selectedRecord} setSelectedRecord={setSelectedRecord} setDisplayForm={setDisplayForm}/> 
    )

    const userCoins = currentUser.coin_transactions.map((record)=>{
        let coin = record.coin;
        return <CoinCard key={coin.id} coin={coin} currentUser={currentUser} selectedRecord={selectedRecord} setSelectedRecord={setSelectedRecord}/>
    })
    return(
        <>
        <AppHeader/>
        <Grid>
            <GridColumn stretched width={12} floated='left'>
                <Container>
                   <TabbedMenu/>
                </Container>

                <Container>

                    <Route path={'/profile/coins'}>
                        <br/>
                        {userCoins}
                    </Route>

                    <Route path={'/profile/cashavailable'}>
                        <CashTab currentUser={currentUser} setDisplayForm={setDisplayForm}/>
                    </Route>

                    <Route path={'/profile/transactions'}>
                        <br/>
                       {transactionList}
                    </Route>
                </Container>
            </GridColumn>

            <GridColumn stretched width={4}>
                <AppMenu/>
            </GridColumn>
        </Grid>
        </>
    );
}

export default ProfilePage;