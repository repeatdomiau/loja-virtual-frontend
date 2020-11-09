import React from 'react';

const Badge = ({ value, background = 'white' }) => {

    return (
        <span className='badge' style={{ backgroundColor: background }}>
            { value}
        </span >
    );

}

export default Badge;