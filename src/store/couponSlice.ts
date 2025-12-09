import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CouponState = {
  code: string;
  percentage: number;
};

const initialState: CouponState = {
  code: "",
  percentage: 0,
};

export const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    applyCoupon(state, action: PayloadAction<string>) {
      const code = action.payload.toUpperCase();
      state.code = code;

      switch (code) {
        case "GBJEWEL10":
          state.percentage = 10;
          break;
        case "GBLUXE15":
          state.percentage = 15;
          break;
        case "GBPREMIER20":
          state.percentage = 20;
          break;
        default:
          state.percentage = 0;
      }
    },

    clearCoupon(state) {
      state.code = "";
      state.percentage = 0;
    },
  },
});

export const { applyCoupon, clearCoupon } = couponSlice.actions;
export default couponSlice.reducer;
