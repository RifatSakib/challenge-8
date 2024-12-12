import React from 'react';
import Banner from '../Banner/Banner';
// import Gadgets from '../Gadgets/Gadgets';
import Category from '../Category/Category';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {

    const categories = useLoaderData()

    return (
        <div>
            <Banner></Banner>

            <h2 className="text-4xl font-bold text-center text-[rgb(149,56,226)]">Explore Cutting-Edge Gadgets</h2>


            <div className="flex gap-3 mt-20">

                <div className=" w-2/12 ">
                    <Category categories={categories}></Category>
                </div>

                <div className='w-10/12 '>
                    <Outlet></Outlet>

                </div>

                </div>
       

            {/* <Gadgets></Gadgets> */}
            {/* px-8 py-3 border h-fit rounded-xl space-y-2 */}
            {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 */}

        </div>
    );
};

export default Home;