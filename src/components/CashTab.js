
import { useHistory } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";

function CashTab({currentUser, setDisplayForm}){
    const history = useHistory();

    function handleClick(){
        setDisplayForm(true)
        history.push('/newtransaction')
    }

    return(
            <Segment>
                <Header as='h3'> Available Cash</Header>
                <p>{`Currency: ${currentUser.currency}`}</p>
                <p>{` Balance: ${currentUser.cash}`}</p>
                <Button onClick={handleClick}>Fund</Button>
            </Segment>
    );
}

export default CashTab;