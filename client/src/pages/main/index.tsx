import { Box, Button, CircularProgress, Container, Typography } from '@mui/material'
import { useState } from 'react'
import { useAppSelector } from 'Stores/store'

import { todoApiSlice } from '@/api/todo'
import { CreateTodoModal } from '@/components/createTodoModal'
import { TodoItem } from '@/components/todoItem'
import { Todo } from '@/models/todo'

function MainPage() {
  const { userId, username } = useAppSelector(store => store.auth)
  const { useGetTodoListQuery } = todoApiSlice
  const { data, isFetching, refetch } = useGetTodoListQuery({
    userId: userId!,
  }, { skip: !userId })

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [editValues, setEditValues] = useState<Todo | null>(null)

  return (
    <Container>
      <Box sx={{
        maxWidth: '850px',
        margin: 'auto',
        borderRadius: '5px',
        bgcolor: '#1f94a7',
        padding: '10px',
      }}
      >
        {isFetching
          ? <CircularProgress sx={{ display: 'block',margin: '0 auto' }} />
          : (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '15px' }}>
                <Typography color="#fff">
                  {`Task List of ${username}`}
                </Typography>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={() => setIsOpenModal(true)}
                >
                  Добавить задачу
                </Button>
              </Box>
              {!!data?.listDone.length && (
                <Box>
                  <Typography color="#fff">Выполненные задачи:</Typography>
                  {data?.listDone.map(todo => (
                    <TodoItem
                      refetch={refetch}
                      key={todo.id}
                      todo={todo}
                      onOpenModal={() => {
                        setEditValues(todo)
                        setIsOpenModal(true)
                      }}
                    />
                  ))}
                </Box>
              )}
              {!!data?.listNotDone.length && (
                <Box sx={{ mt: '15px' }}>
                  <Typography color="#fff">Не выполненные задачи:</Typography>
                  {data?.listNotDone.map(todo => (
                    <TodoItem
                      refetch={refetch}
                      key={todo.id}
                      todo={todo}
                      onOpenModal={() => {
                        setEditValues(todo)
                        setIsOpenModal(true)
                      }}
                    />
                  ))}
                </Box>
              )}
            </>
          )}
      </Box>
      {isOpenModal && (
        <CreateTodoModal
          refetch={refetch}
          defaultValues={editValues || undefined}
          isOpen={isOpenModal}
          onClose={() => {
            setIsOpenModal(false)
            setEditValues(null)
          }}
        />
      )}
    </Container>
  )
}

export { MainPage }
