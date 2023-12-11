import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LS_AUTH_TOKEN, LS_USERNAME } from '@/consts'

interface InitialState {
  token: string | null
  username: string | null
}

const initialState: InitialState = {
  token: localStorage.getItem(LS_AUTH_TOKEN) || null,
  username: localStorage.getItem(LS_USERNAME) || null,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{token: string; username: string}>) => {
      state.token = action.payload.token
      state.username = action.payload.username
      localStorage.setItem(LS_AUTH_TOKEN, JSON.stringify(action.payload.token))
      localStorage.setItem(LS_USERNAME, JSON.stringify(action.payload.username))
    },
    resetCredentials: state => {
      state.token = null
      state.username = null
      localStorage.removeItem(LS_AUTH_TOKEN)
      localStorage.removeItem(LS_USERNAME)
    },
  },
})

export default slice
