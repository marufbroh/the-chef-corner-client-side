import React from 'react';
import { Link } from 'react-router-dom';

const ChefData = ({ chefData }) => {
    // console.log(singleChefData);
    const { id, chef_name, chef_picture, years_of_experience, num_recipes, likes } = chefData;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='lg:w-80'><img src={chef_picture} alt="chefPicture" /></figure>
            <div className="card-body">
                <h2 className="card-title">{chef_name}</h2>
                <p className='font-semibold'>Years of Experience: {years_of_experience}</p>
                <p className='font-semibold'>Likes: {likes}</p>
                <p className='font-semibold'>Number of Recipes: {num_recipes}</p>
                <div className="card-actions justify-end">
                    <Link to={`/chef-details/${id}`}><button className="btn-primary">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefData;