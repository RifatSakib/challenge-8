import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredCardList, addToStoredWishList } from "../Utility/addToDb";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GadgetDetails = () => {

    const { gadgetID } = useParams();
    const data = useLoaderData();
    // const id = parseInt(gadgetID);


    const gadget = data.find(newgadget => newgadget.product_id === gadgetID);


    const { product_title, product_image, price, product_id, description, availability, Specification, rating } = gadget
    
    
    const handleAddToCart = (id) =>{
      
       const idd =  addToStoredCardList(id);
        
       
            if(idd == true){
                toast("already in Cart")
            }
    
            if(idd == false){
                toast("added in Cart")
            }
      
    }
    
    
    const handleAddToWishList = (id) =>{
        const idd = addToStoredWishList(id);
        if(idd == true){
            toast("already in WishList")
        }

        if(idd == false){
            toast("added in Wish List ")
        }
    }
    

    
    
    
    return (
        <div className='relative mb-96 shadow-xl'>
            {/* banner info */}
            <div className="bg-[rgb(149,56,226)] text-white space-y-8 text-center p-10 pb-40 rounded-b-3xl">
                <h1 className="text-6xl mx-auto font-bold  md:w-10/12">Product Details</h1>
                <p className="md:w-6/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            </div>


            {/* banner image */}


            <div className='absolute left-[10%] top-[70%] h-[493px] w-[962px] p-4 border rounded-xl flex bg-white '>
                <div>

                    <img className=' p-0  w-full h-full rounded-xl' src={product_image} alt="This is a image" />
                </div>

                <div className="pl-3 space-y-2 ">
                    <h1 className="text-3xl font-bold ">{product_title}</h1>
                    <p className="text-xl">Price: ${price}</p>
                    <button className={availability ? "btn btn-outline btn-accent rounded-full" : "btn btn-outline btn-error rounded-full"}>{availability ? "In Stock" : "Out Of Stock"} </button>

                    <p className="text-gray-500">{description}</p>

                    <p className="font-bold">Specification:</p>



                    {

                        Specification.map(data => (<li className="list-decimal text-gray-500 " key={product_id}> {data} </li>))

                    }


                    <p className="font-bold">Rating:</p>
                    <div className="flex items-center gap-3">
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>

                        <div>
                            <p className="btn btn-active rounded-full">  {rating}</p>
                        </div>

                    </div>

                    <div className=" flex  flex-row items-center gap-3">
                        <button onClick={() => handleAddToCart(product_id)} className="btn btn-active btn-primary rounded-full">Add To Cart <img className="text-white" width="15" height="15" src="https://img.icons8.com/material-outlined/24/shopping-cart--v1.png" alt="shopping-cart--v1"/> </button>


                        <div  className="btn btn-ghost btn-circle bg-white border border-gray-400">
                            <div onClick={() => handleAddToWishList(product_id)} className="indicator">
                                <img width="15" height="15" src="https://img.icons8.com/material-outlined/24/filled-like.png" alt="filled-like" />
                            </div>
                        </div>



                    </div>








                </div>


            </div>

            <ToastContainer />
        </div>
    );
};

export default GadgetDetails;