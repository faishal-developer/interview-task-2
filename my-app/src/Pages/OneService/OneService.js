import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { MyContext } from '../Hooks/AuthProvider';

const OneService = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const [order, setOrder] = useState({})
    const { user } = useContext(MyContext)

    const handleChange = (e) => {
        let newOrder = { ...order };
        newOrder[e.target.name] = e.target.value
        setOrder(newOrder)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let newOrder = { ...order };
        newOrder.userName = user.displayName;
        newOrder.email = user.email;
        newOrder.productName = product.productBrand;
        newOrder.productId = id;
        newOrder.image = product.image
        newOrder.price = product.price
        fetch(`https://hidden-forest-46700.herokuapp.com/orders`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    alert('placed order')
                }
            })
            .catch(err => {
                alert('error occured')
            })
            .finally(() => {
                e.target.reset()
            })
    }

    useEffect(() => {
        fetch(`https://hidden-forest-46700.herokuapp.com/bycycles/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(e => alert(e.message))
    }, [id])
    console.log(id);
    return (
        <div className='row row-cols-1 row-cols-md-2'>
            <div className='col'>
                <Card>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{ product.productBrand }</Card.Title>
                        <Card.Title>{product.price }</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div  className='col'>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="district"
                        onChange={handleChange}
                        required
                        style={{ width: '100%', marginRight: '2%' }}
                        id="filled-required"
                        label="district"
                        name="district"
                    /><br />
                    <input
                        placeholder="upazilla"
                        onChange={handleChange}
                        required
                        style={{ width: '100%', marginRight: '2%' }}
                        id="filled-required"
                        label="upazilla"
                        name="upazilla"
                    /><br />
                    <input
                        placeholder="citycode"
                        onChange={handleChange}
                        required
                        id="filled-required"
                        style={{ width: '100%', marginRight: '2%' }}
                        label="village Or CityCode"
                        name="villageOrCityCode"
                    />
                    <br />
                    <Button style={{ width: '100%', marginRight: '2%' }} className='btn' type="submit">Confirm Order</Button>
                </form>
            </div>
        </div>
    );
};

export default OneService;