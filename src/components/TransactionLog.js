import React from "react";
import { useHistory } from "react-router-dom";
import { Feed, FeedContent } from "semantic-ui-react";

function TransactionLog({record, appData, selectedRecord, setSelectedRecord}){
    const history = useHistory();
    console.log('record', record)
    let sellerId = record.coin.user_id
    let seller = appData.find((user)=> user.id === sellerId)
    console.log('seller', seller)
    let buyer = appData.find((user)=> user.id === record.user_id)
    console.log('buyer', buyer)

    function handleClick(event){
        event.preventDefault();
        setSelectedRecord({...selectedRecord, 
            buyer: `${buyer.name}`,
            record_id: record.id,
            coin: `${record.coin.name}`,
            price: record.price,
            currency: `${buyer.currency}`,
            seller: `${seller.name}`,
        })
        console.log('selected record', selectedRecord)
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
        </div>
    );
}

export default TransactionLog;