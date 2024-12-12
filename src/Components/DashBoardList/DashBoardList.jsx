import { useContext } from "react";
import { CartlistDocument, RemoveID } from "../DashBoard/DashBoard";

const DashBoardList = ({ gadget }) => {

    const { product_id, description, product_title, product_image, price } = gadget;


    const [remove, setRemove] = useContext(RemoveID);
    const [setcartlistInfo] = useContext(CartlistDocument);
    setcartlistInfo(price);

    return (
        <div className="w-11/12 mx-auto">

            <div className="flex justify-between border border-gray-400 rounded-xl p-2 items-center m-4 shadow-xl ">
                <div className="flex items-center gap-4  p-4">

                    <div className="rounded-full w-24 h-24 overflow-hidden">
                        <img className="object-cover w-full h-full " src={product_image} alt="" />

                    </div>
                    <div >
                        <h1 className="font-bold" >{product_title}</h1>
                        <h1 className="text-gray-400 font-bold">{description}</h1>
                        <h1>Price: $ {price}</h1>
                    </div>


                </div>


                <div className="mx-4">
                    <button onClick={() => setRemove(product_id)} className="btn border-none bg-transparent shadow-none hover:bg-transparent "><img width="35" height="35" src="https://img.icons8.com/ios/50/recycle-bin.png" alt="recycle-bin" /></button>
                </div>



            </div>


        </div>
    );
};

export default DashBoardList;