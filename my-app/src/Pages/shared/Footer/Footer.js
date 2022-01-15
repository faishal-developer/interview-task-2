import React from 'react';

const Footer = () => {
    return (
        <div container style={{ display: 'flex', justifyContent: 'space-between', padding: '30px', background: "#141616", borderTop: '1px solid' }}>
            <div >
                <span style={{ color: 'grey' }}>Copyright &copy; 2021</span>
            </div>
            <div >
                <span style={{ color: 'grey' }}>All Right Reserved-by mohammed faishal</span>
            </div>
        </div>
    );
};

export default Footer;