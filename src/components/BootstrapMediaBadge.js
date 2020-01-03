import React from 'react';
import { Badge } from 'react-bootstrap';


const BootstrapMediaBadge = () => {

    return (
        <div style={{position: 'fixed', left: 0, top: 0}}>
            <Badge variant='primary' className='d-inline-block d-sm-none'>XS</Badge>
            <Badge variant='secondary' className='d-none d-sm-inline-block d-md-none'>SM</Badge>
            <Badge variant='success' className='d-none d-md-inline-block d-lg-none'>MD</Badge>
            <Badge variant='warning' className='d-none d-lg-inline-block d-xl-none'>LG</Badge>
            <Badge variant='danger' className='d-none d-xl-inline-block'>XL</Badge>
        </div>
    );
}


export default BootstrapMediaBadge;