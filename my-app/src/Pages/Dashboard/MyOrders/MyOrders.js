import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { MyContext } from '../../Hooks/AuthProvider';
import useDelete from '../../Hooks/useDelete';
import SingleOrders from './SingleOrders';

const MyOrders = () => {
    const { handleDelete, existingOrders, setExistingOrders } = useDelete()
    const [orders,setOrders] = useState([])
    const { user, isLoading } = useContext(MyContext)


    useEffect(() => {
            fetch('https://hidden-forest-46700.herokuapp.com/getOrders', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email: user.email })
            })
                .then(res => res.json())
                .then(data => {
                    setExistingOrders(data)
                    setOrders(data)
                })
                .catch((e) => {
                    alert(e.message)
                })
    }, [user.email,setExistingOrders])
    console.log(orders);
    if(orders.length<1){
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
           {
             orders.length>=1 &&  orders.map((order,i)=><SingleOrders setOrders={setOrders} key={i} delete={handleDelete} order={order}/>)
           } 
        </div>
    );
};

export default MyOrders;