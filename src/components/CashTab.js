
import { Button, Header, Segment } from "semantic-ui-react";

function CashTab({currentUser}){

    return(
            <Segment>
                <Header as='h3'> Available Cash</Header>
                <p>Currency: {`${currentUser.currency}`} </p>
                <p> Balance: {`${currentUser.cash}`} </p>
                <Button>Fund</Button>
            </Segment>
    );
}

export default CashTab;