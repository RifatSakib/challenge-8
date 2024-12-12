
const getStoredCardList = () => { //loclastorage theke data neya
    // card-list
    const storedListStr = localStorage.getItem('card-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}





const addToStoredCardList = (id) => { //local storage data insert kora
    const storedList = getStoredCardList(); // khuje dekha localjost a kono item ase kina
    if (storedList.includes(id)) {
       

        return true;
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('card-list', storedListStr);
      

            return false
    }
}


const removeFromLocalStorage = (id) => {
    const cartList = localStorage.getItem('card-list');

    if (cartList) {
        const parsedCartList = JSON.parse(cartList);

        const updatedCartList = parsedCartList.filter(item => item !== id);

        localStorage.setItem('card-list', JSON.stringify(updatedCartList));
    } else {
        console.log('No cart-list found in localStorage.');
    }
}





const getStoredWishList = () => {
    // read-list
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        return true;
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
       return false;

    }
}


const removeWishListFromLocalStorage = (id) => {
    const cartList = localStorage.getItem('wish-list');

    if (cartList) {
        const parsedCartList = JSON.parse(cartList);

        const updatedCartList = parsedCartList.filter(item => item !== id);

        localStorage.setItem('wish-list', JSON.stringify(updatedCartList));
    } else {
        console.log('No wish-list found in localStorage.');
    }
}


export { addToStoredCardList, addToStoredWishList, getStoredWishList, getStoredCardList, removeFromLocalStorage, removeWishListFromLocalStorage }