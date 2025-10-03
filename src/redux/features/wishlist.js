import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import Cookies from "js-cookie";
const initialState = {
    wishlistItems: Cookies.get("wishlist") ? JSON.parse(Cookies.get("wishlist")) : [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const obj = objCreater(action.payload)
            if(state.wishlistItems.find(item => item.id === obj.id)) {
               return
            } else {
                state.wishlistItems.push(obj)
                toast.success("Item added to wishlist")
            }
            Cookies.set("wishlist", JSON.stringify(state.wishlistItems), {
                expires: 7,
            });
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter(item => item.id !== objCreater(action.payload).id)
            Cookies.set("wishlist", JSON.stringify(state.wishlistItems), {
                expires: 7,
            });
        }
    }
})

const objCreater = (data) =>{
    return {
        id: data._id,
        name: data.name,
        price: data.price,
        image: data.image,
        quantity: data.quantity,
        color: data.color,
        size: data.size,
    }
}

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer