import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import { useLoaderData, useParams } from "react-router-dom";

const Gadgets = () => {


    const data = useLoaderData()

    const { categories } = useParams()
    // console.log(categories);


    const [gadgets, setGadgets] = useState([]);


    useEffect(() => {
        if (categories) {
            if(categories != "All Products") {

                const filteredByCategory = [...data].filter(
                    gadget => gadget.category === categories
                )
                setGadgets(filteredByCategory)

            }

            else{
                setGadgets(data)
            }
        }

      
        else {
            setGadgets(data)
        }
    }, [categories, data]);


   

    return (
        <div  >


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                }

            </div>


        </div>
    );
};

export default Gadgets;