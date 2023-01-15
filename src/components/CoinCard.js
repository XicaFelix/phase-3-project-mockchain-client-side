import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card} from "semantic-ui-react";


function CoinCard({coin, currentUser, selectedRecord, setSelectedRecord}){
  const history = useHistory();

  function handleClick(){
    setSelectedRecord({
      ...selectedRecord,
    buyer: '',
    record_id: 'New',
    coin: coin.name,
    price: 0,
    currency: currentUser.currency,
    seller: currentUser.name
    })
    history.push('/newtransaction')
  }

    return(
        <Card.Group>
         <Card>
          <Card.Content>
            <Card.Header content={coin.name.toUpperCase()} />
            <Card.Description>
             {`Cash: $ ${currentUser.cash} ${currentUser.currency}`}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button onClick={handleClick}>Buy/Sell</Button>
          </Card.Content>
        </Card>
        </Card.Group>
    );
}

export default CoinCard;