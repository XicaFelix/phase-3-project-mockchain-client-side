import React from "react";
import { useHistory } from "react-router-dom";
import { Table, TableRow, TableCell, TableHeader, TableHeaderCell, Image } from "semantic-ui-react";

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
        <Table inverted color="black"> 
              <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Seller</TableHeaderCell>
                            <TableHeaderCell>Transaction #</TableHeaderCell>
                            <TableHeaderCell>Coin</TableHeaderCell>
                            <TableHeaderCell>Price</TableHeaderCell>
                            <TableHeaderCell>Buyer</TableHeaderCell>
                            <TableHeaderCell> Initiated</TableHeaderCell>
                            <TableHeaderCell>Executed</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
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
            </Table>
    );
}

export default TransactionLog;