import React from "react";
import { Feed, FeedContent } from "semantic-ui-react";

function AppTransactionLog({record, appData}){
    let buyer = appData.find((user)=> user.id === record.user_id)
    let sellerId = buyer.coin_transactions[0].coin.user_id
    let seller = appData.find((user)=> user.id === sellerId)
    console.log('buyer', buyer)
    console.log('seller', seller)
   

    return (
        <>
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <img src={buyer.avatar} alt={`User ${buyer.id} profile`}/>
                    </Feed.Label>
                    <FeedContent>
                        {`${buyer.name}`}
                    </FeedContent>
                    <Feed.Content>
                        {`Transaction # ${record.id}`}
                    </Feed.Content>
                    <FeedContent>
                        {`${buyer.coin_transactions[0].coin.name.toUpperCase()}`}
                    </FeedContent>
                    <FeedContent>
                        {`${record.price}  ${buyer.currency}`}
                    </FeedContent>
                    <FeedContent>
                        {`${seller.name}`}
                    </FeedContent>
                </Feed.Event>
            </Feed>
        </>
    );
}

export default AppTransactionLog;