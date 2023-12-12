import { Button, Divider, Paper, Popover, styled, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'

const ConfirmTooltip = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
}))

interface Props extends PropsWithChildren {
  title: string
  element: HTMLElement| null
  setElement: (element: HTMLElement| null) => void
  onClose?: VoidFunction
  onSuccess?: VoidFunction
}

function Confirm({ title, element, setElement, onSuccess, onClose, children }: Props) {
  const handleClose = () => {
    if (onClose) onClose()
    setElement(null)
  }

  const handleSuccess = () => {
    if (onSuccess) onSuccess()
    setElement(null)
  }

  return (
    <Popover
      open={Boolean(element)}
      anchorEl={element}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Paper sx={{ padding: 1 }}>
        {children}
        <Typography variant="body2" sx={{ marginTop: 0.5 }}>
          {title}
        </Typography>
        <Divider />
        <ConfirmTooltip>
          <Button size="small" variant="outlined" onClick={handleClose}>Отмена</Button>
          <Button size="small" variant="contained" onClick={handleSuccess}>Да</Button>
        </ConfirmTooltip>
      </Paper>
    </Popover>
  )
}

export { Confirm }
