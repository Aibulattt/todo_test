import { Cancel } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Box, Divider, IconButton, Modal, Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { setMessage } from 'Stores/notice'
import { useAppDispatch, useAppSelector } from 'Stores/store'

import { todoApiSlice } from '@/api/todo'
import { Todo } from '@/models/todo'

interface Props {
  isOpen: boolean
  onClose: VoidFunction
  defaultValues?: Todo
  refetch: VoidFunction
}
function CreateTodoModal({ defaultValues, isOpen, onClose, refetch }: Props) {
  const isEditForm = !!defaultValues
  const userId = useAppSelector(store => store.auth.userId)
  const dispatch = useAppDispatch()
  const { useAddTodoMutation, useUpdateTodoMutation } = todoApiSlice
  const [addTodoMutation] = useAddTodoMutation()
  const [updateTodoMutation] = useUpdateTodoMutation()
  const [title, setTitle] = useState(defaultValues?.title || '')

  const onSubmit = async () => {
    if (!title) {
      dispatch(setMessage({ message: 'Заполните обязательные поля!', severity: 'error' }))
      return
    }

    if (userId) {
      const result = isEditForm
        ? await updateTodoMutation({ title, created: defaultValues!.created, userId, isDone: defaultValues!.isDone, id: defaultValues!.id })
        : await addTodoMutation({ title, created: new Date(), userId, isDone: false })

      if ('error' in result) {
        return
      }

      dispatch(setMessage({ message: result.data.message, severity: 'success' }))
      onClose()
      refetch()
    }
  }

  return (
    <Modal
      onClick={onClose}
      onClose={onClose}
      open={isOpen}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Paper onClick={e => e.stopPropagation()} sx={{ maxWidth: '60vw', overflowX: 'hidden', borderRadius: '15px' }}>
          <Box
            sx={theme => ({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pl: 2,
              backgroundColor: theme.palette.grey['200'],
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '12px',
            })}
          >
            <Typography variant="h6">
              {isEditForm ? 'Редактировать задачу' : 'Создать задачу'}
            </Typography>
            <IconButton onClick={onClose}>
              <Cancel />
            </IconButton>
          </Box>
          <Divider />
          <Box>
            <form style={{
              padding: '40px',
            }}
            >
              <TextField
                sx={{ width: '500px' }}
                label="Название"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <Box>
                <LoadingButton
                  onClick={onSubmit}
                  sx={{
                    ml: 'auto',
                    mt: '20px',
                    display: 'block',
                  }}
                  variant="contained"
                >
                  Сохранить
                </LoadingButton>
              </Box>
            </form>
          </Box>
        </Paper>
      </Box>
    </Modal>
  )
}

export { CreateTodoModal }
