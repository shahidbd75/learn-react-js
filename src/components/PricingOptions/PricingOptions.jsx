import React, { use } from 'react';
import DaisyCard from './DaisyCard';

const PricingOptions = ({PriceOptionsPromise}) => {

    var pricePlans = use(PriceOptionsPromise);
    console.log(pricePlans);

    return (
        <div className='flex flex-wrap'>
            {pricePlans.map((plan) => (<DaisyCard PriceOption={plan} />))}
        </div>
    );
};

export default PricingOptions;