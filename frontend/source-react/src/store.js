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
import OrderBackdropReducer from './gvg/common/reducers/OrderBackdropReducer'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}
const persistedReducer = persistReducer(persistConfig, CartReducer)

export const rootStore = configureStore({
  reducer: {
    carts: persistedReducer,
    order: OrderBackdropReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(rootStore)

