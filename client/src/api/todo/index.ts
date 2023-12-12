import { apiSlice } from 'Api'

import { GetTodosParams, GetTodosResponse, GetTodosResponseDTO } from '@/models/todo'

export const todoApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getTodoList: builder.query<GetTodosResponse, GetTodosParams>({
      query: params => ({
        url: '/todos/get-list',
        method: 'GET',
        params: {
          userId: params.userId,
        },
      }),
      transformResponse: (resp: {data: GetTodosResponseDTO}) => resp.data.list.map(item => ({
        id: item.id,
        title: item.title,
        created: item.created,
        userId: item.user_id,
        isDone: item.isDone,
      })),
    }),
    // signUp: builder.mutation<SignUpResponse, SignUpBody>({
    //   query: body => ({
    //     url: '/auth/signup',
    //     method: 'POST',
    //     body: body as SignUpBodyDTO,
    //   }),
    //   transformResponse: (resp: {data: SignUpResponseDTO}) => resp.data,
    // }),
  }),
})

export const { useGetTodoListQuery } = todoApiSlice
