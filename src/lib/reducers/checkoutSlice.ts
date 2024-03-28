import { fetchCheckoutDetails } from "@/pages/api/fetchCheckoutDetails";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCacheWithExpiry, setCacheWithExpiry } from "@/utils/cache";
import IItem from "@/interface/common.interface";


const fetchCheckoutDetailsAsync = createAsyncThunk<
  { products: IItem[]; paymentMethods: string[] },
  void,
  { rejectValue: string }
>("checkout/fetchCheckout", async () => {

  const cachedItems = getCacheWithExpiry("checkout");
  const isItemsCached = getCacheWithExpiry("isItemsCached");


if (isItemsCached && cachedItems.products.length > 0 && cachedItems.paymentMethods.length > 0) {
    return cachedItems;
  }
  try {
    const response = await fetchCheckoutDetails();
    return response;
  } catch (error) {
    throw new Error("Failed to fetch checkout details");
  }
});


const initialState = {
  cartItems: [] as IItem[],
  cartTotal: 0,
  totalPrice: 0,
  discount: 0,
  shippingCost: 30,
  paymentMethods: [] as string[],
  paymentDetails: 
  {
    type: "UPI",
    upi: "",
    card: {
      cardHolderName:"",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  },
  shippingAddress: "",
  loading: false,
  error: null as string | null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload.products);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      state.cartTotal = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      if(item?.quantity === 0){
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
      state.cartTotal = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
      const updatedCart = state.cartItems;
      const paymentMethods = state.paymentMethods;
      setCacheWithExpiry("checkout", {products: updatedCart, paymentMethods }, 10);
    },
    addDiscount: (state, action) => {
      state.discount = action.payload;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },    
    updatePaymentDetails: (state, action) => {
      state.paymentDetails = action.payload;
    },
    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload.shippingAddress;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCheckoutDetailsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCheckoutDetailsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload.products;
        state.paymentMethods = action.payload.paymentMethods;
        state.cartTotal = action.payload.products?.reduce((acc, item) => acc + item.price * item.quantity, 0)
        setCacheWithExpiry("checkout", action.payload, 10);
        setCacheWithExpiry("isItemsCached" , true, 10);
      })
      .addCase(fetchCheckoutDetailsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch cart items";
      });      
  },
});



export { fetchCheckoutDetailsAsync };
export const { addItem, removeItem, updateQuantity, clearCart, updatePaymentDetails, updateShippingAddress, addDiscount } = checkoutSlice.actions;
export default checkoutSlice.reducer;