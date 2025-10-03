import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import Cookies from "js-cookie";

const initialState = {
  cartItems: Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === objCreater(action.payload).id
      );
      if (existingItem) {
        if(existingItem.quantity > 9){
          toast.error("Quantity limit exceeded");
          return;
        }
        existingItem.quantity += 1;
        toast.success("Item quantity increased");
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        toast.success("Item added to cart");
      }
      Cookies.set("cart", JSON.stringify(state.cartItems), {
        expires: 7,
      });
    },
    removeFromCart: (state, action) => {
      const filteredItems = state.cartItems.filter(
        (item) => item.id !== objCreater(action.payload).id
      );
      state.cartItems = filteredItems;
      Cookies.set("cart", JSON.stringify(state.cartItems), {
        expires: 7,
      });
    },
    totalAmount: (state, action) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      state.totalPrice = total;
    },

    totalQuantity: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.quantity;
      });
      state.totalQuantity = total;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        if(quantity > 9){
          toast.error("Quantity limit exceeded");
          return;
        }
        item.quantity = quantity;
      }
      Cookies.set("cart", JSON.stringify(state.cartItems), {
        expires: 7,
      });
    },
    updateFullCart: (state, action) => {
      state.cartItems = action.payload;
      Cookies.set("cart", JSON.stringify(state.cartItems), { expires: 7 });
    },
  },
});

const objCreater = (data) => {
  return {
    id: data._id,
    name: data.name,
    price: data.price,
    image: data.image,
    quantity: data.quantity,
    color: data.color,
    size: data.size,
  };
};

export const {
  addToCart,
  removeFromCart,
  totalQuantity,
  updateQuantity,
  totalAmount,
  updateFullCart,
} = cartSlice.actions;
export default cartSlice.reducer;


// add to cart function api call
export const addCart = () => async (dispatch) => {
  const user = Cookies.get("user");
  const cart = Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [];

  if (!user) return;

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/cart/add`,
      { fullCart: cart },
      { headers: { Authorization: `Bearer ${user}` } }
    );

    console.log(res.data);

 
  } catch (err) {
    console.error(err);
  }
};
