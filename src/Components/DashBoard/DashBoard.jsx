import { createContext, useEffect, useState } from "react";
import { getStoredCardList, getStoredWishList, removeFromLocalStorage, removeWishListFromLocalStorage } from "../Utility/addToDb";
import { useLoaderData } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import DashBoardList from "../DashBoardList/DashBoardList";
import DashBoardWishList from "../DashBoardWishList/DashBoardWishList";


// contextAPI
export const RemoveID = createContext("");
export const RemoveWishID = createContext("");
export const CartlistDocument = createContext("")

const DashBoard = () => {

    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const allCarts = useLoaderData();

    const [remove, setRemove] = useState(null);
    const [removeWishId, setRemoveWishID] = useState(null);
    // console.log(remove);
    // console.log(removeWishId);

    const [cartlistInfo, setcartlistInfo] = useState(null);


    // const remaining = cartList.filter(item => item. !== Product_id);
    // setCartList(remaining)

    const handleRemove = () => {

        removeFromLocalStorage(remove);


    }

    const handleRemoveWishID = () => {

        removeWishListFromLocalStorage(removeWishId);

    }


    if (remove != null) {
        handleRemove();
    }

    if (removeWishId != null) {
        handleRemoveWishID();
    }





    useEffect(() => {
        const storedCardList = getStoredCardList();
        // worst way

        const FilteredCartList = allCarts.filter(carts => storedCardList.includes(carts.product_id));

        setCartList(FilteredCartList);

    }, [allCarts]);


    useEffect(() => {
        const storedCardList = getStoredWishList();
        // worst way

        const FilteredWishList = allCarts.filter(carts => storedCardList.includes(carts.product_id));

        setWishList(FilteredWishList);

    }, []);


    // for toggle button toggleDashboardBtn

    const [toggleBtn, setToggleBtn] = useState(true)


    const handleToogleBtn = (result) => {
        setToggleBtn(result);
    }

    return (
        <div>

            <div className="bg-[rgb(149,56,226)] text-white space-y-8 text-center p-10 pb-40 rounded-b-3xl">
                <h1 className="text-6xl mx-auto font-bold  md:w-10/12">DashBoard</h1>
                <p className="md:w-6/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className="flex flex-row gap-3 justify-center">
                    <button onClick={() => handleToogleBtn(true)} className="btn btn-outline rounded-full border border-white text-white px-10 font-bold hover:bg-white focus:bg-white focus:text-[rgb(149,56,226)] hover:text-[rgb(149,56,226)]">Cart</button>
                    <button onClick={() => handleToogleBtn(false)} className="btn btn-outline rounded-full  border border-white text-white px-8 font-bold hover:bg-white focus:bg-white focus:text-[rgb(149,56,226)] hover:text-[rgb(149,56,226)]" >WishList</button>
                </div>


            </div>

            <div  className ={`flex justify-between px-8 py-8 items-center ${toggleBtn? "block" : "hidden"}`}>
                <div>
                    <h1 className="text-xl font-bold">Cart</h1>
                </div>

                <div  className="flex items-center gap-3">

                    <h1 className="text-xl font-bold">Total Cost: $ {cartlistInfo} </h1>

                    <div className="flex flex-row gap-2 items-center">
                        <button className="btn btn-outline rounded-full border  px-10 font-bold hover:bg-[rgb(149,56,226)] focus:bg-[rgb(149,56,226)] hover:text-white ">Sort By Price</button>
                        <button className="btn btn-outline rounded-full border   px-10 font-bold hover:bg-[rgb(149,56,226)] focus:bg-[rgb(149,56,226)] hover:text-white ">Purchase</button>
                    </div>


                </div>
            </div>


            <div  className={`${toggleBtn? "hidden":"block"}`}>
                <h1 className="text-xl font-bold py-8 items-center">Wish List</h1>
            </div>





            <CartlistDocument.Provider value = {[setcartlistInfo]}>
            <RemoveWishID.Provider value={[removeWishId, setRemoveWishID]}>
                <RemoveID.Provider value={[remove, setRemove]}>


                    {

                        toggleBtn ? cartList.map(gadget => <DashBoardList key={gadget.product_id} gadget={gadget}></DashBoardList>) : wishList.map(gadget => <DashBoardWishList key={gadget.product_id} gadget={gadget}></DashBoardWishList>)

                    }





                </RemoveID.Provider>

            </RemoveWishID.Provider>

        </CartlistDocument.Provider>


        </div>
    );
};

export default DashBoard;