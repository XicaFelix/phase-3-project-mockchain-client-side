import React from "react";
import { Container, Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";
import TabbedMenu from "./TabbedMenu";

function ProfilePage(){

    return(
        <>
        <AppHeader/>
        <Grid>
            <GridColumn stretched width={12}>
                <Container>
                   <TabbedMenu/>
                </Container>
                <Container>
                    Conditionally render coins, transactions, or cash
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