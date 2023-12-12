import { Box, Button, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import authSlice from 'Stores/auth'
import { useAppDispatch, useAppSelector } from 'Stores/store'

import { Container, Left, Right, StyledHeader } from './style'

function Header() {
  const theme = useTheme()
  const token = useAppSelector(store => store.auth.token)
  const dispatch = useAppDispatch()

  return (
    <StyledHeader>
      <Container>
        <Left>
          <Link to="/">
            <Box
              sx={{ height: '20px' }}
            >
              <Typography>
                To Do App
              </Typography>
            </Box>
          </Link>
        </Left>
        <Right>
          {
            token ? (
              <Button
                size="large"
                variant="text"
                onClick={() => dispatch(authSlice.actions.resetCredentials())}
              >
                <Typography>Выйти</Typography>
              </Button>
            ) : (
              <Link to="/login">
                <Button size="large" variant="text">
                  <Typography>Войти</Typography>
                </Button>
              </Link>
            )
          }
        </Right>
      </Container>
    </StyledHeader>
  )
}
export { Header }
