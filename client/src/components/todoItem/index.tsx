import { Box, Button, Checkbox, FormLabel, Typography } from '@mui/material'
import { useState } from 'react'
import { setMessage } from 'Stores/notice'
import { useAppDispatch } from 'Stores/store'

import { todoApiSlice } from '@/api/todo'
import { Todo } from '@/models/todo'

import { Confirm } from '../Confirm'

interface Props {
  todo: Todo
  onOpenModal: VoidFunction
  refetch: VoidFunction
}

function TodoItem({ todo, onOpenModal, refetch }: Props) {
  const dispatch = useAppDispatch()
  const { useUpdateTodoMutation, useDeleteTodoMutation } = todoApiSlice
  const [updateTodoMutation] = useUpdateTodoMutation()
  const [deleteTodoMutation] = useDeleteTodoMutation()
  const [isDone, setIsDone] = useState(todo.isDone)
  const [confirmElement, setConfirmElement] = useState<HTMLElement | null>(null)

  const handleUpdateTodo = async () => {
    await updateTodoMutation({ isDone: !isDone, id: todo.id, title: todo.title, userId: todo.userId, created: todo.created })
    refetch()
  }

  const handleDeleteTodo = async () => {
    const result = await deleteTodoMutation({ id: todo.id })

    if ('error' in result) {
      return
    }

    dispatch(setMessage({ message: result.data.message, severity: 'success' }))
    refetch()
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: '#d3c842',
        borderRadius: '10px',
        p: '5px',
        cursor: 'pointer',
        mb: '10px',
      }}
    >
      <Box>
        <Typography>
          {todo.title}
        </Typography>
        <Typography fontSize={10} color="#fff" sx={{ pl: '5px' }}>
          {new Date(todo.created).toLocaleString()}
        </Typography>
      </Box>
      <Box>
        <FormLabel>
          Выполнено
          <Checkbox
            checked={isDone}
            onChange={e => {
              e.stopPropagation()
              setIsDone(e.target.checked)
              handleUpdateTodo()
            }}
          />
        </FormLabel>
        <Button onClick={onOpenModal}>
          Редактировать
        </Button>
        <Button sx={{ color: '#af0000' }} onClick={e => setConfirmElement(e.currentTarget)}>
          Удалить
        </Button>
      </Box>
      <Confirm
        title="Вы действительно хотите удалить задачу?"
        element={confirmElement}
        setElement={setConfirmElement}
        onSuccess={handleDeleteTodo}
      >
        Прерывание сессии
      </Confirm>
    </Box>
  )
}

export { TodoItem }
