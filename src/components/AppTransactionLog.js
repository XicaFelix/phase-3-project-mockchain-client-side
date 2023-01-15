import React from "react";
import { useHistory } from "react-router-dom";
import { Feed, FeedContent, Image, Table, TableCell, TableRow } from "semantic-ui-react";

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
        
            <TableRow onClick={handleClick}>
                <TableCell> 
                    <span> 
                        <Image src={buyer.avatar} alt={`User ${buyer.id} profile`} avatar/>
                         {`${buyer.name}`}
                    </span> 
                </TableCell>
                <TableCell>
                {` ${record.id}`}
                </TableCell>
                <TableCell>
                {`${buyer.coin_transactions[0].coin.name.toUpperCase()}`}
                </TableCell>
                <TableCell>
                {`${record.price}  ${buyer.currency}`}
                </TableCell>
                <TableCell>
                <span> 
                    <Image src={seller.avatar} alt={`User ${seller.id} profile`} avatar />
                    {`${seller.name}`} 
                    </span> 
                </TableCell>
                <TableCell>
                    {`${record.created_at}`}
                </TableCell>
                <TableCell>
                    {`${record.updated_at}`}
                </TableCell>
                
            </TableRow>
           
           
        
    );
}

export default AppTransactionLog;