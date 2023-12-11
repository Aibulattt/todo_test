import { AlertColor } from '@mui/material'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  message: string | null
  severity: AlertColor| null
}

const initialState: InitialState = {
  message: null,
  severity: null,
}

export const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<{message: string; severity?: AlertColor}>) => {
      state.message = action.payload.message
      state.severity = action.payload.severity || null
    },
  },
})

export const { setMessage } = noticeSlice.actions

export default noticeSlice.reducer
