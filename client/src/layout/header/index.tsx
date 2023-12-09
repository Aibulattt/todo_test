import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, Button, IconButton, TextField, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import {Navigation} from '../navigation';
import { Container, Left, Right, StyledHeader } from './style';

function Header() {
  const theme = useTheme();

  return (
    <StyledHeader>
      <Container>
        <Left>
          <Link to="/">
            <Box
              // alt="logo"
              sx={{ height: '20px' }}
            />
          </Link>
        </Left>
        <Box>
          <Navigation />
        </Box>
        <Right>
          {
            // authStore.authToken ? (
            true ? (
              <>
                <IconButton
                  // onClick={themeStore.setTheme}
                  color="default"
                >
                  {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
                </IconButton>
                <Button
                  size="large"
                  variant="text"
                  // disabled={privateSessionStore.initSessionAction.isPending || sessionStore.endSessionAction.isPending || isLogoutPending}
                  // onClick={() => logout()}
                >
                  <Typography>Выйти</Typography>
                </Button>
              </>
            ) : (
              <Button onClick={() => {}} size="large" variant="text">
                <Typography>Войти</Typography>
              </Button>
            )
          }
        </Right>
      </Container>
    </StyledHeader>
  );
}
export {Header};
