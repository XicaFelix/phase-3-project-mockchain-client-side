import React from "react";
import { useHistory } from "react-router-dom";
import { Feed, FeedContent } from "semantic-ui-react";

function AppTransactionLog({record, appData, selectedRecord, setSelectedRecord}){
    const history = useHistory();
    let buyer = appData.find((user)=> user.id === record.user_id)
    let sellerId = buyer.coin_transactions[0].coin.user_id
    let seller = appData.find((user)=> user.id === sellerId)
    // console.log('buyer', buyer)
    // console.log('seller', seller)

    function handleClick(event){
        event.preventDefault();
        setSelectedRecord({...selectedRecord, 
            buyer: `${buyer.name}`,
            record_id: record.id,
            coin: `${buyer.coin_transactions[0].coin.name}`,
            price: record.price,
            currency: `${buyer.currency}`,
            seller: `${seller.name}`,
        })
        history.push('/newtransaction')
    }
   

    return (
        <div onClick={handleClick}>
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
        </div>
    );
}

export default AppTransactionLog;