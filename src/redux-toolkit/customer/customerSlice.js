import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "info@alladodsbo.se",
  phone: "07000000",
  business: "Döddsbo Sv",
  adress: "Nära dig i hela Sverige",
  zip: "Huvudkontor: ",
  city: "Lidköping",
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
