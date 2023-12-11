import { LoadingButton } from '@mui/lab'
import { Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import authSlise from 'Stores/auth'
import { setMessage } from 'Stores/notice'
import { useAppDispatch } from 'Stores/store'

import { authApiSlice } from '@/api/auth/request'

import { FormContainer } from './style'

function Auth() {
  const dispatch = useAppDispatch()
  const { useLoginMutation } = authApiSlice
  const [loginMutation, { isLoading }] = useLoginMutation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async () => {
    if (!email || !password) {
      return dispatch(setMessage({ message: 'Заполните обязательные поля!', severity: 'error' }))
    }

    const result = await loginMutation({ email, password })

    if ('error' in result) {
      return
    }

    dispatch(authSlise.actions.setCredentials({
      token: result.data.token,
      user: result.data.username,
    }))
  }

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3">
        Авторизация
      </Typography>
      <FormContainer>
        <TextField
          variant="standard"
          label="Email"
          value={email}
          type="email"
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Пароль"
          value={password}
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <LoadingButton
          variant="contained"
          loading={isLoading}
          onClick={onSubmit}
        >
          Войти
        </LoadingButton>
        <Link to="/signup">
          <Button fullWidth variant="outlined">
            Нет аккаунта?
          </Button>
        </Link>
      </FormContainer>
    </Container>
  )
}

export { Auth }
