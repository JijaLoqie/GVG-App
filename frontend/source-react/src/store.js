import CartReducer from './gvg/common/reducers/CartReducer'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import FilterReducer from './gvg/features/filters/models/FilterReducer'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}
const persistedReducer = persistReducer(persistConfig, CartReducer)

export const rootStore = configureStore({
  reducer: {
    carts: persistedReducer,
    filter: FilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(rootStore)

