import { configureStore } from '@reduxjs/toolkit';
import exampleReducer, { create } from './slices/example';

export function buildFrom(initialState) {
  const exampleReducer = create(initialState?.example).reducer;

  const reducer = {
    example: exampleReducer,
  };
  return configureStore({ reducer });
}

