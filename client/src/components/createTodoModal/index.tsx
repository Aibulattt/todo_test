import { LoadingButton } from '@mui/lab'
import { Checkbox, Container, Modal, TextField, Typography } from '@mui/material'
import { useState } from 'react'

import { Todo } from '@/models/todo'

interface Props {
  defaultValues?: Todo
}
function CreateTodoModal({ defaultValues }: Props) {
  const isEditForm = false
  const [title, setTitle] = useState(defaultValues?.title || '')
  const [isDone, setIsDone] = useState(defaultValues?.isDone || false)

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', maxWidth: '500px' }}>
      <Modal
        sx={{
          maxWidth: '500px',
          maxHeight: '500px',
          display: 'flex',
          justifyContent: 'center',
          margin: 'auto',
          alignItems: 'center',
          bgcolor: '#fff',
          borderRadius: '10px',
        }}
        open={false}
      >
        <>
          <Typography>
            {isEditForm ? 'Редактировать задачу' : 'Создать задачу'}
          </Typography>
          <form>
            <TextField
              label="Название"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Checkbox
              checked={isDone}
              onChange={e => setIsDone(e.target.checked)}
            />
            <LoadingButton>
              Сохранить
            </LoadingButton>
          </form>
        </>
      </Modal>
    </Container>
  )
}

export { CreateTodoModal }
