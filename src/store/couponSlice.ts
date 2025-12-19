import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CouponState = {
  code: string | null;
  percentage: number;
};

const initialState: CouponState = {
  code: null,
  percentage: 0,
};

export const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    applyCoupon(state, action: PayloadAction<string>) {
      const code = action.payload.toUpperCase();

      if (code === "GBJEWEL10") {
        state.code = code;
        state.percentage = 10;
      } else if (code === "GBLUXE15") {
        state.code = code;
        state.percentage = 15;
      } else if (code === "GBPREMIER20") {
        state.code = code;
        state.percentage = 20;
      } else {
        state.code = null;
        state.percentage = 0;
      }
    },
    removeCoupon(state) {
      state.code = null;
      state.percentage = 0;
    },
  },
});

export const { applyCoupon, removeCoupon } = couponSlice.actions;
export default couponSlice.reducer;
