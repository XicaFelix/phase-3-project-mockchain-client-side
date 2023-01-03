import React from "react";
import { Button, Card, CardContent, CardGroup, CardHeader, CardMeta } from "semantic-ui-react";


function CoinCard(){

    return(
        <Card.Group>
         <Card>
          <Card.Content>
            <Card.Header content='Coin #1 Name' />
            <Card.Description>
             Investment: $xx
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button>Buy/Sell</Button>
          </Card.Content>
        </Card>
    
        <Card>
          <Card.Content>
            <Card.Header content='Coin #1 Name' />
            <Card.Description>
             Investment: $xx
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button>Buy/Sell</Button>
          </Card.Content>
        </Card>
    
        <Card>
          <Card.Content>
            <Card.Header content='Coin #1 Name' />
            <Card.Description>
             Investment: $xx
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button>Buy/Sell</Button>
          </Card.Content>
        </Card>
        
      </Card.Group>
    );
}

export default CoinCard;