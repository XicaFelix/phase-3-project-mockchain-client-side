import React from "react";
import { Feed, FeedContent } from "semantic-ui-react";

function TransactionLog(){

    return (
        <>
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <img src="https://via.placeholder.com/50" alt="placeholder"/>
                    </Feed.Label>
                    <Feed.Content>
                        Sample Transaction #
                    </Feed.Content>
                    <FeedContent>
                        Sample Price $
                    </FeedContent>
                    <FeedContent>
                        Sample Username 
                    </FeedContent>
                    <FeedContent>
                        Sample Coin
                    </FeedContent>
                </Feed.Event>
                <Feed.Event>
                    <Feed.Label>
                        <img src="https://via.placeholder.com/50" alt="placeholder"/>
                    </Feed.Label>
                    <Feed.Content>
                        Sample Transaction #
                    </Feed.Content>
                    <FeedContent>
                        Sample Price $
                    </FeedContent>
                    <FeedContent>
                        Sample Username 
                    </FeedContent>
                    <FeedContent>
                        Sample Coin
                    </FeedContent>
                </Feed.Event>
                <Feed.Event>
                    <Feed.Label>
                        <img src="https://via.placeholder.com/50" alt="placeholder"/>
                    </Feed.Label>
                    <Feed.Content>
                        Sample Transaction #
                    </Feed.Content>
                    <FeedContent>
                        Sample Price $
                    </FeedContent>
                    <FeedContent>
                        Sample Username 
                    </FeedContent>
                    <FeedContent>
                        Sample Coin
                    </FeedContent>
                </Feed.Event>
            </Feed>
        </>
    );
}

export default TransactionLog;