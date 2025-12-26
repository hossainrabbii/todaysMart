import { RootState } from "@/redux/store";
import { IProductType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface ICartProduct extends IProductType {
  orderedQuantity: number;
}
interface IInitialStore {
  products: ICartProduct[];
  city: string;
  shippingAddress: string;
  shopId: string;
}

const initialState: IInitialStore = {
  products: [],
  city: "",
  shippingAddress: "",
  shopId: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      if (state.products.length === 0) {
        state.shopId = action.payload.shop._id;
      }
      const productExistToCart = state.products.find(
        (product) => product?._id === action?.payload?._id
      );
      if (productExistToCart) {
        productExistToCart.orderedQuantity += 1;
        return;
      }

      state.products.push({ ...action.payload, orderedQuantity: 1 });
    },
    incrementProduct: (state, action) => {
      const productToIncrement = state.products.find(
        (product) => product?._id === action?.payload
      );
      if (productToIncrement) {
        productToIncrement.orderedQuantity += 1;
        return;
      }
    },
    decrementProduct: (state, action) => {
      const productToIncrement = state.products.find(
        (product) => product?._id === action?.payload
      );
      if (productToIncrement && productToIncrement?.orderedQuantity > 1) {
        productToIncrement.orderedQuantity -= 1;
        return;
      }
    },
    removeProductFromCart: (state, action) => {
      state.products = state.products?.filter(
        (product) => product?._id !== action.payload
      );
    },
    updateCity: (state, action) => {
      state.city = action.payload;
    },
    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },

    clearCart: (state) => {
      state.products = [];
      state.city = "";
      state.shippingAddress = "";
    },
  },
});

export const citySelector = (state: RootState) => {
  return state.cart.city;
};
export const shippingAddressSelector = (state: RootState) => {
  return state.cart.shippingAddress;
};

export const cartedProduct = (state: RootState) => {
  return state.cart.products;
};

export const orderSelector = (state: RootState) => {
  return {
    products: state.cart.products.map((product: ICartProduct) => ({
      product: product._id,
      quantity: product.orderedQuantity,
      color: "white",
    })),
    shippingAddress: `${state.cart.shippingAddress} - ${state.cart.city}`,
    paymentMethod: "Online",
  };
};

export const shopSelector = (state: RootState) => {
  return state.cart.shopId;
};

export const subTotalSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product) => {
    if (product?.offerPrice) {
      return acc + product?.offerPrice * product?.orderedQuantity;
    } else {
      return acc + product?.price * product?.orderedQuantity;
    }
  }, 0);
};

export const shippingCostSelector = (state: RootState) => {
  if (state?.cart?.city === "") {
    return 0;
  } else if (
    state.cart.products.length > 0 &&
    state.cart.city &&
    state?.cart?.city === "Dhaka"
  ) {
    return 60;
  } else if (
    state.cart.products.length > 0 &&
    state.cart.city &&
    state?.cart?.city !== "Dhaka"
  ) {
    return 120;
  } else {
    return 0;
  }
};

export const grandTotalSelector = (state: RootState) => {
  const subTotal = subTotalSelector(state);
  const shippingCost = shippingCostSelector(state);
  return subTotal + shippingCost;
};

export const {
  addProduct,
  incrementProduct,
  decrementProduct,
  removeProductFromCart,
  updateCity,
  updateShippingAddress,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
