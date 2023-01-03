import React from "react";
import { Container, Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";
import TabbedMenu from "./TabbedMenu";
import { Route, useRouteMatch } from "react-router-dom";
import CoinCard from "./CoinCard";

function ProfilePage(){
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