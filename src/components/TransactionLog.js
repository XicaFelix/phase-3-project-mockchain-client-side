import React from "react";
import { Feed, FeedContent } from "semantic-ui-react";

function TransactionLog({record, appData}){
    // console.log('record', record)
    let seller = appData.find((user)=> user.id === record.user_id)
    console.log('seller', seller)
    let buyer = appData.find((user)=> user.id === record.user_id)
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
                        {`${record.coin.name.toUpperCase()}`}
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

export default TransactionLog;