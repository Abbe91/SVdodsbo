import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "info@alladodsbo.se",
  phone: "07000000",
  business: "Döddsbo Sv",
  adress: "Västra Hamngatan 6",
  zip: "411 17",
  city: "Göteborg",
  coords: { lat: 57.71674387891259, lng: 11.947577329191638 },
  weatherData: [],
  searchTerms: [
    "Dödsbo Hantering",
    "Flytt",
    "Städning",
    "Värdering",
    "Uppköp",
    "Sanering",
  ],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setWeatherData: (state, { payload }) => {
      state.weatherData = payload;
    },
  },
});
export const { setWeatherData } = customerSlice.actions;
export const getCustomerData = (state) => state.customer;
export default customerSlice.reducer;
