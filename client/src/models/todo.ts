export interface Todo {
  id: string
  title: string
  created: string
  userId: string
  isDone: boolean
}

export interface GetTodosResponseDTO {
  list: {
    id: string
    title: string
    created: string
    user_id: string
    isDone: boolean
  }[]
}

export type GetTodosResponse = Todo[]

export interface GetTodosParams {
  userId: string
}
