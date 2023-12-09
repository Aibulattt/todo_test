import { Alert, Button, Container, CssBaseline, ThemeProvider, Typography }
  from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import {Header} from './header';
import {theme} from "../styles";

function MainLayout() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/*{authStore.authToken*/}
      {true
        ? (
          <Outlet />
        )
        : (
          <Container>
            <Alert style={{ marginTop: '50px' }} severity="info">Пожалуйста, пройдите авторизацию</Alert>
          </Container>
        )}
    </ThemeProvider>
  );
}

export { MainLayout };
