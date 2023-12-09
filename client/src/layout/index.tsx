import { Box } from '@mui/material';
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import {MainPage} from '../pages/main';
import {MainLayout} from './main-layout';
import { routes } from './routes-config';
import {Auth} from "../pages/auth";

function PreRoute() {
  return (
    <React.Suspense fallback={(
      <Box sx={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        Loading
      </Box>
    )}
    >
      <Outlet />
    </React.Suspense>
  );
}

function Router() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path={routes.auth.path} element={<PreRoute />}>
          <Route index element={<Auth />} />
        </Route>
      </Route>
    </Routes>
  );
}

export { Router }
