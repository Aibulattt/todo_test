import { Alert } from '@mui/lab'
import { Snackbar, SnackbarCloseReason } from '@mui/material'
import { setMessage } from 'Stores/notice'
import { useAppDispatch, useAppSelector } from 'Stores/store'

type AllowedCloseReasons = Record<SnackbarCloseReason, boolean>

interface Props {
  allowCloseOn?: AllowedCloseReasons
}
const Notice = ({ allowCloseOn }: Props) => {
  const dispatch = useAppDispatch()
  const { message, severity } = useAppSelector(state => state.notice)

  const handleClose = () => {
    dispatch(setMessage({ message: '' }))
  }

  if (!message) return null

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={!!message}
      autoHideDuration={3000}
      onClose={(_, reason) => {
        if (reason === 'timeout' && allowCloseOn?.timeout) {
          handleClose()
        }
        if (reason === 'clickaway' && allowCloseOn?.clickaway) {
          handleClose()
        }
        if (reason === 'escapeKeyDown' && allowCloseOn?.escapeKeyDown) {
          handleClose()
        }
      }}
    >
      <Alert onClose={handleClose} severity={severity || 'info'} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export { Notice }
