import { Box, Button, CircularProgress, Container, Typography } from '@mui/material'
import { useAppSelector } from 'Stores/store'

import { todoApiSlice } from '@/api/todo'
import { CreateTodoModal } from '@/components/createTodoModal'
import { TodoItem } from '@/components/todoItem'

function MainPage() {
  const userId = useAppSelector(store => store.auth.userId)
  const { useGetTodoListQuery } = todoApiSlice
  const { data, isFetching } = useGetTodoListQuery({
    userId: userId!,
  }, { skip: !userId })

  return (
    <Container>
      <Box sx={{
        maxWidth: '850px',
        margin: '30px auto',
        borderRadius: '5px',
        bgcolor: '#ccc',
        padding: '10px',
      }}
      >
        {isFetching
          ? <CircularProgress sx={{ display: 'block',margin: '0 auto' }} />
          : (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>
                  Task List
                </Typography>
                <Button>
                  Добавить задачу
                </Button>
              </Box>
              <Box>
                {data?.map(todo => <TodoItem todo={todo} />)}
              </Box>
            </>
          )}
      </Box>
      <CreateTodoModal />
    </Container>
  )
}

export { MainPage }
