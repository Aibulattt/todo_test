export interface Todo {
  id: string
  title: string
  created: Date
  userId: string
  isDone: boolean
}

export interface ToDoDTO {
  id: string
  title: string
  created: Date
  user_id: string
  is_done: boolean
}

export interface GetTodosResponseDTO {
  list: ToDoDTO[]
}

export interface GetTodosResponse {
  listDone: Todo[]
  listNotDone: Todo[]
}

export interface GetTodosParams {
  userId: string
}

export type PostTodoParams = Omit<Todo, 'id'>

export type PostTodoParamsDTO = Omit<ToDoDTO, 'id'>

export type UpdateTodoParams = Todo

export type UpdateTodoParamsDTO = ToDoDTO

export interface PostTodoResponseDTO {
  todo: ToDoDTO
  message: string
}

export interface PostTodoResponse {
  todo: Todo
  message: string
}
