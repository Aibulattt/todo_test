import './styles/index.css'

import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from 'Stores/store'

import { Notice } from '@/components/notice/Notice'

import { Router } from './layout'
import { Header } from './layout/header'
import { theme } from './styles'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <Box sx={{
            bgcolor: '#bda3a3',
            width: '100%',
            height: '100%',
            pt: '30px',
          }}
          >
            <Router />
          </Box>
          <Notice />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
