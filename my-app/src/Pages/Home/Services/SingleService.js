import React from 'react';
import {Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const SingleService = ({cycle}) => {
    console.log(cycle);
    const { image, price, description, productBrand,_id}= cycle
    const navigate = useNavigate()
    return (
        <Card className='col'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{productBrand}</Card.Title>
                <Card.Title>{price} $</Card.Title>
                <Card.Text>
                   {description.slice(0,90)}...
                </Card.Text>
                <Button onClick={()=>navigate(`/products/${_id}`)}>Place Order</Button>
            </Card.Body>
        </Card>
    );
};

export default SingleService;