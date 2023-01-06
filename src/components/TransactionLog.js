import React from "react";
import { Feed, FeedContent } from "semantic-ui-react";

function TransactionLog({record}){

    return (
        <>
            <Feed>

                <Feed.Event>

                    <Feed.Label>
                        <img src={record.seller.avatar}/>
                    </Feed.Label>

                    <FeedContent>
                    {`Seller ${record.seller.name}`}
                    </FeedContent>

                    <FeedContent>
                    {`Buyer ${record.user_id}`}
                    </FeedContent>

                    <Feed.Content>
                      { `Transaction Number: ${record.id}`}
                    </Feed.Content>

                    <FeedContent>
                    {`Executed ${record.created_at}`}
                    </FeedContent>

                    <FeedContent>
                    {`Price ${record.price}`}
                    </FeedContent>

                </Feed.Event>
               
            </Feed>
        </>
    );
}

export default TransactionLog;