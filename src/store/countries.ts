import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

// Define Country model with name and code properties
interface Country {
  name: string;
  code: string;
}

interface CountriesState {
  countries: Country[];
}

const initialState: CountriesState = {
  countries: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<Country[]>) => {
      state.countries = action.payload;
    },
    // Add other reducers for country-related actions if needed, e.g.,
    // setSelectedCountry: (state, action: PayloadAction<Country | null>) => {
    //   state.selectedCountry = action.payload;
    // },
  },
});

export const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
