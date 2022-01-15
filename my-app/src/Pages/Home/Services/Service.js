import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleService from './SingleService';

const Service = (props) => {
    const [cycles, setCycles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [open, setOpen] = React.useState([false, '']);

    const handleClose = () => {
        setOpen(false, '');
    };
   
    useEffect(() => {
        fetch('https://hidden-forest-46700.herokuapp.com/bycycles')
            .then(res => res.json())
            .then(data => {
                setCycles(data)
                setIsLoading(false)
            })
            .catch(e => {
                setOpen([true, e.message])
            })
            .finally(() => {
                console.log('')
            })
    }, [])
    if(cycles.length<1){
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    
    return (
        <div>
            <h2 className='text-center m-5 pt-5'>Products</h2>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                cycles.map((cycle,i)=>{
                    if(i<9){
                        return <SingleService key={i} cycle={cycle}/>
                    }
                })
            }
        </div>
        </div>
    );
};

export default Service;