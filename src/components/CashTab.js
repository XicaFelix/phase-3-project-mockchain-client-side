
import { Button, Header, Segment } from "semantic-ui-react";

function CashTab(){

    return(
            <Segment>
                <Header as='h3'> Available Cash</Header>
                <p>Currency: USD</p>
                <p> Balance: $xx</p>
                <Button>Fund</Button>
            </Segment>
    );
}

export default CashTab;