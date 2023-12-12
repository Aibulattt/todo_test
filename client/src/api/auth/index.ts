import { apiSlice } from 'Api'
import {
  LoginBody,
  LoginBodyDTO,
  LoginResponse,
  LoginResponseDTO,
  SignUpBody,
  SignUpBodyDTO,
  SignUpResponse,
  SignUpResponseDTO
} from 'Models'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginBody>({
      query: body => ({
        url: '/auth/login',
        method: 'POST',
        body: body as LoginBodyDTO,
      }),
      transformResponse: (resp: {data: LoginResponseDTO}) => resp.data,
    }),
    signUp: builder.mutation<SignUpResponse, SignUpBody>({
      query: body => ({
        url: '/auth/signup',
        method: 'POST',
        body: body as SignUpBodyDTO,
      }),
      transformResponse: (resp: {data: SignUpResponseDTO}) => resp.data,
    }),
  }),
})

export const { useLoginMutation, useSignUpMutation } = authApiSlice
