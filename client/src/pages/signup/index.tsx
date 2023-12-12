import { LoadingButton } from '@mui/lab'
import { Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authSlise from 'Stores/auth'
import { setMessage } from 'Stores/notice'
import { useAppDispatch } from 'Stores/store'

import { authApiSlice } from '@/api/auth'

import { FormContainer } from '../auth/style'

function Signup() {
  const dispatch = useAppDispatch()
  const { useSignUpMutation } = authApiSlice
  const [signUpMutation, { isLoading }] = useSignUpMutation()

  const [email, setEmail] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  const onSubmit = async () => {
    if (!email || !password || !repeatPassword) {
      dispatch(setMessage({ message: 'Заполните обязательные поля!', severity: 'error' }))
      return
    }

    if (password !== repeatPassword) {
      dispatch(setMessage({ message: 'Пароли не совпадают!', severity: 'error' }))
      return
    }

    const result = await signUpMutation({ email, password, name })

    if ('error' in result) {
      return
    }

    dispatch(setMessage({ message: result.data.message, severity: 'success' }))

    dispatch(authSlise.actions.setCredentials({
      token: result.data.authToken,
      username: result.data.name,
      userId: result.data.userId,
    }))

    nav('/')
  }
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3">
        Регистрация
      </Typography>
      <FormContainer>
        <TextField
          variant="standard"
          label="Email*"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Имя"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Пароль*"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Повторить пароль*"
          value={repeatPassword}
          onChange={e => setRepeatPassword(e.target.value)}
        />
        <LoadingButton
          variant="contained"
          loading={isLoading}
          onClick={onSubmit}
        >
          Зарегистрироваться
        </LoadingButton>
        <Link to="/login">
          <Button fullWidth variant="outlined">
            Уже есть аккаунт?
          </Button>
        </Link>
      </FormContainer>
    </Container>
  )
}

export { Signup }
