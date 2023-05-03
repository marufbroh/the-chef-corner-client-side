import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const singleChefData  = useLoaderData();
    console.log(singleChefData);
    return (
        <div>
            Chef details
        </div>
    );
};

export default ChefDetails;