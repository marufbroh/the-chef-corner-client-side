import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const ChefDetails = () => {
    const singleChefData = useLoaderData();
    // const kup = (dfdf) => 
    // console.log(singleChefData);
    const { id, chef_name, chef_picture, years_of_experience, num_recipes, likes, short_bio, recipes } = singleChefData;
    console.log(recipes);
    return (
        <section className='my-container flex flex-col space-y-10'>
            <div className="card lg:card bg-base-100 shadow-xl">
                <figure><img src={chef_picture} alt="Chef Picture" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-5xl">Name: {chef_name}</h2>
                    <p className='text-xl'> <span className='font-semibold'>Short Bio: </span>{short_bio}</p>
                    <p className='font-semibold text-xl'>Experience: {years_of_experience} years+</p>
                    <p className='font-semibold text-xl'>Likes: {likes}</p>
                    <p className='font-semibold text-xl'>Number of Recipes: {num_recipes}</p>
                    {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div> */}
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mx-auto lg:gap-10'>
                {
                    recipes.map((recipe, index) => <RecipeDetails key={index} recipe={recipe} />)
                }
            </div>
        </section>
    );
};

export default ChefDetails;