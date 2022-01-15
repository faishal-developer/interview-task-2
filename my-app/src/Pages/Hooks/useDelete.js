import { useState } from "react";

const useDelete = () => {
    let [existingOrders, setExistingOrders] = useState([])

    const handleDelete = (orderId,setOrders) => {

        fetch('https://hidden-forest-46700.herokuapp.com/orders', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: orderId })
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    let orders = existingOrders.filter(order => {
                        return order?._id !== orderId
                    })
                    setExistingOrders(orders)
                    setOrders(orders)
                } 
            })
            .catch(e => alert('error'))
    }

    return {
        existingOrders,
        setExistingOrders,
        handleDelete,
    }
};

export default useDelete;