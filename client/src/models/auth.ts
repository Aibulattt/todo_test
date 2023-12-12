export interface LoginBody {
  email: string
  password: string
}

export type LoginBodyDTO = LoginBody

export interface LoginResponse {
  token: string
  username: string
  message: string
  userId: string
}

export type LoginResponseDTO = LoginResponse

export interface SignUpBody {
  email: string
  password: string
  name: string
}

export type SignUpBodyDTO = LoginBody

export interface SignUpResponse {
  authToken: string
  name: string
  message: string
  userId: string
}

export type SignUpResponseDTO = SignUpResponse
