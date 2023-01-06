import React, { useState } from "react";
import { Container, Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";
import TabbedMenu from "./TabbedMenu";
import { Route, useRouteMatch } from "react-router-dom";
import CoinCard from "./CoinCard";
import CashTab from "./CashTab";
import TransactionLog from "./TransactionLog";

function ProfilePage({userData, appData, userList}){

    
    console.log('userList:', userList);
    const currentUser= userList.find((user)=> user.name === userData.username);
    console.log('currentUser:', currentUser);

    const currentUserTransac = appData.filter((record)=> record.user_id === currentUser.id)
    console.log('current user transac:', currentUserTransac)

    const transactionList = currentUserTransac.map((record)=>{
        return <TransactionLog key={record.id}  record={record}/>
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
                    Conditionally render coins, transactions, or cash
                    <Route path={'/profile/coins'}>
                        <CoinCard/>
                    </Route>

                    <Route path={'/profile/cashavailable'}>
                        <CashTab currentUser={currentUser}/>
                    </Route>

                    <Route path={'/profile/transactions'}>
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