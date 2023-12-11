import { configureStore, isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import authSlice from 'Stores/auth'
import { noticeSlice, setMessage } from 'Stores/notice'

import { apiSlice } from '../api'

const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => next => (action: any) => {
  if (isRejectedWithValue(action)) {
    if (action.payload?.status) {
      if ([401,403].includes(action.payload.status)) {
        api.dispatch(authSlice.actions.resetCredentials())
        api.dispatch(apiSlice.util.resetApiState())
      }
    }
    if (action.payload?.data?.data?.data?.message) {
      api.dispatch(setMessage({ message: action.payload.data.data.data.message, severity: 'error' }))
    } else if (action.payload?.data?.data?.message) {
      api.dispatch(setMessage({ message: action.payload.data.data.message, severity: 'error' }))
    } else {
      api.dispatch(setMessage({ message: 'Ошибка сервера', severity: 'error' }))
    }
  }

  return next(action)
}

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
    notice: noticeSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware, rtkQueryErrorLogger),
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
