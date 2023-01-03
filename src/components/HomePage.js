import React from "react";
import AppHeader from "./AppHeader";
import TransactionLog from "./TransactionLog";

function HomePage(){

    return(
        <>
            <AppHeader/>
            <TransactionLog />
        </>
    );
}

export default HomePage;