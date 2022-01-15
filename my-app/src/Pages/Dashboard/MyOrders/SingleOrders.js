import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleOrders = (props) => {
    const {image,price,productName,_id} = props.order
    const handleDelete=()=>{
        props.delete(_id,props.setOrders)
    }
    return (
        <Card className='col'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Product Name: {productName}</Card.Title>
                <Card.Text>
                    Order Id: {_id}
                </Card.Text>
                <Card.Text>
                    Order price: {price}
                </Card.Text>
                <Button onClick={()=>handleDelete()} variant="danger">delete</Button>
            </Card.Body>
        </Card>
    );
};

export default SingleOrders;