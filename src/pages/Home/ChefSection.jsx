import React, { useEffect, useState } from 'react';
import ChefData from './ChefData';

const ChefSection = () => {
    const [chefData, setChefData] = useState([]);
    const [showMore, setShowMore] = useState(false)
    useEffect(() => {
        fetch("https://ph-assignment-10-server-marufbroh.vercel.app/chef-data")
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])
    
    return (
        <div className='my-container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                {
                    chefData.slice(0, !showMore ? 6 : 10).map(chefData => <ChefData key={chefData.id} chefData={chefData} />)
                }
            </div>
            <div className='flex justify-center'>
                <button onClick={() => setShowMore(!showMore)} type='button' className={`btn-primary mt-10 ${showMore ? 'hidden' : ''}`}>
                    Show more
                </button>
            </div>
        </div>
    );
};

export default ChefSection;