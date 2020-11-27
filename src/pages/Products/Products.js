import React from 'react';
import { InfoSection } from '../../components';
import { homeObjThree, homeObjFour } from '../HomePage/Data';

function Products() {
    return (
        <>
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
        </>
    );
}

export default Products;