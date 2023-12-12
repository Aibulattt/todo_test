import { Box, Button, Checkbox, Typography } from '@mui/material'

import { Todo } from '@/models/todo'

interface Props {
  todo: Todo
}

function TodoItem({ todo }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: '#c2c2c2',
        borderRadius: '10px',
        p: '5px',
      }}
    >
      <Typography>
        {todo.title}
      </Typography>
      <Box>
        <Checkbox
          checked={todo.isDone}
        />
        <Button>
          Удалить
        </Button>
      </Box>
    </Box>
  )
}

export { TodoItem }
