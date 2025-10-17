import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  color: [],
  material: [],
  priceFrom: 0,
  priceTo: 100000,
  sortBy: "featured",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.category.includes(category)) {
        state.category = state.category.filter((c) => c !== category);
      } else {
        state.category.push(category);
      }
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    toggleColor: (state, action) => {
      const color = action.payload;
      if (state.color.includes(color)) {
        state.color = state.color.filter((c) => c !== color);
      } else {
        state.color.push(color);
      }
    },
    setMaterial: (state, action) => {
      state.material = action.payload;
    },
    toggleMaterial: (state, action) => {
      const material = action.payload;
      if (state.material.includes(material)) {
        state.material = state.material.filter((m) => m !== material);
      } else {
        state.material.push(material);
      }
    },
    setPriceRange: (state, action) => {
      state.priceFrom = action.payload.priceFrom;
      state.priceTo = action.payload.priceTo;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
    setFiltersFromURL: (state, action) => {
      const { category, color, material, priceFrom, priceTo, sortBy } =
        action.payload;
      if (category) state.category = category;
      if (color) state.color = color;
      if (material) state.material = material;
      if (priceFrom !== undefined) state.priceFrom = priceFrom;
      if (priceTo !== undefined) state.priceTo = priceTo;
      if (sortBy) state.sortBy = sortBy;
    },
  },
});

export const {
  setCategory,
  toggleCategory,
  setColor,
  toggleColor,
  setMaterial,
  toggleMaterial,
  setPriceRange,
  setSortBy,
  resetFilters,
  setFiltersFromURL,
} = filtersSlice.actions;

export const selectFilters = (state) => state.filters;
export const selectCategory = (state) => state.filters.category;
export const selectColor = (state) => state.filters.color;
export const selectMaterial = (state) => state.filters.material;
export const selectPriceRange = (state) => ({
  priceFrom: state.filters.priceFrom,
  priceTo: state.filters.priceTo,
});
export const selectSortBy = (state) => state.filters.sortBy;

export default filtersSlice.reducer;