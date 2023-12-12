import { apiSlice } from 'Api'

import {
  GetTodosParams,
  GetTodosResponse,
  GetTodosResponseDTO,
  PostTodoParams,
  PostTodoParamsDTO, PostTodoResponse, PostTodoResponseDTO, Todo, UpdateTodoParams, UpdateTodoParamsDTO
} from '@/models/todo'

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
      transformResponse: (resp: {data: GetTodosResponseDTO}) => {
        const listDone: Todo[] = []
        const listNotDone: Todo[] = []
        resp.data.list.forEach(item => {
          if (item.is_done) {
            listDone.push({
              id: item.id,
              title: item.title,
              created: item.created,
              userId: item.user_id,
              isDone: item.is_done,
            })
          } else {
            listNotDone.push({
              id: item.id,
              title: item.title,
              created: item.created,
              userId: item.user_id,
              isDone: item.is_done,
            })
          }
        })
        return { listDone, listNotDone }
      },
    }),
    addTodo: builder.mutation<PostTodoResponse, PostTodoParams>({
      query: body => ({
        url: '/todos/add',
        method: 'POST',
        body: {
          title: body.title,
          created: body.created,
          is_done: body.isDone,
          user_id: body.userId,
        } as PostTodoParamsDTO,
      }),
      transformResponse: (resp: { data: PostTodoResponseDTO }) => ({
        todo: {
          userId: resp.data.todo.user_id,
          title: resp.data.todo.title,
          isDone: resp.data.todo.is_done,
          created: resp.data.todo.created,
          id: resp.data.todo.id,
        },
        message: resp.data.message,
      }),
    }),
    updateTodo: builder.mutation<PostTodoResponse, UpdateTodoParams>({
      query: body => ({
        url: '/todos/update',
        method: 'put',
        body: {
          title: body.title,
          created: body.created,
          is_done: body.isDone,
          user_id: body.userId,
          id: body.id,
        } as UpdateTodoParamsDTO,
      }),
      transformResponse: (resp: { data: PostTodoResponseDTO }) => ({
        todo: {
          userId: resp.data.todo.user_id,
          title: resp.data.todo.title,
          isDone: resp.data.todo.is_done,
          created: resp.data.todo.created,
          id: resp.data.todo.id,
        },
        message: resp.data.message,
      }),
    }),
    deleteTodo: builder.mutation<{message: string}, {id: string}>({
      query: body => ({ url: '/todos/delete',
        method: 'delete',
        body: {
          id: body.id,
        } }),
      transformResponse: (resp: { data: { message: string } }) => resp.data,
    }),
  }),
})

export const {
  useGetTodoListQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApiSlice
